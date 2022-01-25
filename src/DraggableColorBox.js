import React from "react";
import { withStyles } from "@mui/styles";

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.9px",
    }
};

function DraggableColorBox(props){
    return(
        <div className={props.classes.root} style={{ backgroundColor: props.color }} >
            {props.color}
        </div>
    )
}
export default withStyles(styles)(DraggableColorBox)