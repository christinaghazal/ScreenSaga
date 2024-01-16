import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavButtons from "./NavButtons";

const Navbar = () => {
  return (
    <Box component="nav" py={2}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />
          <MenuList sx={{ display: "flex", alignItems: "center" }}>
            <MenuItem>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/search">search</NavLink>
            </MenuItem>
          </MenuList>
          <NavButtons />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
