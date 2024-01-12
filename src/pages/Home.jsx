import { useState } from "react";
import FormOutput from "../modules/FormOutput";
import UserInput from "../modules/UserInput";

export default function Home() {
  const [jsonData, setJsonData] = useState([]);
  const getData = (formData) => {
    setJsonData(formData);
  };

  //   console.log("Props data is ", jsonData);

  return (
    <div className="flex flex-row">
      <div className="w-screen h-screen">
        <UserInput getData={getData} />
      </div>
      <div className="w-screen h-screen">
        <FormOutput jsonData={jsonData} />
      </div>
    </div>
  );
}
