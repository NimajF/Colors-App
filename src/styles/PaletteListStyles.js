import media from "./sizes"

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"

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
            gridGap: "1rem"
        },
        
    }
} 
export default styles;