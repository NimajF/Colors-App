import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from "./ColorPickerForm";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import DraggableColorList from "./DraggableColorList";
import { useNavigate } from "react-router-dom";
import { arrayMoveImmutable } from "array-move";


const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
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

  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    width: "100%",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

function NewPaletteForm(props){
    const [open, setOpen] = useState(false);
    const [currentColor, setColor] = useState('aquamarine');
    const [allColors, setCurrentColor] = useState(props.palettes[0].colors);
    const navigate = useNavigate()
    const isPaletteFull = allColors.length >= 20;

    const handleDrawerOpen = () => {
      setOpen(true);
  };
    const handleDrawerClose = () => {
        setOpen(false);
    };

   

    

    // const changeColor = newColor => {
    //   setColor(newColor.hex)
    // };

    const addNewColor = (newColor) => {
      setCurrentColor([...allColors, newColor] )
    };

    // const handleChange = (evt) => {
    //   setName(evt.target.value);
    // };

    // const handlePaletteName = (evt) => {
    //   setPaletteName(evt.target.value)
    // };

    const savePalette = (newPaletteName) => {
      const newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, "-"), 
        colors: allColors}
      props.handleSavePalette(newPalette)
      navigate('/')
      
    };

    const removeColor = (colorName) => {
      setCurrentColor(allColors.filter(color => color.name !== colorName))
    };

    const clearColors = () => {
      setCurrentColor([])
    };

    const addRandomColor= () => {
      let selectRandomPalette = props.palettes[Math.floor(Math.random() * props.palettes.length)]
      let randomColor = selectRandomPalette.colors[Math.floor(Math.random() * selectRandomPalette.colors.length)]
      setColor(randomColor.hex)
      const newColor = {
        color: randomColor.color, name: randomColor.name
      }
      setCurrentColor([...allColors, newColor] )
    }

    let onSortEnd = ({oldIndex, newIndex}) => {
      setCurrentColor(
        arrayMoveImmutable(allColors, oldIndex, newIndex)
      )
    };

    return (
        <Box sx={{ display: 'flex' }}>
          <PaletteFormNav open={open} classes={props.classes} palettes={props.palettes} savePalette={savePalette} handleDrawerOpen={handleDrawerOpen} currentColor={currentColor}/> 
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                display: "flex",
                alignItems: "center"
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
            <Typography variant="h4"  style={{ alignSelf: "center", marginTop: "2rem" }} > Create your palette </Typography>
            <div style={{ width: "90%", display: "flex", justifyContent: "center", gap: "1px", marginTop: "1rem" }} >
              <Button style={{ width: "200px", padding: "6px" }} variant="contained" color="secondary" onClick={clearColors} >Clear Palette</Button>
              <Button style={{ width: "200px", padding: "6px"}} variant="contained" color="primary" onClick={addRandomColor} disabled={isPaletteFull} >Random color</Button>
            </div>
            <ColorPickerForm isPaletteFull={isPaletteFull} addNewColor={addNewColor} colors={allColors} currentColor={currentColor} />
        </Drawer>
        <Main open={open}>
            <DrawerHeader />
            <DraggableColorList 
              colors={allColors}
              distance={2}
              removeColor={removeColor} 
              axis='xy'
              onSortEnd={onSortEnd} 
            />
              
            
        </Main>
        </Box>
    );
    }
        
    
    export default NewPaletteForm;