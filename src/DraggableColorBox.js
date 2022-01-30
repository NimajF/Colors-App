import React from "react";
import { withStyles } from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";


const DraggableColorBox = SortableElement((props) => {
    return(
        <div className={props.classes.root} style={{ backgroundColor: props.color }}>
            <div className={props.classes.boxContent} >
                <span>{props.name}</span>
                <DeleteIcon className={props.classes.deleteIcon} onClick={props.handleClick} />
            </div>
           
        </div>
    )
})
export default withStyles(styles)(DraggableColorBox)