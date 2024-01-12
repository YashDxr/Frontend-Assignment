import { useRef } from "react";

export default function UserInput(props) {
  const inputRef = useRef();
  const handleChange = () => {
    const data = inputRef.current.value;
    props.getData(data);
  };
  return (
    <div className="w-full h-full">
      <textarea
        ref={inputRef}
        onChange={handleChange}
        placeholder="Enter JSON here..."
        className="w-full h-full bg-yellow-100"
      ></textarea>
    </div>
  );
}
