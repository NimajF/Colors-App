import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css"

function ColorBox({paletteId, name, background, id, showLink}){

    const [copied, setCopy] = useState(false)

    const changeCopyState = () => {
        setTimeout(() => {
            setCopy((!copied), 1500)
                
        })
    }

    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div className="ColorBox" style={{ background: background }} >
                <div className={`copy-overlay ${copied && "show"}`} style={{ background: background }} />
                <div className={`copied-msg ${copied && "show"}`}>
                    <h1>Copied!</h1>
                    <p className={isLightColor && "dark-text"} >{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={isDarkColor && "light-text"} >{name}</span>
                    </div>
                    <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                </div>
                {showLink && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()} >
                            <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
                        </Link>
                    )
                }
                
            </div>
        </CopyToClipboard>
        
    )
}

export default ColorBox;