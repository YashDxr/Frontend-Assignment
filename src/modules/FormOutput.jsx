import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import InfoIconButton from "../components/InfoIconButton";
import SelectType from "../components/SelectType";

export default function FormOutput({ jsonData }) {
  const [formData, setFormData] = useState("");

  useEffect(() => {
    // console.log("jsonData:", jsonData);

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
    <div className="flex flex-row m-4">
      <form>
        {Array.isArray(formData) && formData.length > 0 ? (
          formData.map((e) => {
            return e.uiType === "Input" ? (
              <div key={e.sort} className="flex flex-row items-center m-2">
                <label>{e.label}</label>
                {e.description != "" ? (
                  <div className="relative">
                    <InfoIconButton desc={e.description} />
                  </div>
                ) : (
                  <></>
                )}
                <input
                  placeholder={e.placeholder}
                  type="text"
                  className="border-black mx-3 border-2"
                />
              </div>
            ) : e.uiType === "Group" ? (
              <div key={e.sort} className="flex flex-col m-2">
                <label>{e.label}</label>
                {e.description !== "" ? (
                  <div className="relative">
                    <InfoIconButton desc={e.description} />
                  </div>
                ) : (
                  <></>
                )}
                <label>{e.subParameters.label}</label>
                <div>
                  {e.subParameters.map((element) => {
                    return element.uiType == "Radio" ? (
                      <div  className="flex flex-row">
                        {element.validate.options.map((option) => (
                          <Button
                            key={option.value}
                            variant="contained"
                            style={{ marginRight: "8px" }}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    ) : element.uiType == "Select" ? (
                      <div>
                        <SelectType key={element.label} element={element} />
                      </div>
                    ) : element.uiType == "Switch" ? (
                      <div key={element.label}>Switch Type</div>
                    ) : (
                      <div></div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <SelectType key={e.sort} data={e} />
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
