"use client";
import React, { useEffect, useState } from "react";
import getPDFFile from "@/app/utility/getPDFFile";
import { CircularProgress } from "@mui/material";

type Props = {
  slug: string;
  className?: string;
};

const ReadPDF = (props: Props) => {
  const [pdfData, setPdfData] = useState<Blob | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);

    let pdfName = props.slug + ".pdf";
   
    const data = await getPDFFile(pdfName);
    if (data) {
      setPdfData(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [props.slug]);

  const { slug, className } = props;
  return (
    <div className={`${className} `}>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
            <CircularProgress />
        </div>
      ) : pdfData ? (
        <div className="h-[1000px]">
        <iframe
          src={URL.createObjectURL(pdfData)}
          width="100%"
          height="100%"
          title={slug}
        ></iframe>
        </div>
      ) : (
        <div>Failed to load PDF</div>
      )}
    </div>
  );
};

export default ReadPDF;
