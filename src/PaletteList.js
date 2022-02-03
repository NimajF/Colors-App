import React, { useCallback, useState } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { blue } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import styles from "./styles/PaletteListStyles";
import { withStyles } from "@mui/styles";

function PaletteList(props){
    const { palettes, classes, deletePalette } = props;

    const [open, setDialogState] = useState(false);
    const [id, setId] = useState("");
    
    const openDialog = useCallback(paletteId => {
        setDialogState(true);
        setId(paletteId);
    }, []);
    const handleDelete = useCallback(() => {
        deletePalette(id)
        setDialogState(false)
    }, [id, deletePalette])
    const closeDialog = useCallback(() => {
        setDialogState(false);
        setId("");
    }, []) 
    
    
    
    return(
        <div className={classes.root} >
            <div className={classes.container} >
                <nav className={classes.nav} >
                    <h1 className={classes.heading} >React Colors</h1>
                    <Link  className={classes.paletteFormLink} to={`/palette/new`}>Create your own palette</Link>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {palettes.map(palette => (
                        <CSSTransition key={palette.id} classNames="fade" timeout={300}>
                            <MiniPalette 
                                key={palette.id} 
                                id={palette.id} 
                                palette={palette} 
                                openDialog={palette.type === "custom" && openDialog} />
                        </CSSTransition>
                     ))}
                </TransitionGroup>
            </div>
            <Dialog open={open} aria-labelledby="delete-dialog-title" onClose={closeDialog} >
                <DialogTitle id="delete-dialog-title" >Delete this Palette?</DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete} >
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }} ><CheckIcon/></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Delete" />
                    </ListItem>
                    <ListItem button onClick={closeDialog} >
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: red[100], color: red[600] }} ><CloseIcon/></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cancel" />
                    </ListItem>
                </List>      
            </Dialog>
                
           
        </div>
    )
}

export default withStyles(styles)(PaletteList);