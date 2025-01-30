"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import TablePart from "./TablePart";
export default function TableView() {
    
      const router = useRouter();
  return (
    <div className="p-4  ">
         <Button
            variant="contained"
            color="primary"
          
            onClick={ () => router.push('/')}
          >
          Back
          </Button>
       <TablePart className ="mt-2"/>
    </div>
  );
}
