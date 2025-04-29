import React, { useState, useCallback } from "react";
import { LoadingOverlay } from "@mantine/core";
import styled from "styled-components";
import Editor, { type EditorProps, loader, type OnMount, useMonaco } from "@monaco-editor/react";
import useConfig from "../../store/useConfig";
import useFile from "../../store/useFile";
import FileTree from "./FileTree";
import { accountTypesExample as filesData } from "../../data/anchor/accountTypesExample";
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
  const defaultFolder = {
    id: Date.now(),
    type: "folder",
    name: "welcome",
    children: [],
  };
  const [fileTree, setFileTree] = useState(filesData || defaultFolder);
  const monaco = useMonaco();
  const contents = useFile(state => state.contents);
  const [allAccountData, setAllAccountData] = useState({
    MintInfo: structuredClone(dataExample),
  });
  const setContents = useFile(state => state.setContents);
  const [accountTypes, setAccountTypes] = useState(filesData)
  const setError = useFile(state => state.setError);
  const jsonSchema = useFile(state => state.jsonSchema);
  const getHasChanges = useFile(state => state.getHasChanges);
  const theme = useConfig(state => (state.darkmodeEnabled ? "vs-dark" : "light"));
  const fileType = useFile(state => state.format);

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
                  <h3 className="text-xxs uppercase text-vsdark-4">Explorer</h3>
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
