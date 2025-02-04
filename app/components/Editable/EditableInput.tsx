import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
type Props = {
  fieldValue: string;
  className?: string;
  fieldName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confidenceScore: number;
  isEdited: boolean;
  originalValue: string;
  editedBy: string;
};

const EditableInput = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textColor, setTextColor] = useState("");
  const {
    fieldValue,
    className,
    fieldName,
    handleChange,
    confidenceScore,
    isEdited,

    originalValue,
    editedBy,
  } = props;
  const [inputValue, setInputValue] = useState(props.fieldValue);

  useEffect(() => {
    //isEdited may be undefined, so we need to check if it is true

    if (isEdited === true) {
      setTextColor("text-black  bg-yellow-200 px-1");
    } else if (
      confidenceScore < 0.8 &&
      (isEdited === false || isEdited === undefined)
    ) {
      setTextColor("text-red-500");
    } else {
      setTextColor("text-black");
    }
  }, [confidenceScore, isEdited]);

  useEffect(() => {
    setInputValue(fieldValue);
  }, [fieldValue]);
  return (
    <div
      className={`${className} ${textColor} `}
      onDoubleClick={() => setIsEditing(true)}
      onBlur={() => {
        setIsEditing(false);
      }}
    >
      <Tooltip
        title={
          isEdited
            ? `Original Value: '${originalValue}'  edited by ${editedBy}`
            : ""
        }
        arrow
      >
        {isEditing ? (
          <input
            type="text"
            name={fieldName}
            defaultValue={inputValue}
            onBlur={() => {
              setIsEditing(false);
            }}
            onChange={(e) => {
              setInputValue(e.target.value);
              handleChange(e);
            }}
            autoFocus
          />
        ) : (
          <p className={inputValue ? "" : "min-w-5  bg-orange-100"}>
            {inputValue || "\u00A0"}
          </p>
        )}
      </Tooltip>
    </div>
  );
};

export default EditableInput;
