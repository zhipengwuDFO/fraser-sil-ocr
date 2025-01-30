"use client";
import React, { useEffect, useState } from "react";
import getJsonFile from "@/app/utility/getJsonFile";
import { CircularProgress } from "@mui/material";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

type Props = {
  slug: string;
  className?: string;
};

const RenderJson = (props: Props) => {
  const { slug, className } = props;

  interface JsonData {
    name: string;
    [key: string]: any;
  }

  const [jsonData, setJsonData] = useState<JsonData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);

    let jsonFileName = props.slug + ".json";

    const data = await getJsonFile(jsonFileName);

    setJsonData(data);

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [props.slug]);

  const isEmpty = (obj: any) => Object.keys(obj).length === 0;

  return (
    <div className={`${className} `}>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <CircularProgress />
        </div>
      ) : !isEmpty(jsonData) ? (
        <div className="flex flex-col gap-10 mt-16">
          <FirstPage className ='min-h-[50vh]  border-green-600 border-2 rounded-lg ' />
          <SecondPage className='min-h-[50vh]  border-green-600 border-2 rounded-lg' />
         
        </div>
      ) : (
        <div>Failed to load data</div>
      )}
    </div>
  );
};

export default RenderJson;
