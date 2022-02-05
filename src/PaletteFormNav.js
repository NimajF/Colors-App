import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Button from '@mui/material/Button';
import styles from "./styles/NavbarStyles";
import { styled } from '@mui/material/styles';
import { withStyles } from "@mui/styles";

const drawerWidth = 300;
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
    const { open, palettes, colors, savePalette, handleDrawerOpen, classes } = props;
    const [isFormShowing, setFormState] = useState(false);
    const showForm = () => {
      setFormState(true);
    }
    const hideForm = () => {
      setFormState(false);
    }

    return(
        <div style={{ display: "flex" }} >
            <CssBaseline />
            <AppBar position="fixed" open={open} color="default" >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <AddToPhotosIcon />
                </IconButton>
                <Typography variant="h6" className={classes.navTitle} noWrap component="div">
                    Create your Palette
                </Typography>
                
                </Toolbar>
                <div className={classes.navBtns}>
                  
                  <Link to="/" style={{ textDecoration: "none" }} >
                      <Button className={classes.button} style={{ backgroundColor: "#5159b3" }} variant="contained" color="secondary" >Go Back</Button>
                  </Link>
                  <Button className={classes.button} style={{ backgroundColor: "#13AB85" }} disabled={!colors.length} variant="contained" onClick={showForm}>
                      Save
                  </Button>
                </div>
            </AppBar>
            {isFormShowing && <PaletteMetaForm palettes={palettes} handleSubmit={savePalette} hideForm={hideForm} /> }

        </div>
    )
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);