import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import {ChromePicker} from "react-color"
import DraggableColorBox from "./DraggableColorBox";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

function NewPaletteForm(){
    const [open, setOpen] = React.useState(false);
    const [currentColor, setColor] = useState('purple')
    const [allColors, setCurrentColor] = useState([])
    const [newName, setName] = useState("")
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
      ValidatorForm.addValidationRule("isColorNameUnique", value => {
        return allColors.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        );
      });
      ValidatorForm.addValidationRule("isColorUnique", value => {
        return allColors.every(
          ({ color }) => color !== currentColor
        );
      });
    });

    const changeColor = newColor => {
      setColor(newColor.hex)
    };

    const addNewColor = () => {
      const newColor = {
        color: currentColor, name: newName
      }
      setCurrentColor([...allColors, newColor] )
      setName("")
    };
   
    const handleChange = (evt) => {
      setName(evt.target.value);
    };

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Persistent drawer
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </DrawerHeader>
            <Divider />
            <Typography variant="h4" > Create your palette </Typography>
            <div>
              <Button variant="contained" color="secondary" >Clear Palette</Button>
              <Button variant="contained" color="primary" >Random color</Button>
            </div>
            <ChromePicker color={currentColor} onChangeComplete={(newColor) => changeColor(newColor)} />
            <ValidatorForm onSubmit={addNewColor} >
              <TextValidator 
                value={newName} 
                onChange={handleChange}
                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                errorMessages={['A name is required', 'Name is already taken', 'Color is already taken']} 
              />
              <Button 
                variant="contained" 
                color="primary"
                type="submit" 
                style={{ backgroundColor: currentColor}}
                // onClick={addNewColor} 
              >Add Color
            </Button>
            </ValidatorForm>
        </Drawer>
        <Main open={open}>
            <DrawerHeader />
            
              {allColors.map(color => (
                <DraggableColorBox color={color.color} name={color.name} />
               
              ))}
            
        </Main>
        </Box>
    );
    }
        
    
export default NewPaletteForm;