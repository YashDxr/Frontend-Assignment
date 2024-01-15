import { useState, useEffect } from "react";
import SelectType from "../components/SelectType";
import Input from "../components/Input";
import Group from "../components/Group";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="flex flex-row m-4">
      <form onSubmit={handleSubmit}>
        {Array.isArray(formData) && formData.length > 0 ? (
          formData.map((e) => {
            return e.uiType === "Input" ? (
              <Input data={e} />
            ) : e.uiType === "Group" ? (
              <Group data={e} />
            ) : (
              <SelectType key={e.jsonKey} element={e} />
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
