import media from "./sizes"
import bg from "./bg.svg"
const styles = {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity .3s ease-out"
        },
    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#3D46AA",
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        /* background by SVGBackgrounds.com */
        overflow: "scroll"
    },
    heading: {
        fontSize: "2rem",
        textShadow: "1px 1px 2px black"
    },
    paletteFormLink: {
        fontSize: "1.1rem",
        textShadow: "1px 2px 6px black",
        transition: "transform .2s ease-in-out",
        "&:hover": {
            transform: "scale(1.01)",
            color: "white",
        }
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [media.down("xl")]: {
            width: "80%",  
        },
        [media.down("xs")]: { 
            width: "70%"
        },
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        color: "white",
        "& a": {
            color: "white",
            fontFamily: "Poppins, sans-serif",
            textDecoration: "none"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [media.down("md")]: { 
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [media.down("xs")]: { 
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.4rem"
        },
        
    }
} 
export default styles;