import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function InfoIconButton({ description }) {
  return (
    <div>
      <Tooltip title={description}>
        <IconButton size="small">
          <InfoIcon
            className="text-slate-400 cursor-pointer"
            fontSize="small"
          />
        </IconButton>
      </Tooltip>
    </div>
  );
}
