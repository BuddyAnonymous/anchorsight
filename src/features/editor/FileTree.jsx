/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { ChevronRightIcon, FileIcon, ArrowRightIcon } from "@primer/octicons-react";
import { Circle, CircleDot } from "lucide-react";
import useFile from "../../store/useFile";
import { dataExample } from "../../data/anchor/dataExample";
import { FileFormat } from "../../enums/file.enum";

function FileTree({
  fileTree,
  keyName,
  isArrowShown,
  isCheckBoxShown,
  setAccountTypes,
  accountTypes,
  currentPath,
  allAccountData,
  setAllAccountData,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const setContents = useFile(state => state.setContents);
  const [isCreating, setIsCreating] = useState({
    isFolder: false,
    showInput: false,
    folderId: null,
  });

  const [isRenaming, setIsRenaming] = useState({
    showInput: false,
    name: "",
    newName: "",
    id: null,
  });
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleRenameSubmit = () => {
    if (
      isRenaming.id &&
      isRenaming.newName &&
      isRenaming.name !== isRenaming.newName &&
      isRenaming.newName.trim() !== ""
    ) {
      handleRename(isRenaming.id, isRenaming.newName);
    }
    setIsRenaming({
      showInput: false,
      name: "",
      newName: "",
      id: null,
    });
  };

  function snakeToCamel(snake) {
    return snake.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  useEffect(() => {
    if (isRenaming.showInput && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isRenaming.showInput]);

  const handleArrowRightClick = e => {
    e.stopPropagation();
    console.log("BLABLABLA", allAccountData[keyName], keyName);
    setContents({
      contents: JSON.stringify(allAccountData[keyName], null, 2),
      format: FileFormat.JSON,
    });
  };
  const handleKebabClick = e => {
    e.stopPropagation();
    setIsVisible(!isVisible);
    const accountTypesNew = JSON.parse(JSON.stringify(accountTypes)); // deep copy
    let helpObject = accountTypesNew;
    let parent = null;
    let key = null;

    for (let i = 0; i < currentPath.length; i++) {
      if (i === currentPath.length - 1) {
        // Perform deletion
        if (isVisible) {
          if (Array.isArray(helpObject)) {
            helpObject = helpObject.filter(obj => obj.name !== currentPath[i].name);
            if (parent && key !== null) parent[key] = helpObject;
          }
        }
        else {
          if (Array.isArray(helpObject)) {
            helpObject.push(currentPath[i]);
            if (parent && key !== null) parent[key] = helpObject;
          }
        }
        break;
      }

      if (typeof currentPath[i] === "object") {
        helpObject.some((item, index) => {
          if (item.name === currentPath[i].name) {
            parent = item.type;
            key = "fields";
            helpObject = item.type.fields;
            return true;
          }
        });
      } else {
        parent = helpObject[currentPath[i]];
        key = "fields";
        helpObject = helpObject[currentPath[i]].fields;
      }
    }
    if (isVisible && currentPath.length > 0) {

      let allAccountDataHelper = allAccountData;
      allAccountDataHelper = allAccountDataHelper[currentPath[0]];
      allAccountDataHelper.forEach((item, index) => {
        let newAllAccountDataHelper = allAccountDataHelper[index];
        for (let i = 1; i < currentPath.length; i++) {
          if (i === currentPath.length - 1) {
            delete newAllAccountDataHelper[snakeToCamel(currentPath[i].name)];
            break;
          }
          newAllAccountDataHelper = newAllAccountDataHelper[snakeToCamel(currentPath[i].name)];
        }
      });
      setAccountTypes(accountTypesNew);
      setContents({
        contents: JSON.stringify(allAccountDataHelper, null, 2),
        format: FileFormat.JSON,
      });
    }
    else if (currentPath.length > 0) {
      let allAccountDataHelper = allAccountData;
      allAccountDataHelper = allAccountDataHelper[snakeToCamel(currentPath[0])];
      let dataExampleHelper = structuredClone(dataExample);
      allAccountDataHelper.forEach((item, index) => {
        let newAllAccountDataHelper = allAccountDataHelper[index];
        for (let i = 1; i < currentPath.length; i++) {
          if (i === currentPath.length - 1) {
            newAllAccountDataHelper[snakeToCamel(currentPath[i].name)] =
              dataExampleHelper[index][snakeToCamel(currentPath[i].name)];
            break;
          }
          newAllAccountDataHelper = newAllAccountDataHelper[snakeToCamel(currentPath[i].name)];
          dataExampleHelper = dataExampleHelper[snakeToCamel(currentPath[i].name)];
        }
      });
      setContents({
        contents: JSON.stringify(allAccountDataHelper, null, 2),
        format: FileFormat.JSON,
      });
    }
  };

  const handleSubmission = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");

    if (name.trim() === "") return;

    if (isCreating.isFolder) {
      handleAddFolder(isCreating.folderId, name);
    } else {
      handleAddFile(isCreating.folderId, name);
    }

    e.target.reset();
    setIsCreating({ ...isCreating, showInput: false });
  };

  return (
    <>
      <div
        onMouseOver={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative text-xs flex select-none cursor-pointer items-center justify-between gap-6 py-1 px-2 pr-1 text-vsdark-5 rounded hover:bg-vsdark-4/20 hover:text-vsdark-6"
      >
        <div className={`flex items-center gap-1.5 flex-1 text-base ${isArrowShown ? "font-semibold" : ""}`}>
          <span className={`${isExpanded ? "transform rotate-90" : ""} flex items-center`}>
            {typeof fileTree == "object" ? <ChevronRightIcon size={12} /> : null}
          </span>
          <span className="-mt-[0px]">
            {isRenaming.showInput && isRenaming.id === fileTree.id ? (
              <input
                ref={inputRef}
                className="w-full h-full border-0 bg-black outline-0 px-0 py-1"
                defaultValue={fileTree.name}
                onChange={e => setIsRenaming({ ...isRenaming, newName: e.target.value })}
                onBlur={() => {
                  handleRenameSubmit();
                  setIsRenaming({ showInput: false, id: null });
                }}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    handleRenameSubmit();
                  }
                }}
              />
            ) : (
              keyName
            )}
          </span>
        </div>
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={handleKebabClick}
            className={`p-1 rounded flex items-center justify-center hover:bg-vsdark-4/50 hover:text-vsdark-6 visible moreRounded
              }`}
          >
            {isCheckBoxShown ? (
              isVisible ? (
                <CircleDot size={10} className="items-center justify-center flex" />
              ) : (
                <Circle size={10} />
              )
            ) : null}
          </button>
        </div>
        <div className="relative">
          {isArrowShown ? (
            <button
              ref={buttonRef}
              onClick={handleArrowRightClick}
              className={`p-1 rounded flex items-center justify-center hover:bg-vsdark-4/50 hover:text-vsdark-6 focus:bg-vsdark-4/50 focus:text-vsdark-6 ${showOptions ? "visible" : "invisible"
                }`}
            >
              <ArrowRightIcon size={10} />
            </button>
          ) : null}
        </div>
      </div>

      {isExpanded && (
        <div className="pl-2 left-border">
          {isCreating.showInput && (
            <form onSubmit={handleSubmission} className="flex items-center w-full gap-1.5">
              <span className="flex items-center justify-center text-vsdark-5">
                {isCreating.isFolder ? <ChevronRightIcon size={12} /> : <FileIcon size={12} />}
              </span>
              <input
                onBlur={() => setIsCreating({ ...isCreating, showInput: false })}
                autoFocus
                type="text"
                name="name"
                className="text-xs outline-none ring-1 ring-vsdark-3 ring-inset w-full py-1 px-2 rounded bg-black text-vsdark-6 focus:ring-blue-400"
              />
            </form>
          )}
          {fileTree.fields != undefined &&
            fileTree.fields.map(elem => (
              <FileTree
                keyName={
                  elem.type.kind == undefined
                    ? typeof elem.type == "object"
                      ? elem.type.vec != undefined
                        ? elem.name + " (Vec<" + elem.type.vec.name + ">)"
                        : elem.name + " ([" + elem.type.array[0] + ";" + elem.type.array[1] + "])"
                      : elem.name + " (" + elem.type + ")"
                    : elem.name
                }
                fileTree={
                  typeof elem.type === "object" && elem.type.kind != undefined ? elem.type : ""
                }
                isArrowShown={false}
                isCheckBoxShown={true}
                setAccountTypes={setAccountTypes}
                currentPath={currentPath.concat(elem)}
                accountTypes={accountTypes}
                allAccountData={allAccountData}
                setAllAccountData={setAllAccountData}
              />
            ))}
        </div>
      )}
    </>
  );
}

function DropdownMenu({ isOpen, onClose, type, onItemClick, fileTreeId, fileTreeName }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleClick = action => e => {
    e.stopPropagation();
    onItemClick(action, fileTreeId, fileTreeName);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute -right-1 top-7 shadow-xl min-w-48 bg-vsdark-3 backdrop-blur-3xl z-10 rounded"
    >
      {type === "folder" && (
        <div className="flex flex-col p-1.5 gap-1">
          <button
            onClick={handleClick("newFile")}
            className="w-full text-left px-3 py-1 text-vsdark-5 hover:bg-vsdark-4/30 hover:text-vsdark-6 rounded text-xs"
          >
            New File...
          </button>
          <button
            onClick={handleClick("newFolder")}
            className="w-full text-left px-3 py-1 text-vsdark-5 hover:bg-vsdark-4/30 hover:text-vsdark-6 rounded text-xs"
          >
            New Folder...
          </button>
        </div>
      )}

      {type === "folder" && <div className="border-t border-vsdark-4/30 mt-1" />}

      <div className="flex flex-col p-1.5 gap-1">
        <button
          onClick={handleClick("rename")}
          className="w-full text-left px-3 py-1 text-vsdark-5 hover:bg-vsdark-4/30 hover:text-vsdark-6 rounded text-xs"
        >
          Rename...
        </button>
        <button
          onClick={handleClick("delete")}
          className="w-full text-left px-3 py-1 text-vsdark-5 hover:bg-vsdark-4/30 hover:text-vsdark-6 rounded text-xs"
        >
          Delete {type === "folder" ? "Folder" : "File"}
        </button>
      </div>
    </div>
  );
}

export default FileTree;
