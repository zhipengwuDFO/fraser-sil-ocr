import React, {useState} from "react";
import EditableInput from "@/app/components/Editable/EditableInput";
type Props = {
  className?: string;
};

const SectionOne = (props: Props) => {
  const { className } = props;
  const [isEdited, setIsEdited] = useState(false);
  const [stream, setStream] = useState("Horsefly River");

  const handleChange = (el:React.ChangeEvent<HTMLInputElement>) => {
    setStream(el.target.value);
    setIsEdited(true);
  };
  return (
    <div
      className={`${className}  flex flex-row justify-between items-center pl-1 pr-3 border-b-2 border-green-600`}
    >
      <div className="flex flex-row gap-8">
        <h1 className="text-green-600">Date</h1>
        <span>09/10/2020</span>
      </div>
      <div className="flex flex-row gap-8">
        <h1 className="text-green-600">Stream</h1>

        <EditableInput
          
          fieldName="stream"
          fieldValue={stream}
          handleChange={handleChange}
          confidenceScore={0.7}
          isEdited={isEdited}
        />
     
      </div>
      <div className="flex flex-row gap-8">
        <h1 className="text-green-600">Observer(s)</h1>
        <span>  N/A</span>
      </div>

    </div>
  );
};

export default SectionOne;
