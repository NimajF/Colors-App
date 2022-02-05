import { withStyles } from "@mui/styles";
import styles from "./styles/PaletteFooterStyles"


function PaletteFooter(props){
    const { classes, palette } = props;
    return(
        <div className={classes.container}>
            <footer className={classes.PaletteFooter}>
                <p>{palette.paletteName}</p>
                <span>{palette.emoji}</span>
            </footer>
        </div>
    )
}

export default withStyles(styles)(PaletteFooter);