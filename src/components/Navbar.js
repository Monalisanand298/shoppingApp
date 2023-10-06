import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: "60%" }}>
          <Link className="nav-Link active  text-light " to="/">
            <Button variant="text" sx={{ color: "white" }}>
              <AcUnitIcon />
            </Button>
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ m: 1, flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link className="nav-Link active  text-light " to="/">
              <Button variant="text" sx={{ color: "white" }}>
                Home
              </Button>
            </Link>
            <span fx={{ px: 10 }}> </span>
            <Link className="nav-Link active  text-light " to="/sign">
              <Button variant="text" sx={{ color: "white" }}>
                Sign in
              </Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
