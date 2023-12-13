import { styled } from "@mui/system";

const scaleAnimation = styled("div")({
  "@keyframes scaleAnimation": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.2)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});

// Define your styles
const homeStyles = {
  homeContainer: {
    width: "100%",
    // border: "3px solid pink",
  },

  homeChildContainer: {
    // backgroundImage:
    //   "url('https://hosting.renderforestsites.com/5699226/880130/media/7eef693dd4c8c543a466411958eea578.jpg')",
    // backgroundSize: "cover",
    // border: "2px solid red",
    // height: "600px",
    background:
      "linear-gradient(rgba(7, 95, 83, 0), rgba(7, 95, 83, 0)), url('https://hosting.renderforestsites.com/5699226/880130/media/7eef693dd4c8c543a466411958eea578.jpg') center center / cover no-repeat",
  },

  annualDayInvitationContainer: {
    // backgroundColor: "#07463D",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },

  annualDayInvitationChildContainer: {
    //border: "2px solid red",
    width: { xs: "90%", sm: "80%", md: "60%", lg: "35%" },
    margin: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  extendedWebText: {
    fontSize: { xs: "35px", md: "50px" },
    color: "transparent",
    fontWeight: "600",
    backgroundImage: "linear-gradient(to left top, blue, red)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    animation: "scaleAnimation 2s infinite", // Reference the animation directly
  },

  annualDayInvitationHeading: {
    fontSize: { xs: "22px", md: "30px" },
    color: "white",
    fontWeight: "600",
  },

  dateContainer: {
    display: "flex",
    alignItems: "center",
    // border: "2px solid red",
    justifyContent: "center",
    gap: "20px",
    // maxWidth: "content",
    minWidth: "fit-content",
    maxWidth: "1000px",
    margin: "0 auto",
    animation: "sizingDateContainer 5s ease-in 0s infinite normal",
    "@keyframes sizingDateContainer": {
      "0%": {
        transform: "perspective(900px) translateZ(-900px)",
      },

      "25%": {
        transform: "perspective(900px) translateZ(-800px)",
      },

      "50%": {
        transform: {
          xs: "perspective(900px) translateZ(200px)",
          sm: "perspective(900px) translateZ(300px)",
        },
        // border: "5px solid black",
      },

      "75%": {
        transform: {
          xs: "perspective(900px) translateZ(130px)",
          sm: "perspective(900px) translateZ(200px)",
        },
      },

      "100%": {
        transform: {
          xs: "perspective(900px) translateZ(130px)",
          sm: "perspective(900px) translateZ(800px)",
        },
        //sborder: "3px solid red",
        backgroundColor: { sm: "white" },
        borderRadius: { sm: "10px" },
        padding: { sm: "3px 14px" },
      },
    },
  },

  dateHeading: {
    fontSize: { xs: "30px", md: "35px" },
    fontWeight: "600",
    position: "relative",
    backgroundImage:
      "linear-gradient(to right bottom, red 40%, yellow 30%, blue 65%)", //"linear-gradient(to left top, blue, red)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    //border: "1px solid red",
  },

  thStyle: {
    fontSize: "15px",
    fontWeight: "600",
    // border: "1px solid red",
    position: "absolute",
    top: "4px",
    marginRight: "10px",
    backgroundImage: "linear-gradient(yellow 50%, blue 50%)", //"linearGradient(45deg, orange 0 50%, blue 50% 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  celebratingPara: {
    fontSize: { xs: "16px", sm: "18px", md: "20px" },
    color: "#ffffff",
    fontWeight: "500",

    // marginTop: "20px",
  },

  invitationCelebrationTextMainContainer: {
    backgroundImage:
      "url('https://hosting.renderforestsites.com/5699226/880130/media/9af6d6aad54a9dce00100ab49cf7464d.jpg')",
    backgroundSize: "cover",
    // background:
    //   "linear-gradient(rgba(7, 95, 83, 0), rgba(7, 95, 83, 0)), url('https://hosting.renderforestsites.com/5699226/880130/media/9af6d6aad54a9dce00100ab49cf7464d.jpg') center center / cover no-repeat)",
    backgroundAttachment: "fixed",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // border: "3px solid red",
  },

  invitationCelebrationTextChildContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    width: "100%",
    padding: "80px 0px",
    boxSizing: "border-box",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "3px solid red",
  },

  venueDateText: {
    fontFamily: "Titan One",
    fontWeight: "400",
    fontSize: { xs: "18px", sm: "21px" },
    color: "black",
    textAlign: "center",
    marginTop: "0px",
    width: "fit-content",
    padding: "10px 15px",
    marginBottom: "20px",
    lineHeight: "1.4",
    animation: "animatingVenueDateText 7s ease-in 0s infinite normal",
    backgroundImage:
      "linear-gradient(to right bottom,  #7bc3ed 30%, #03fce3 65%)",
    borderRadius: "10px",
    "@keyframes animatingVenueDateText": {
      "0%": {
        transform: "perspective(900px) translateZ(-900px) rotateY(0deg)",
      },

      "25%": {
        transform: "perspective(900px) translateZ(-800px) rotateY(90deg)",
      },

      "50%": {
        transform: {
          xs: "perspective(900px) translateZ(200px) rotateY(-180deg)",
          sm: "perspective(900px) translateZ(300px) rotateY(-180deg)",
        },
      },

      "75%": {
        transform: {
          xs: "perspective(900px) translateZ(130px) rotateY(-270deg)",
          sm: "perspective(900px) translateZ(200px) rotateY(-270deg)",
        },
      },

      "100%": {
        transform: {
          xs: "perspective(900px) translateZ(130px) rotateY(360deg)",
          sm: "perspective(1400px) translateZ(1200px) rotateY(360deg)",
        },
      },
    },
  },

  invitedText: {
    fontFamily: "Titan One",
    fontWeight: "400",
    fontSize: { xs: "30px", sm: "38px", md: "50px" },
    width: "100%",
    color: "rgb(7, 95, 83)",
    textAlign: "center",
    margin: "0px auto",
  },

  cantWaitTimeContainer: {
    background: "rgb(242, 245, 223)",
    padding: "60px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  cantWaitTimeChildContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "space-between" },
    // alignItems: "center",
    width: "90%",
    margin: "auto",
    // border: "1px solid red",
    gap: { xs: "29px", md: "0" },
  },

  cantWaitLeftContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    // border: "1px solid red",
    width: { xs: "100%", md: "48%" },
  },

  cantWaitText: {
    fontFamily: "Titan One",
    width: "100%",
    color: "rgb(255, 126, 95)",
    fontSize: { xs: "28px", sm: "42px", md: "38px", lg: "42px" },
    fontweight: "400",
    textAlign: "center",
    lineHeight: { md: "1.2" },
  },

  celebrateHarvestText: {
    width: "100%",
    textAlign: "center",
    color: "rgb(7, 95, 83)",
    fontFamily: "Open Sans",
    fontWeight: "600",
    fontSize: { xs: "15px", sm: "18.32px" },
    lineHeight: "1.4",
  },

  countDownRightContainer: {
    // border: "1px solid red",
    width: { xs: "100%", md: "48%" },
  },

  countDownRightChildContainer: {
    display: "flex",
    flexDirection: "row",
    gap: { xs: "1px", sm: "15px" },
    // border: "10px solid red",
    alignItems: "flex-start",
    width: { sm: "80%", md: "100%" },
    margin: { sm: "auto", md: "0px" },
  },

  timeTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "15px", md: "20px", lg: "20px" },
    // border: "4px solid green",
  },

  time: {
    fontFamily: "Titan One",
    width: "100%",
    color: "rgb(255, 126, 95)",
    fontSize: { xs: "22px", sm: "40px", lg: "60px" },
    fontweight: "400",
    textAlign: "center",
    // border: "4px solid green",
    px: 0,
    lineHeight: 0.8,
  },

  timeText: {
    width: "100%",
    color: "rgb(255, 126, 95)",
    fontSize: { xs: "11px", sm: "16px", lg: "18px" },
    fontweight: "400",
    textAlign: "center",
  },

  colon: {
    fontFamily: "Titan One",
    width: "100%",
    color: "rgb(255, 126, 95)",
    fontSize: { xs: "15px", sm: "32px", lg: "50px" },
    fontweight: "400",
    textAlign: "center",
    // border: "4px solid green",
    lineHeight: 0.9,
  },

  yourPresenceContainer: {
    width: "100%",
    padding: "60px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBF4EC",
  },

  yourPresenceChildContainer: {
    width: { xs: "90%", sm: "80%", md: "90%", lg: "75%" },
    margin: "auto",
    // border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "strech",
    textAlign: "center",
    gap: "18px",
  },

  presenceText: {
    fontSize: { xs: "16px", sm: "18px", md: "25px" },
    color: "#BF9780",
    fontWeight: "600",
    fontFamily: "Poppins",
  },

  textLogoContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    // border: "2px solid red",
    gap: { xs: "30px", lg: "30px" },
  },

  JoinUsExtContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-between",
    // border: "2px solid orange",
    gap: { xs: "12px", md: "15px" },
  },

  joinUsText: {
    fontSize: { xs: "18px", sm: "20px", md: "25px", lg: "28px" },
    color: "#076173",
    fontWeight: "600",
    fontFamily: "Poppins",
  },

  logoContainer: {
    backgroundColor: "#E6ABB1",
    borderRadius: "50%",
    width: "170px",
    height: "170px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },

  logoChildContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },

  tenYrsLogo: {
    width: "70px",
    height: "70px",
  },

  tenStyle: {
    fontSize: "66px",
    fontFamily: "Poppins",
    color: "transparent",
    fontWeight: "600",
    backgroundImage:
      "linear-gradient(to left top, #26AFE4, #9EDBF9, #1AD1D2, #65668F)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  },

  yearsStyle: {
    color: "white",
    fontWeight: "500",
    fontSize: "12px",
    fontFamily: "Poppins",
    lineHeight: 0.7,
    // border: "2px solid red",
    marginTop: "-3px",
    marginBottom: "2px",
  },

  anniversaryStyle: {
    color: "white",
    fontWeight: "500",
    fontSize: "14px",
    fontFamily: "Poppins",
  },

  aboutAnnualDayContainer: {
    width: "100%",
    // height: "280px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F5DF",
    padding: "50px 0px",
  },

  aboutAnnualDayChildContainer: {
    width: { xs: "90%", sm: "70%", md: "60%" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "17px",
    textAlign: "center",
    // border: "1px solid red",
  },

  aboutAnnualDayText: {
    fontfamily: "Poppins",
    fontWeight: "500",
    color: "#FF7E5F",
    fontSize: { xs: "28px", sm: "30px", md: "40px" },
  },

  AnnualDayPara: {
    fontfamily: "Poppins",
    fontWeight: "500",
    color: "#075F53",
    fontSize: { xs: "16px", sm: "17px", md: "17px" },
  },

  letUsKnowContainer: {
    // backgroundImage:
    //   "url('https://hosting.renderforestsites.com/5699226/880130/media/5f58422e66d7ab06b69822c7b45979ad.jpg')",
    // backgroundSize: "cover",
    backgroundColor: "#F9EAEB",
    padding: "65px 0px",
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundPositionX: "initial center",
    // backgroundPositionY: "initial center",
    // backgroundSize: "initial cover",
    // backgroundRepeatX: "initial, no-repeat",
    // backgroundRepeatY: "initial, no-repeat",
    // backgroundAttachment: "initial, initial",
    // backgroundOrigin: "initial, initial",
    // backgroundClip: "initial, initial",
    // backgroundColor: "initial",
    height: "400px",
  },

  letUsKnowChildContainer: {
    width: { xs: "100%", sm: "75%", md: "55%", lg: "50%" },
    backgroundColor: "#064C42",
    borderRadius: "10px",
    padding: { xs: "30px 5px", sm: "40px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },

  letUsKnow: {
    fontfamily: "Poppins",
    fontWeight: "900",
    color: "white",
    fontSize: { xs: "22px", sm: "28px", md: "32px", lg: "36px" },
  },

  dateText: {
    fontfamily: "Poppins",
    fontWeight: "500",
    color: "white",
    fontSize: { xs: "14px", sm: "17px", md: "18px" },
  },

  formContainer: {
    backgroundColor: "#075F53",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  formChildContainer: {
    width: { xs: "100%", sm: "80%", md: "85%", lg: "60%", xl: "50%" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    gap: "20px",
    // border: "2px solid red",
    padding: "20px 0px",
  },

  joinPara: {
    fontfamily: "Poppins",
    fontWeight: "900",
    color: "white",
    fontSize: { xs: "19px", sm: "22px", md: "21px" },
    textAlign: "center",
  },

  formEl: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "2px solid yellow",
    gap: "30px",
  },

  radioGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    // border: "2px solid red",
  },

  radioBtnLabel: {
    fontfamily: "Poppins",
    fontWeight: "500",
    color: "white",
    fontSize: { xs: "14px", sm: "17px", md: "21px" },
  },

  inputsParentContainer: {
    // border: "7px solid blue",
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    gap: "30px",
    width: { xs: "90%", sm: "90%", md: "100%", lg: "100%" },
    // alignItems: "center",
  },

  inputsParentChildContainer: {
    // border: "3px solid violet",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    // flexWrap: "wrap",
    gap: "20px",
    // width: "100%",
    // alignItems: "center",
    justifyContent: { xs: "flex-start", md: "space-between" },
    width: "100%",
  },

  inputLabelContainer: {
    display: "flex",
    flexDirection: "column",
    // gap: "7px",
    // border: "3px solid orange",
    width: { xs: "100%", md: "48%" },
  },

  inputElLabel: {
    fontfamily: "Poppins",
    fontWeight: "500",
    color: "white",
    fontSize: { xs: "14px", sm: "15px", md: "15px" },
  },

  inputElement: {
    height: "47px",
    borderRadius: "30px",
    backgroundColor: "white",
    outline: "none",
    padding: "9px 17px",
    width: { xs: "100%", sm: "100%", md: "100%" },
    border: "none",
  },

  additionalGuestStyle: {
    fontfamily: "Poppins",
    fontWeight: "600",
    color: "rgb(254, 180, 123)",
    fontSize: "14px",
    outline: "none",
    alignSelf: "center",
    textTransform: "capitalize",
  },
  inputGuestContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: { xs: "center", md: "flex-start" },
    alignItems: "center",
    // border: "2px solid red",
    gap: "15px",
  },

  guestTextIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // border: "2px solid blue",
    justifyContent: "space-between",
    width: "100%",
  },

  guestCountText: {
    fontSize: "18px",
    fontfamily: "Poppins",
    fontWeight: "500",
    color: "black",
  },

  letterSpan: {
    textTransform: "lowercase",
    ml: "6px",
  },

  closeIcon: {
    fontSize: "20px",
    color: "white",
    marginLeft: "10px",
  },

  iconCloseContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export { homeStyles };
