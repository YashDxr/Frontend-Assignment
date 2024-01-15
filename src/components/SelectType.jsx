import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectType({ element }) {
  const [obj, setObj] = useState({});
  const [item, setItem] = useState("");

  useEffect(() => {
    setObj(element);
    if (element && element.validate) {
      setItem(element.validate.defaultValue);
    }
  }, [element]);

  const itemSelection = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="m-2">
      {obj && <label>{obj.label}</label>}
      <Select
        value={item}
        onChange={itemSelection}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className="mx-4 w-96 "
      >
        {obj &&
          obj.validate &&
          obj.validate.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}
