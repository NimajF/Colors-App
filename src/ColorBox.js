import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles"
import { withStyles } from "@mui/styles";

import "./ColorBox.css"





function ColorBox({paletteId, name, background, id, showingFullPalette, classes}){

    const [copied, setCopy] = useState(false)

    const changeCopyState = () => {
        setCopy(true)
        setTimeout(() => setCopy(false), 1500)
    }

    // const isDarkColor = chroma(background).luminance() <= 0.08;
    // const isLightColor = chroma(background).luminance() >= 0.7;
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div className={classes.ColorBox} style={{ background: background }} >
                <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background: background }} />
                <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText} >{background}</p>
                </div>
                <div className="copy-container">
                    <div className={classes.BoxContent}>
                        <span className={classes.colorName} >{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {showingFullPalette && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()} >
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )
                }
                
            </div>
        </CopyToClipboard>
        
    )
}

export default withStyles(styles)(ColorBox);