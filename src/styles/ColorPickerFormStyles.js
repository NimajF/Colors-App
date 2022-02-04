const styles = {
    root: {
      width: "90%",
    },
    picker: {
      width: "100% !important",
      marginTop: "2rem",
      boxShadow: "0 1px 15px 1px rgb(0 0 0 / 10%) !important"
    },
      addColor: {
      fontFamily: "Roboto Mono",
      width: "100%",
      borderRadius: "7px !important",
      padding: "0.5rem !important",
      marginTop: "1rem !important",
      boxShadow: "none !important",
      fontSize: "2rem !important",
      transition: ".2s ease-in-out !important",
      "&:hover": {
        letterSpacing: "0.2rem",
        transform: "translateY(-0.2rem)",
        boxShadow: "0 5px 10px 1px rgb(0 0 0 / 10%) !important"
      }
    },
    colorNameInput: {
      width: "100%",
      marginTop: "1rem !important",
      height: "70px"
    }
}

export default styles;