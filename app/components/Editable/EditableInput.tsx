import React, { useState, useEffect } from "react";

type Props = {
  fieldValue: string;
  className?: string;
  fieldName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confidenceScore: number;
  isEdited: boolean;
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
  } = props;

  useEffect(() => {

    //isEdited may be undefined, so we need to check if it is true

    if (isEdited === true) {
      setTextColor("text-black  bg-yellow-200 px-1");
    } else if (confidenceScore < 0.8 && (isEdited === false ||isEdited === undefined)) {
      setTextColor("text-red-500");
    } else {
      setTextColor("text-black");
    }
  }, [confidenceScore, isEdited]);

  return (
    <div
      className={`${className} ${textColor} `}
      onDoubleClick={() => setIsEditing(true)}
      onBlur={() => {
        setIsEditing(false);
      }}
    >
      {isEditing ? (
        <input
          type="text"
          name={fieldName}
          defaultValue={fieldValue}
          onBlur={() => setIsEditing(false)}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <p>{fieldValue}</p>
      )}
    </div>
  );
};

export default EditableInput;
