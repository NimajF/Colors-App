import media from "./sizes";

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-7px",
        "&:hover svg": {
            color: "rgba(255, 255, 255, 0.9)",
            transform: "scale(1.5)"
        },
        [media.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [media.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [media.down("sm")]: {
            width: "100%",
            height: "5%",
            overflow: "hidden"
        },
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        [media.down("sm")]: {
            width: "100%",
            bottom: "3px",
            height: "5%",
            alignItems: "flex-start",
            overflow: "visible",
            padding: "20px"
        },
    },
    deleteIcon: {
        color: "rgba(0, 0, 0, 0.5)",
        transition: "all .2s ease-in-out !important"
    }
};

export default styles;