import chroma from "chroma-js";
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
        textTransform: "uppercase",
        border: "none",
        borderRadius: "3px",
        textDecoration: "none",
        opacity: 0
    },
    BoxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform .6s ease-in-out",
    },
    showOverlay: {
        opacity: "1",
        zIndex: "10",
        transform: "scale(50)",
        position: "absolute",
    },
    copyMessage: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px 10px rgb(26, 26, 26)",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100",
        }
    },
    showMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all .3s ease-in-out",
        transitionDelay: ".3s",
    }
}
export default styles;