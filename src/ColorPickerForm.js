import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import {ChromePicker} from "react-color"
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
function ColorPickerForm(props){
    const { isPaletteFull, addNewColor, colors, currentColor } = props;
    const [newCurrentColor, setColor] = useState(currentColor);
    const [newColorName, setName] = useState("");
    
    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
          return colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          );
        });
        ValidatorForm.addValidationRule("isColorUnique", value => {
          return colors.every(
            ({ color }) => color !== newCurrentColor
          );
        });
      });
      
    const changeColor = newColor => {
        setColor(newColor.hex)
      };

    const handleChange = (evt) => {
        setName(evt.target.value);
    };  

    const handleSubmit = () => {
        const newColor = {
            color: newCurrentColor, name: newColorName
          }
        addNewColor(newColor)
        setName("")
    };
    
    return(
        <div>
            <ChromePicker color={newCurrentColor} onChangeComplete={(newColorName) => changeColor(newColorName)} />
            <ValidatorForm onSubmit={handleSubmit} >
              <TextValidator 
                value={newColorName}
                name={newColorName}
                id="filled-basic" 
                label="Color name" 
                variant="filled" 
                onChange={handleChange}
                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                errorMessages={['A name is required', 'Name is already taken', 'Color is already taken']} 
              />
              <Button 
                variant="contained" 
                color="primary"
                type="submit" 
                style={{ backgroundColor: isPaletteFull ? "grey" : newCurrentColor}}
                disabled={isPaletteFull}
              >
                {isPaletteFull ? "Palette Full" : "Add Color"}
            </Button>
            </ValidatorForm>
        </div>
    )
}

export default ColorPickerForm;