const styles = {
    container: {
        height: "5vh",
        backgroundColor: "#e9ecef",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    PaletteFooter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "400",
        fontFamily: "Roboto Mono",
        marginRight: "1rem",
        marginBottom: "0.5rem",
        "& p": {
            marginRight: "1rem",
            fontSize: "1.3rem",
            color: "#212529"
        },
        "& span": {
            fontSize: "1.3rem"
        } 
    }
}
export default styles;