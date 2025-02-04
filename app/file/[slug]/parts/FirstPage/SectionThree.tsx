import React, {useContext} from "react";
import { JsonDataContext } from "@/app/store/jsonData-context";

type Props = {
  className?: string;
};

const SectionThree = (props: Props) => {
  const { className } = props;
  const ctx = useContext(JsonDataContext);
  let data = ctx.jsonData;  
  return (
    <div className={`${className} grid grid-cols-12 `}>
      {/* Survey Time*/}
      <div className="col-span-12  border-b border-green-600 grid grid-cols-12 gap-2">
        <h1 className="text-green-600 text-sm border-r border-green-600  col-span-4 font-semibold text-center self-center">
          Survey Time
        </h1>
        <div className="col-span-8 grid grid-cols-12 text-sm ">
          <span className="text-green-600 col-span-4">Start</span>
          <span className=" col-span-8">1022</span>
          <span className="text-green-600  col-span-4">End</span>
          <span className=" col-span-8">1107</span>
        </div>
      </div>
      {/* Water Level */}
      <div className="col-span-12  border-b border-green-600 text-sm pl-1">
        <h1 className="text-green-600 text-center font-semibold ">
          WATER LEVEL
        </h1>
        <div className="flex flex-row ">
          <div className=" text-green-600 text-center">% Bankfull</div>
          <div className="text-xs flex flex-row flex-wrap gap-1 justify-center">
            <div className="flex flex-col justify-center items-center">
              <div>{"<20%"} </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>25-50% </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>50-75% </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>75-100% </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>+100% </div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3  justify-between">
          <span className="text-green-600">Gauge</span>
          <span></span>
          <span className="text-green-600">Area</span>
          <span></span>
        </div>
      </div>

      {/* Weather */}
      <div className="col-span-12  border-b border-green-600 text-sm pl-1">
        <h1 className="text-green-600 text-center font-semibold ">WEATHER</h1>
        <div className="flex flex-row gap-1 justify-between">
          <div className=" text-green-600 text-center text-xs">Brightness</div>
          <div className="text-xs flex flex-row   gap-1 justify-center">
            <div className="flex flex-col justify-center items-center">
              <div>Full </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>Bright </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>Medium</div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>Dark</div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1 justify-between ">
          <div className=" text-green-600 text-center text-xs">%Cloudy</div>
          <div className="text-xs flex flex-row   gap-1 justify-center">
            <div className="flex flex-col justify-between items-center">
              <div>0% </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>25% </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>50%</div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>75%</div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>100%</div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      {/* precipitation */}
      <div className="col-span-12  border-b border-green-600 text-sm pl-1">
        <h1 className="text-green-600 text-center font-semibold ">
          PRECIPITATION
        </h1>

        <div className="grid-cols-12 grid gap-1">
          <div className=" text-green-600 text-center text-xs col-span-3">
            Type
          </div>
          <div className="col-span-9 text-xs flex flex-row flex-wrap gap-1 justify-between">
            <div className="flex flex-col justify-between items-center">
              <div>Rain </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>Snow </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>None</div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className="grid-cols-12 grid gap-1 ">
          <div className="col-span-3 text-green-600 text-center text-xs">
            Intensity
          </div>
          <div className="col-span-9 text-xs flex flex-row flex-wrap gap-1 justify-between">
            <div className="flex flex-col justify-center items-center">
              <div>Light</div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>Medium</div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>Heavy</div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      {/* water condition */}
      <div className="col-span-12  border-b border-green-600 text-sm pl-1">
        <h1 className="text-green-600 text-center font-semibold ">
          WATER CONDITIONS
        </h1>

        <div className="grid-cols-12 grid gap-1">
          <div className=" text-green-600 text-center text-xs col-span-4">
            Fish Visiblity
          </div>
          <div className="col-span-8 text-xs flex flex-row flex-wrap gap-1 justify-between">
            <div className="flex flex-col justify-between items-center">
              <div>Low </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>Medium </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>High</div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className="grid-cols-12 flex flex-row gap-1 justify-between">
          <span className=" text-green-600 ">Water Temperature</span>
          <span>15.8 </span>
          <span className=" text-green-600 "> °C</span>
        </div>
        <div className="flex flex-row ">
          <div className=" text-green-600 text-center">Water Clarity</div>
          <div className="text-xs flex flex-row flex-wrap gap-1 justify-center">
            <div className="flex flex-col justify-center items-center">
              <div>0-0.25m </div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>0.25-0.5m</div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>0.5-1.0m</div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>1m-3m</div>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>3m to bottom</div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
