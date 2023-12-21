import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FormMenu from "./FormMenu";
import { postDataType } from "./types";
const Header = (props: {
  addFunc: (id: number, cont: postDataType) => void;
}) => {
  return (
    <AppBar>
      <Toolbar title="a">
        <IconButton size="large">
          <MenuIcon />
        </IconButton>
        <FormMenu addFunc={props.addFunc} />
        <Button color="inherit" size="large" href="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
