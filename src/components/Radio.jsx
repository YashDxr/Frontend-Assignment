import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function Radio({ data }) {
  const [obj, setObj] = useState({});
  useEffect(() => {
    setObj(data);
  }, [data]);

  if (!obj || !obj.jsonKey) {
    return null;
  }
  return (
    <div key={obj.jsonKey} className="flex flex-row">
      {obj.validate.options.map((option) => (
        <Button
          key={option.value}
          variant="contained"
          style={{ marginRight: "8px" }}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
