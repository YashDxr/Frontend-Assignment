import InfoIconButton from "../components/InfoIconButton";
import SelectType from "./SelectType";
import { useEffect, useState } from "react";
import Radio from "./Radio";
import Switch from "./Switch";

export default function Group({ data }) {
  const [obj, setObj] = useState({});

  useEffect(() => {
    console.log(data);
    setObj(data);
  }, [data]);

  if (!obj || !obj.subParameters) {
    return null;
  }

  return (
    { obj } && (
      <div key={obj.jsonKey} className="flex flex-col m-2">
        <label>{obj.label}:</label>
        {obj.description !== "" ? (
          <div className="relative">
            <InfoIconButton desc={obj.description} />
          </div>
        ) : (
          <></>
        )}
        <label>{obj.subParameters.label}</label>
        <div>
          {obj.subParameters.map((element) => {
            return element.uiType == "Radio" ? (
              <Radio data={element} />
            ) : element.uiType == "Select" ? (
              <div>
                <SelectType key={element.jsonKey} element={element} />
              </div>
            ) : element.uiType == "Switch" ? (
              <Switch data={element} />
            ) : (
              <div></div>
            );
          })}
        </div>
      </div>
    )
  );
}
