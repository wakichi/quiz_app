import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FormMenu from "./FormMenu"
const Header =()=>{
    return(
        <AppBar>
            <Toolbar title="a">
                <IconButton size="large">
                    <MenuIcon/>
                </IconButton>
                <FormMenu/>
                <Button color="inherit" size="large">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header