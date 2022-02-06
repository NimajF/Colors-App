import { useState, useEffect } from "react";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';
import styles from "./styles/PaletteMetaFormStyles";
import { withStyles } from "@mui/styles";


function PaletteMetaForm(props){
    const { hideForm, handleSubmit, classes, palettes } = props;
    const [newPaletteName, setPaletteName] = useState("");
    const [emoji, setEmoji] = useState("");

    useEffect(() => {
            ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
                return palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
                );
            });
        });


    const handlePaletteName = (evt) => {
        setPaletteName(evt.target.value)
    };

    const pickEmoji = (emoji) => {
        setEmoji(emoji.native);
    }

    return(
        <div >
            <Dialog open={true} onClose={hideForm}  >
                <DialogTitle className={classes.dialogTitle} >Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={() => handleSubmit(newPaletteName, emoji)} className={classes.root} >
                    <DialogContent >
                    <DialogContentText>
                        Give your beautiful palette a name and emoji. Make sure the Palette name is not used.
                    </DialogContentText>
                    <div className={classes.pickerContainer}>
                        <Picker onSelect={pickEmoji}/>
                    </div>
                    <TextValidator 
                        value={newPaletteName} 
                        label={"Palette Name"}  
                        name={newPaletteName} 
                        onChange={handlePaletteName}
                        fullWidth
                        margin="normal"
                        variant="standard"
                        validators={["required", "isPaletteNameUnique"]}
                        errorMessages={["Enter Palette name", "Name is already in use", "Palette is empty"]}
                    />
                    
                    
                </DialogContent>
                <DialogActions>
                <Button onClick={hideForm}>Cancel</Button>
                <Button variant="contained" color="primary" type="submit" >Save Palette</Button>

                </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>

  )
}

export default withStyles(styles)(PaletteMetaForm);