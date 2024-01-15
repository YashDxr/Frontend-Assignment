import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";

export default function Switch({ data }) {
  const [obj,setObj] = useState({});

  useEffect(()=>{
    setObj(data);
  },[data]);

  if(!obj || !obj.jsonKey){
    return null;
  }

  return (
    <div key={obj.jsonKey}>
      <label>{obj.label}:</label>
      {obj.validate.defaultValue == true ? (
        <Checkbox defaultChecked />
      ) : (
        <Checkbox />
      )}
    </div>
  );
}
