

const styles = {
    root: {
        backgroundColor: "#8b90cc",
        borderRadius: "5px",
        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%)",
        padding: "0.5rem",
        position: "relative",
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        // overflow: "hidden",
        "&:hover svg": {
            opacity: 1
        },
        "&:hover": {
            backgroundColor: "white",
            boxShadow: "15px 15px 1px 0 rgb(0 0 0 / 30%), 0 -1px 2px 0 rgb(0 0 0 / 30%)",
        },
        "&:hover h5": {
            // backgroundColor: "#ced4da",
            color: "#424b54"
        }
    },
    colors: {
        backgroundColor: "#adb5bd",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "white",
        fontFamily: "Roboto Mono, sans-serif",
        fontWeight: "500",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginRight: "0.2rem",
        fontSize: "1.5rem",
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px"

    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "10px",
        borderTopRightRadius: "4px",
        zIndex: 10,
        opacity: 0,
        transition: ".3s ease-in-out",
        "&:hover": {
            backgroundColor: "#d52618",
        },
    }
}

export default styles;