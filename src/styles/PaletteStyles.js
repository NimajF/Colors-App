import media from "./sizes"

const styles = {
    Palette: {
        height: "100vh",
        overflow: "hidden",
    },
    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        opacity: 1,
        backgroundColor: "black",
        [media.down("lg")]: {
            width: "25%",
            height: "33.3333%",
        },
        [media.down("md")]: {
            width: "50%",
            height: "20%",
        },
        [media.down("xs")]: {
            width: "100%",
            height: "10%",
        },

        },
        
}
export default styles;
