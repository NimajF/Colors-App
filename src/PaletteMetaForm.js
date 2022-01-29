import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


function PaletteMetaForm(props){
    const [open, setOpen] = useState(true);
    const [newPaletteName, setPaletteName] = useState("");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };

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
        
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Choose a Palette Name</DialogTitle>
            <ValidatorForm onSubmit={() => props.handleSubmit(newPaletteName)} >
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
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit" >Save Palette</Button>

            </DialogActions>
            </ValidatorForm>
        </Dialog>
      </div>

  )
}

export default PaletteMetaForm;