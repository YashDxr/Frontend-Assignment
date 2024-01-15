import { useEffect, useState } from "react";
import Select from "../components/Select";
import { useForm } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InfoIconButton from "../components/InfoIconButton";

export default function FormOutput({ jsonData }) {
  const [formData, setFormData] = useState("");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log("jsonData:", jsonData);

    if (typeof jsonData === "string") {
      try {
        const parsedData = JSON.parse(jsonData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [jsonData]);

  return (
    <div className="flex flex-row justify-center">
      <form onSubmit={handleSubmit(() => console.log("hello"))}>
        {Array.isArray(formData) && formData.length > 0 ? (
          formData.map((e) => {
            return e.uiType === "Input" ? (
              <div key={e.sort} className="flex flex-row items-center m-2">
                <label>{e.label}</label>
                {e.description != "" ? (
                  <div className="relative">
                    <InfoIconButton description={e.description}/>
                  </div>
                ) : (
                  <></>
                )}
                <input
                  {...register(e.jsonKey)}
                  placeholder={e.placeholder}
                  type="text"
                  className="border-black mx-3 border-2"
                />
              </div>
            ) : e.uiType === "Group" ? (
              <div key={e.sort} className="flex flex-col items-center m-2">
                <label>{e.label}</label>
                {e.description != "" ? (
                  <div className="relative">
                    <Tooltip title={e.description}>
                      <IconButton size="small">
                        <InfoIcon
                          className="text-slate-400 cursor-pointer"
                          fontSize="small"
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                ) : (
                  <></>
                )}
                <ButtonGroup
                  className="m-2 "
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  <Button className="mx-2">One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </div>
            ) : (
              <Select key={e.sort} data={e} />
            );
          })
        ) : (
          <p>Not valid JSON data</p>
        )}
        <button className="bg-indigo-300 rounded-3xl p-3 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
