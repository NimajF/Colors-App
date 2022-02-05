import bg from "./bg.svg";
const styles = {
    root: {
        width: "100%", 
        height: "100vh", 
        background: `url(${bg})`, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    },
    messageContainer: {
        width: "40%", 
        height: "40%", 
        background: "rgba(255, 255, 255, 0.10)", 
        display: "flex", 
        flexDirection: "column", 
        padding: "2rem", 
        backdropFilter: "blur(5px)", 
        border: "1px solid #767cc3",
        borderRadius: "10px",
        "@media (max-width: 575.98px)": {
            padding: "1rem"
        } 
    },
    message: {
        fontFamily: "Roboto Mono", 
        color: "white",
        fontWeight: 300,
        "@media (max-width: 575.98px)": {
            fontSize: "1rem"
        } 
    },
    returnButton: {
        fontFamily: "Roboto Mono",
        fontSize: "1.5rem",
        color: "white",
        backgroundColor: "#311f7c",
        padding: "0.7rem",
        borderRadius: "5px",
        alignSelf: "center", 
        marginTop: "4rem",
        textDecoration: "none",
        transition: ".2s ease-in-out",
        "&:hover": {
            transform: "scale(1.06)",
            backgroundColor: "#221558",
            boxShadow: "3px 3px 2px 0 #1a0f48"
        },
        "@media (max-width: 575.98px)": {
            marginTop: "3rem",
            fontSize: "1rem",
        }
    },
    
}
export default styles;