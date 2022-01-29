import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { withStyles } from "@mui/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


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
    alignItems: "center",
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
    const { open, palettes, savePalette } = props;
    const [isFormShowing, setFormState] = useState(false);
    
    // const handlePaletteName = (evt) => {
    //     setPaletteName(evt.target.value)
    //   };


    // useEffect(() => {
    //     ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
    //         return palettes.every(
    //           ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
    //         );
    //       });
    // })

    const showForm = () => {
      setFormState(true);
    }

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
                <div style={{ marginRight: "1rem" }} >
                  
                  <Link to="/" style={{ textDecoration: "none" }} >
                      <Button style={{ margin: "0 0.5rem" }} variant="contained" color="secondary" >Go Back</Button>
                  </Link>
                  <Button variant="contained" onClick={showForm}>
                      Save Palette
                  </Button>
                </div>
            </AppBar>
            {isFormShowing && <PaletteMetaForm palettes={palettes} handleSubmit={savePalette} /> }

        </div>
    )
}

export default withStyles(styled, { withTheme: true })(PaletteFormNav);