import React, { useState, useContext, useEffect } from "react";
import EditableInput from "@/app/components/Editable/EditableInput";
import { JsonDataContext } from "@/app/store/jsonData-context";
import Tooltip from '@mui/material/Tooltip';
type Props = {
  className?: string;
};

const SectionOne = (props: Props) => {
  const { className } = props;
  const [isEdited, setIsEdited] = useState(false);
  const [stream, setStream] = useState("Horsefly River");
  const ctx = useContext(JsonDataContext);

  const [newJsonData, setNewJsonData] = useState(ctx.jsonData);
  // console.log(ctx.jsonData);
  // console.log(jsonData.Date);

  const handleChange = (el: React.ChangeEvent<HTMLInputElement>) => {
    if (ctx.jsonData) {
      const updatedJsonData = {
        ...ctx.jsonData,
        [el.target.name]: [
          el.target.value,
          ctx.jsonData[el.target.name]?ctx.jsonData[el.target.name][1]: '',
          true,
          ctx.originalJsonData[el.target.name]?ctx.originalJsonData[el.target.name][0]: '',
          "Wu",
        ],
      };
      setNewJsonData(updatedJsonData);
      ctx.updataJsonData(updatedJsonData);
    }

    // if (ctx.jsonData && el.target.name === "Date") {
    //   const updatedJsonData = {
    //     ...ctx.jsonData,
    //     Date: [
    //       el.target.value,
    //       ctx.jsonData.Date[1],
    //       true,
    //       ctx.jsonData.Date[0],
    //       "name",
    //     ],
    //   };
    //   setNewJsonData(updatedJsonData);
    //   ctx.updataJsonData(updatedJsonData);
    // } else if (ctx.jsonData && el.target.name === "Stream") {
    //   const updatedJsonData = {
    //     ...ctx.jsonData,
    //     Stream: [
    //       el.target.value,
    //       ctx.jsonData.Stream[1],
    //       true,
    //       ctx.jsonData.Stream[0],
    //       "name",
    //     ],
    //   };
    //   setNewJsonData(updatedJsonData);
    //   ctx.updataJsonData(updatedJsonData);
    // }
  };

  return (
    <div
      className={`${className}  flex flex-row justify-between items-center pl-1 pr-3 border-b-2 border-green-600`}
    >
      <div className="flex flex-row gap-2">
        <h1 className="text-green-600">Date</h1>

        {/* <input type="text"
        // className="border-2 border-green-600 rounded-md px-1"

        defaultValue={newJsonData ? newJsonData.Date[0] : ""}
        
        /> */}

        <EditableInput
          fieldName="Date"
          fieldValue={newJsonData ? newJsonData.Date[0] : ""}
          handleChange={handleChange}
          confidenceScore={newJsonData && newJsonData.Date[1]}
          isEdited={newJsonData && (newJsonData.Date[2] ? true : false)}
          originalValue={newJsonData && newJsonData.Date[3]}
          editedBy={newJsonData && newJsonData.Date[4]}
        />
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="text-green-600">Stream</h1>

        <EditableInput
          fieldName="Stream"
          fieldValue={newJsonData ? newJsonData.Stream[0] : ""}
          handleChange={handleChange}
          confidenceScore={newJsonData && newJsonData.Stream[1]}
          isEdited={newJsonData && (newJsonData.Stream[2] ? true : false)}
          originalValue={newJsonData && newJsonData.Stream[3]}
          editedBy={newJsonData && newJsonData.Stream[4]}
        />
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="text-green-600">Observer(s)</h1>
        <EditableInput
          fieldName="Observer(s)"
          fieldValue={newJsonData && newJsonData["Observer(s)"]? newJsonData["Observer(s)"][0]: ""}
          handleChange={handleChange}
          confidenceScore={newJsonData && newJsonData["Observer(s)"]&& newJsonData["Observer(s)"][1]}
          isEdited={
            newJsonData&& newJsonData["Observer(s)"] && (newJsonData["Observer(s)"][2] ? true : false)
          }
          originalValue={newJsonData && newJsonData["Observer(s)"]&& newJsonData["Observer(s)"][3]}
          editedBy = {newJsonData&& newJsonData["Observer(s)"] && newJsonData["Observer(s)"][4]}
        />
      </div>
    </div>
  );
};

export default SectionOne;
