import Box from "@mui/material/Box";

const backdropStyle = {
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100vh",
  bgcolor: "rgba(0, 0, 0, 0.4)",
  zIndex: 10,
};

const Backdrop = ({ onClose }) => {
  return <Box sx={backdropStyle} onClick={onClose} />;
};

export default Backdrop;
