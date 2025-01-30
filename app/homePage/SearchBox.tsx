import { Button } from "@mui/material";
import React from "react";

type Props = {
  className?: string;
};

const SearchBox = (props: Props) => {
  const { className } = props;
  return (
    <div className={`${className} `}>
      <div className="flex flex-col gap-4 p-4 border">
        <h1 className="text-xl font-semibold">Search</h1>
        <div className="flex justify-between items-center gap-4">
          <div>Keyword</div>
          <input
            className="border  p-2"
            type="text"
            placeholder="Search by keyword"
          />
        </div>
        {/* <div className="flex justify-center items-center gap-4">
      <div>Keyword</div>
      <input className="border  p-2" type="text" placeholder="Search" />
      </div> */}

        <div className="flex flex-col  justify-center items-center gap-4">
          <Button variant="contained" color="primary" sx={{ width: "50%" }}>
            Search
          </Button>
          <Button variant="contained" color="error" sx={{ width: "50%" }}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
