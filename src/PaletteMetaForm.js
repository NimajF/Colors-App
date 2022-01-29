import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


function PaletteMetaForm(props){
    const [open, setOpen] = useState(false);
    const [newPaletteName, setPaletteName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        <Button variant="outlined" onClick={handleClickOpen}>
            Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
            </DialogContentText>
            <ValidatorForm onSubmit={() => props.handleSubmit(newPaletteName)} >
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
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
      </div>

  )
}

export default PaletteMetaForm;