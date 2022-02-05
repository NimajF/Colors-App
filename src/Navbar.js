import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from '@mui/material/Select';
import { IconButton, Snackbar } from "@mui/material";
import { FormControl, MenuItem } from "@mui/material";
import  CloseIcon  from "@mui/icons-material/Close";
import 'rc-slider/assets/index.css';
import styles from "./styles/NavbarStyles";
import { withStyles } from "@mui/styles";
import "./Palette.css";
import "./Navbar.css";





function Navbar(props){

    const { level, changeLevel, handleChange, showingAllColors, classes } = props
    const [format, setFormat] = useState("hex");
    const [open, toggleOpen] = useState(false)

    const handleChangeFormat = event => {
        setFormat(event.target.value)
        handleChange(event.target.value)
        toggleOpen(true)
    }

    const closeSnackbar = () => {
        toggleOpen(false)
    }

    return(
        <header className={classes.Navbar}>
            <div className="logo"> 
                <Link to="/" style={{ fontFamily: "Roboto Mono" }} >reactcolorpicker</Link>
            </div>
            { showingAllColors && ( 
            <div className="slider-container">
                <span style={{ fontFamily: "Roboto Mono", fontWeight: "400" }}>Level: {level}</span>
                <div className={classes.Slider}>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                        trackStyle={[{ backgroundColor: "transparent" }]}
                        handleStyle={[
                        {
                            backgroundColor: "aquamarine",
                            outline: "none",
                            border: "1px solid aquamarine",
                            boxShadow: "none",
                            width: "13px",
                            height: "13px",
                            marginLeft: "-7px",
                            marginTop: "-3px",
                        },
                        ]}
                        railStyle={{height: "8"}}
                    />
                </div>
            </div>
            )}   
            <div className="select-container">
                        <FormControl variant="standard" >
                            <Select value={format} style={{ fontFamily: "Poppins", fontWeight: "bold" }} label="Format" onChange={handleChangeFormat} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                <MenuItem value="hex">hex - #ffffff</MenuItem>
                                <MenuItem value="rgb">RGB - rgb(10, 255, 255)</MenuItem>
                                <MenuItem value="rgba">RGBA - rgba(10, 255, 255, 1.0)</MenuItem>
                            </Select>
                        </FormControl>
            </div>
            <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                open={open} 
                autoHideDuration={3000} 
                message={<span id="message-id" >Format changed to {format.toUpperCase()}</span>} 
                ContentProps={{ "aria-describe": "message-id" }}
                onClose={closeSnackbar}
                onChange={handleChangeFormat}
                action={[
                    <IconButton onClick={closeSnackbar} color="inherit" key="clse" aria-label="close" >
                        <CloseIcon/>
                    </IconButton>
                ]}
                >

            </Snackbar>
                
        </header>
    )
}

export default withStyles(styles)(Navbar);