import { Input } from "postcss";
import React from "react";

type Props = {
  className?: string;
};

const SectionTwo = (props: Props) => {
  const { className } = props;
  return (
    <div className={`${className} border-r-2 border-green-600  `}>
      <div className="grid grid-cols-12 border-b border-green-600 ">
        <div className=" col-span-6 text-green-600 font-bold text-center ">
          VISUAL SURVEYS
        </div>
        <div className="col-span-6 flex flex-row gap-3   ">
          <div className="text-sm text-green-600">Survey Type: </div>
          <form className="flex flex-row gap-2 justify-center items-center text-sm">
            <div className="flex flex-row gap-1 justify-center items-center">
              <label>Ground</label>
              <input type="radio" name="surveyType" value="Visual" />
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <label>Aerial</label>
              <input type="radio" name="surveyType" value="Non-Visual" />
            </div>
          </form>
        </div>
      </div>
      <div>
        <table className="w-full border-collapse  ">
          <thead className="text-center  text-sm ">
            <tr className="border-b border-green-600 text-green-600 ">
              <th className="border border-green-600 " rowSpan={2}>
                Area
              </th>
              <th className="border border-green-600" rowSpan={2}>
                Live Count (incl. live tags)
              </th>
              <th className="border border-green-600" rowSpan={2}>
                % O.E. (Observer Efficiency)
              </th>
              <th className="border border-green-600" rowSpan={1} colSpan={3}>
                Fish Behaviour (must total 100%)
              </th>

              <th className="border border-green-600" rowSpan={2}>
                Live Tagged
              </th>
              <th className="border border-green-600" rowSpan={2}>
                Other Species
              </th>
            </tr>
            <tr className=" text-green-600 ">
              <th className="border border-green-600" rowSpan={1} colSpan={1}>
                % Holding / Migrating
              </th>
              <th className="border border-green-600" rowSpan={1} colSpan={1}>
                % Spawning
              </th>
              <th className="border border-green-600" rowSpan={1} colSpan={1}>
                %Spawned Out
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center text-sm">
              <td className="border border-green-600">1</td>
              <td className="border border-green-600">2</td>
              <td className="border border-green-600">3</td>
              <td className="border border-green-600">4</td>
              <td className="border border-green-600">5</td>
              <td className="border border-green-600">6</td>
              <td className="border border-green-600">7</td>
              <td className="border border-green-600">7</td>
            </tr>
            <tr className="text-center text-sm">
              <td className="border border-green-600">1</td>
              <td className="border border-green-600">2</td>
              <td className="border border-green-600">3</td>
              <td className="border border-green-600">4</td>
              <td className="border border-green-600">5</td>
              <td className="border border-green-600">6</td>
              <td className="border border-green-600">7</td>
              <td className="border border-green-600">7</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SectionTwo;
