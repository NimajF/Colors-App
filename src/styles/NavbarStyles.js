import media from "./sizes"

const styles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },
    Logo: {
        marginRight: "15px",
        padding: '0 13px',
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto, sans-serif",
        height: "100%",
        display: 'flex',
        alignItems: "center",
        [media.down("xs")]: {
            display: "none",
        },
        "& a": {
            textDecoration: "none",
            color: "rgb(37, 37, 37)",
            transition: ".3s ease-in-out",
        },
        "&hover a": {
            color: "rgb(5, 113, 128)",
            animationName: "funny-logo",
            animationDuration: "1s",
            letterSpacing: "2px",
        }
    },
    // "@keyframes funny-logo":{
    //     "0%": {transform: "rotate(0deg)", color: "rgb(5, 113, 128)"},
    //     "25%": {transform: "rotate(4deg)", color: "rgb(21, 173, 123)"},
    //     "50%": {transform: "rotate(-4deg)", color: "rgb(110, 20, 194)"},
    //     "75%": {transform: "rotate(2deg)", color: "crimson"},
    //     "100%": {transform: "rotate(0deg)", color: "rgb(5, 113, 128)"},
    // },
    
    Slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        [media.down("md")]: {
            width: "150px",
        },
    },
    navTitle: {
        [media.down("xs")]: {
            fontSize: "1rem"
          }
    },
    navBtns: {
        marginRight: "1rem",
        display: "flex",
        "& a": {
          textDecoration: "none"
        },
        [media.down("xs")]: {
          marginRight: "0.3rem"
        }
      },
      button: {
        margin: "0 0.5rem",
        [media.down("xs")]: {
          margin: "0 0.2rem",
          padding: "0.3rem",
          fontSize: "0.7rem"
        }
      }
    
    
}
export default styles;