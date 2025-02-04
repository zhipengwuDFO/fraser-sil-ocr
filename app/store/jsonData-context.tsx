import { createContext, useState } from "react";

export const JsonDataContext = createContext<any>({
  isEditing: false,
  jsonData: {},
  originalJsonData: {},
  setOriginalJsonData: () => {},

  updataJsonData: () => {},
  setIsEditing: () => {},
});

export default function JsonDataContextProvider({ children, className }: any) {
  const [jsonData, setJsonData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [originalJsonData, setOriginalJsonData] = useState({});

  const ctxValue = {
    isEditing,
    jsonData,
    originalJsonData,
    setOriginalJsonData: (data: any) => {
      setOriginalJsonData(data);
    },
    updataJsonData: (data: any) => {
      setJsonData(data);
    },
    setIsEditing: (value: boolean) => {
      setIsEditing(value);
    },
  };

  return (
    <JsonDataContext.Provider value={ctxValue}>
      {children}
    </JsonDataContext.Provider>
  );
}
