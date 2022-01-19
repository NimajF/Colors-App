import { withStyles } from "@mui/styles";
import React from "react";


const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal",
        
    },
    secondary: {
        backgroundColor: "pink",
        "& h1": {
            color: "white",
            "& span": {
                backgroundColor: "yellow"
            }
        }
    }
}
function MiniPalette(props){
    const {classes} = props;
    console.log(classes)
    return(
        <div className={classes.main}>
            <div>Mini Palette</div>
            <section className={classes.secondary}>
                <h1>Mini Palette <span>Wasker</span> </h1>
            </section>
        </div>

    )
}


export default withStyles(styles)(MiniPalette);
//high order component. Returns a new version of this component with these styles

