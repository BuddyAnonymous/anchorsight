import React, { useState, useCallback, useEffect } from "react";
import { LoadingOverlay } from "@mantine/core";
import styled from "styled-components";
import Editor, { type EditorProps, loader, type OnMount, useMonaco } from "@monaco-editor/react";
import useConfig from "../../store/useConfig";
import useFile from "../../store/useFile";
import FileTree from "./FileTree";
// import { accountTypesExample as filesData } from "../../data/anchor/accountTypesExample";
import { dataExample } from "../../data/anchor/dataExample";

loader.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs",
  },
});

const editorOptions: EditorProps["options"] = {
  formatOnPaste: true,
  tabSize: 2,
  formatOnType: true,
  minimap: { enabled: false },
  stickyScroll: { enabled: false },
  scrollBeyondLastLine: false,
  placeholder: "Start typing...",
};

const TextEditor = () => {
  const [fileTree, setFileTree] = useState([]);
  const monaco = useMonaco();
  const contents = useFile(state => state.contents);
  const [allAccountData, setAllAccountData] = useState({});
  const setContents = useFile(state => state.setContents);
  const [accountTypes, setAccountTypes] = useState([]);
  const setError = useFile(state => state.setError);
  const jsonSchema = useFile(state => state.jsonSchema);
  const getHasChanges = useFile(state => state.getHasChanges);
  const theme = useConfig(state => (state.darkmodeEnabled ? "vs-dark" : "light"));
  const fileType = useFile(state => state.format);

  useEffect(() => {
    const getAccountTypes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/get-account-types");
        if (!res.ok) throw new Error("Failed to fetch");
        const data =(await res.json()).accountTypes;
        setFileTree(data);
        setAccountTypes(data);
      } catch (error) {
        console.error("Error fetching file tree:", error);
      }
    };

    getAccountTypes();
  }, []);

  useEffect(() => {

    function lowercaseFirstLetter(str: string): string {
      if (!str) return '';
      return str.charAt(0).toLowerCase() + str.slice(1);
    }

    const fetchData = async () => {
      try {
        // 1. build an array of Promises, one per key
        const promises = Object.keys(accountTypes).map(async (key) => {
          const res = await fetch(
            `/api/fetch-accounts?accountType=${lowercaseFirstLetter(key)}`
          );
          if (!res.ok) {
            throw new Error(`Failed to fetch accounts for ${key}`);
          }
          const json = await res.json();
          return [key, json.data] as [string, any[]];
        });

        // 2. wait for all to resolve
        const entries = await Promise.all(promises);

        // 3. convert to an object { key: data, ... }
        const result = Object.fromEntries(entries);

        // 4. update state once
        setAllAccountData(result);
      } catch (error) {
        console.error("Error fetching file tree:", error);
      }
    };

    if (accountTypes.length === 0) {
      return
    };

    fetchData();
  }, [accountTypes]);

  React.useEffect(() => {
    monaco?.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: true,
      enableSchemaRequest: true,
      ...(jsonSchema && {
        schemas: [
          {
            uri: "http://myserver/foo-schema.json",
            fileMatch: ["*"],
            schema: jsonSchema,
          },
        ],
      }),
    });
  }, [jsonSchema, monaco?.languages.json.jsonDefaults]);

  React.useEffect(() => {
    const beforeunload = (e: BeforeUnloadEvent) => {
      if (getHasChanges()) {
        const confirmationMessage =
          "Unsaved changes, if you leave before saving  your changes will be lost";

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", beforeunload);

    return () => {
      window.removeEventListener("beforeunload", beforeunload);
    };
  }, [getHasChanges]);

  const handleMount: OnMount = useCallback(editor => {
    editor.onDidPaste(() => {
      editor.getAction("editor.action.formatDocument")?.run();
    });
  }, []);

  return (
    <>
      <main className="w-full flex flex-col h-dvh overflow-hidden">
        <section className="w-full h-full flex max-h-full">
          <div className="min-w-80 border-r border-r-vsdark-3 flex flex-col fixWidth">
            <div className="px-4 py-2 border-b border-b-vsdark-3">
              <h3 className="text-xxs uppercase text-vsdark-4">Account type explorer</h3>
            </div>
            <div className="p-2 overflow-auto h-full">
              {Object.keys(fileTree).map((key) => (
                <FileTree
                  key={key}
                  keyName={key}
                  fileTree={fileTree[key]}
                  isArrowShown={true}
                  isCheckBoxShown={false}
                  setAccountTypes={setAccountTypes}
                  currentPath={[key]}
                  accountTypes={accountTypes}
                  allAccountData={allAccountData}
                  setAllAccountData={setAllAccountData}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TextEditor;

const StyledEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  user-select: none;
`;

const StyledWrapper = styled.div`
  display: grid;
  height: calc(100vh - 67px);
  grid-template-columns: 100%;
  grid-template-rows: minmax(0, 1fr);
`;
