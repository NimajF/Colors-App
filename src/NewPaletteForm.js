import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { arrayMoveImmutable } from "array-move";
import seedsColors from './seedsColors';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import CasinoIcon from '@mui/icons-material/Casino';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

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
    const [currentColor, setColor] = useState('#0A6BEF');
    const [allColors, setCurrentColor] = useState(seedsColors[0].colors);
    const navigate = useNavigate()
    const isPaletteFull = allColors.length >= 20;
    // const [areColors, areColorsState] = useState(true)

    const handleDrawerOpen = () => {
      setOpen(true);
  };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const addNewColor = (newColor) => {
      setCurrentColor([...allColors, newColor] )
    };

    const savePalette = (palette, emoji) => {
      const newPalette = {
        paletteName: palette,
        id: palette.toLowerCase().replace(/ /g, "-"), 
        colors: allColors,
        type: "custom",
        emoji: emoji
      }
      props.handleSavePalette(newPalette)
      navigate('/')
      
    };

    const removeColor = (colorName) => {
      setCurrentColor(allColors.filter(color => color.name !== colorName))
    };

    const clearColors = () => {
      setCurrentColor([])
    };

    const checkDuplicateColor = colorName => {
      return allColors.some(color => color.name === colorName);
    };

    const addRandomColor= () => {
      let selectRandomPalette = seedsColors[Math.floor(Math.random() * seedsColors.length)];
      let randomColor;
      let isDuplicateColor = true;
      while (isDuplicateColor) {
        randomColor = selectRandomPalette.colors[Math.floor(Math.random() * selectRandomPalette.colors.length)];
        isDuplicateColor = checkDuplicateColor(randomColor.name)
      }
      setColor(randomColor.hex)
      const newColor = {
        color: randomColor.color, name: randomColor.name
      }
      setCurrentColor([...allColors, newColor] )
    };

    let onSortEnd = ({oldIndex, newIndex}) => {
      setCurrentColor(
        arrayMoveImmutable(allColors, oldIndex, newIndex)
      )
    };

    return (
        <Box sx={{ display: 'flex' }}>
          <PaletteFormNav open={open} classes={props.classes} palettes={props.palettes} colors={allColors} savePalette={savePalette} handleDrawerOpen={handleDrawerOpen} currentColor={currentColor}/> 
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f7f7f7"
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
            <Typography variant="h4"  style={{ fontFamily: "Nunito, sans-serif", color: "#495057", alignSelf: "center", marginTop: "2rem", textAlign: "center" }} > Choose your Colors </Typography>
            <div style={{ width: "90%", display: "flex", justifyContent: "center", gap: "1px", marginTop: "1rem" }} >
              <Button style={{ width: "200px", padding: "6px", fontFamily: "Roboto Mono", backgroundColor: red[600] }} variant="contained" color="secondary" onClick={clearColors} >Clear Palette</Button>
              <Button style={{ width: "200px", padding: "6px" }} variant="contained" color="primary" onClick={addRandomColor} disabled={isPaletteFull} ><CasinoIcon style={{ transform: "rotate(10deg)" }} ></CasinoIcon></Button>
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