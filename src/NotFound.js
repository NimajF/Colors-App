import { Link } from "react-router-dom";
import styles from "./styles/NotFoundStyles";
import { withStyles } from "@mui/styles";


function NotFound(props){
    const { classes } = props
    return(
        <div className={classes.root} >
           <div className={classes.messageContainer} >
                <h1 className={classes.message} >Ups! This page is not available, please return to homepage.</h1> 
                <Link to="/" className={classes.returnButton} >RETURN</Link>  
            </div>
        </div>
    )
}
export default withStyles(styles)(NotFound);