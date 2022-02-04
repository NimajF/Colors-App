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
        overflow: "scroll",
    },
    heading: {
        fontSize: "2rem",
        fontFamily: "Roboto Mono",
    },
    paletteFormLink: {
        backgroundColor: "#5159b3",
        color: "#f5f3f4 !important",
        padding: "12px",
        borderRadius: "5px",
        boxShadow: "0 5px 2px 0 rgb(0 0 0 / 10%), 0 5px 2px 0 rgb(0 0 0 / 10%)",
        fontSize: "1rem",
        fontFamily: "Roboto Mono !important",
        textShadow: "1px 2px 6px #3f37c9",
        transition: ".2s ease-in-out",
        "&:hover": {
            backgroundColor: "#5159b3",
            boxShadow: "0 10px 10px 0 rgb(0 0 0 / 15%), 0 7px 10px 0 rgb(0 0 0 / 15%)"
        },
        "&:active": {
            backgroundColor: "#3d348b"
        }
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        marginBottom: "3rem",
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