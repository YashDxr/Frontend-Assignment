import { useEffect, useState } from "react";

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
