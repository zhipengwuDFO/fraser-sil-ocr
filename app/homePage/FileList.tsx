"use client";
import React, { useEffect, useState } from "react";
import getFileNames from "../utility/getFileName";
import { CircularProgress } from "@mui/material";
import Link from "next/link";

type Props = {
  className?: string;
};

const FileList = (props: Props) => {
  const [fileNames, setFileNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    const data = await getFileNames();
    setFileNames(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const { className } = props;

  return (
    <div className={`${className} p-4`}>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
        <CircularProgress />
        </div>
      ) : fileNames.length ? (
        fileNames.map((fileName: string, index:number ) => (
          <li className="hover:text-red-600 hover:underline hover:font-semibold list-none"  key={index}>
            
            <Link href={`/file/${fileName.replace(/\.json$/, "")}`}>
        
            {fileName.replace(/\.json$/, "").replace(/_/g, " ")}
            </Link>
            </li>
        ))
      ) : (
        <div>No files</div>
      )}
    </div>
  );
};
export default FileList;
