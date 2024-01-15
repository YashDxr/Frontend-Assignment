import { useEffect, useState } from "react";
import InfoIconButton from "../components/InfoIconButton";

export default function Input({ data }) {
  const [obj, setObj] = useState({});
  useEffect(() => {
    setObj(data);
  }, [data]);

  if(!obj || !obj.label){
    return null;
  }
  return (
    { obj } && (
      <div key={obj.jsonKey} className="flex flex-row items-center m-2">
        <label>{obj.label}:</label>
        {obj.description != "" ? (
          <div className="relative">
            <InfoIconButton desc={obj.description} />
          </div>
        ) : (
          <></>
        )}
        <input
          placeholder={obj.placeholder}
          type="text"
          className="border-black mx-3 border-2"
        />
      </div>
    )
  );
}
