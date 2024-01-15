// import { useEffect, useState } from "react";
// import InfoIcon from "@mui/icons-material/Info";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import { useForm } from "react-hook-form";

// export default function Input({ data }) {
//   const [inputData, setInputData] = useState({});
//   const { register } = useForm();

//   useEffect(() => {
//     console.log(data);
//     console.log(typeof data);
//     setInputData(data);
//   }, [data]);

//   return (
//     <div className="flex flex-row items-center m-2">
//       <label>{inputData.label}</label>
//       {inputData.description != "" ? (
//         <div className="relative">
//           <Tooltip title={inputData.description}>
//             <IconButton size="small">
//               <InfoIcon
//                 className="text-slate-400 cursor-pointer"
//                 fontSize="small"
//               />
//             </IconButton>
//           </Tooltip>
//         </div>
//       ) : (
//         <></>
//       )}
//       <input
//         {...register(inputData.jsonKey)}
//         placeholder={inputData.placeholder}
//         type="text"
//         className="border-black mx-3 border-2"
//       />
//     </div>
//   );
// }

// // {
// //   "sort": 1,
// //   "label": "Pizza Name",
// //   "description": "",
// //   "validate": {
// //       "required": true,
// //       "immutable": false
// //   },
// //   "jsonKey": "name",
// //   "uiType": "Input",
// //   "icon": "",
// //   "level": 0,
// //   "placeholder": ""
// // },
