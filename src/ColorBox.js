import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@mui/styles";

import "./ColorBox.css"



const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.9px",
        "&:hover button": {
            opacity: 1
        }
    
    },
    copyText: {
        color: props => chroma(props.background).luminance() >=  0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <=  0.08 ? "white" : "black"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >=  0.7 ? "rgba(0, 0, 0, 0.3)" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
        borderRadius: "3px"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >=  0.7 ? "rgba(0, 0, 0, 0.3)" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textTlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: "white",
        textTransform: "uppercase",
        border: "none",
        borderRadius: "3px",
        textDecoration: "none",
        opacity: 0
    }
}

function ColorBox({paletteId, name, background, id, showingFullPalette, classes}){

    const [copied, setCopy] = useState(false)

    const changeCopyState = () => {
        setTimeout(() => {
            setCopy((!copied), 1500)
                
        })
    }

    // const isDarkColor = chroma(background).luminance() <= 0.08;
    // const isLightColor = chroma(background).luminance() >= 0.7;
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div className={classes.ColorBox} style={{ background: background }} >
                <div className={`copy-overlay ${copied && "show"}`} style={{ background: background }} />
                <div className={`copied-msg ${copied && "show"}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText} >{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
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