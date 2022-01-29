import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { withStyles } from "@mui/styles";
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const drawerWidth = 400;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  },
  )(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
function PaletteFormNav(props){
    const { open, palettes } = props;
    const [newPaletteName, setPaletteName] = useState("");
    
    const handlePaletteName = (evt) => {
        setPaletteName(evt.target.value)
      };


    useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
            return palettes.every(
              ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            );
          });
    })

    return(
        <div style={{ display: "flex" }} >
            <CssBaseline />
            <AppBar position="fixed" open={open} color="default" >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Create your Palette
                </Typography>
                
                </Toolbar>
                <div >
                  <ValidatorForm onSubmit={() => props.savePalette(newPaletteName)} >
                  <TextValidator 
                      value={newPaletteName} 
                      label={"Palette Name"}  
                      name={newPaletteName} 
                      onChange={handlePaletteName} 
                      validators={["required", "isPaletteNameUnique"]}
                      errorMessages={["Enter Palette name", "Name is already in use"]}
                  />
                  <Button variant="contained" color="primary" type="submit" >Save Palette</Button>
                  
                  </ValidatorForm>
                  <Link to="/" >
                      <Button variant="contained" color="secondary" >Go Back</Button>
                  </Link>
                </div>
            </AppBar>
        </div>
    )
}

export default withStyles(styled, { withTheme: true })(PaletteFormNav);