import { Button } from "@mui/material";
import React from "react";
import Link from "next/link";

type Props = {
  className?: string;
};

const ExportExcel = (props: Props) => {
  const { className } = props;
  return (
    <div className={`${className} `}>
      <div className="flex flex-col gap-4 p-4 border">
        <h1 className="text-xl font-semibold">Table View</h1>
        <div className="flex justify-center items-center gap-4">
          <Button variant="contained" color="success">
            <Link href="/tableView/">Open Table view</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ExportExcel;
