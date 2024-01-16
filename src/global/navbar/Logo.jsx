import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <Typography
      variant="h5"
      component="h1"
      sx={{ "& a": { color: "primary.main" } }}
    >
      <NavLink to="/">ScreenSaga</NavLink>
    </Typography>
  );
};

export default Logo;
