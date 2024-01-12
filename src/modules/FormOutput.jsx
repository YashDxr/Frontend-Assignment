import { useEffect, useState } from "react";
import Input from "../components/Input";

// export default function FormOutput({ jsonData }) {
//   const [formData, setFormData] = useState("");
//   useEffect(() => {
//     console.log(jsonData);
//     setFormData(jsonData);
//   }, [jsonData]);

//   const jsonArray = JSON.parse(formData);

//   return (
//     <div>
//       {jsonArray.length > 0 &&
//         jsonArray.map((e) => {
//           console.log("Data", e);
//         })}
//     </div>
//   );
// }

// {
//     "sort": 1,
//     "label": "Pizza Name",
//     "description": "",
//     "validate": {
//       "required": true,
//       "immutable": false
//     },
//     "jsonKey": "name",
//     "uiType": "Input",
//     "icon": "",
//     "level": 0,
//     "placeholder": ""
//   },

export default function FormOutput({ jsonData }) {
  const [formData, setFormData] = useState("");

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
    <div>
      {Array.isArray(formData) && formData.length > 0 ? (
        formData.map((e) => {
          console.log("Data", e);
        })
      ) : (
        <p>No valid JSON data</p>
      )}
    </div>
  );
}
