import { useState, useEffect } from "react";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function PaletteMetaForm(props){
    const { hideForm, handleSubmit } = props;
    const [newPaletteName, setPaletteName] = useState("");

    useEffect(() => {
            ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
                return props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
                );
            });
        });


    const handlePaletteName = (evt) => {
        setPaletteName(evt.target.value)
      };

    return(
        <div>
            <Dialog open={true} onClose={hideForm}>
                <DialogTitle>Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)} >
                    <DialogContent>
                    <DialogContentText>
                        Give your beautiful palette a name. Make sure it is not used.
                    </DialogContentText>
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

export default PaletteMetaForm;