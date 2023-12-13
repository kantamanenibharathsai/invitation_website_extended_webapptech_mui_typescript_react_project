import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ButtonProps,
  styled,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  IconButton,
} from "@mui/material";
import DrawerAppBar from "../../components/navbar/Navbar";
import tenYrsLogo from "../../assets/tenYrsLogo.png";
import CloseIcon from "@mui/icons-material/Close";
import { homeStyles } from "./Home.Styles";
import { HomeSharp } from "@mui/icons-material";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundImage:
    "linear-gradient(-180deg, rgb(254, 180, 123) 0%, rgb(255, 126, 95) 96%)",
  borderRadius: "50px",
  // border: "3px solid red",
  whiteSpace: "nowrap",
  color: "rgb(255, 255, 255)",
  backgroundPosition: "initial",
  backgroundSize: "initial",
  backgroundAttachment: "scrolls",
  backgroundOrigin: "border-box",
  backgroundClip: "border-box",
  backgroundColor: "initial",
  boxShadow: "none",
  maxWidth: "300px",
  padding: "0px 40px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  boxSizing: "border-box",
  textAlign: "center",
  height: "50px",
  lineHeight: "50px",
  cursor: "pointer",
  fontWeight: "400",
  fontSize: "14px",
  display: "block",
  textDecoration: "none !important",
  backgroundRepeat: "no-repeat !important",
  alignSelf: "center",
  "&:hover": {
    backgroundImage: "linear-gradient(to botttom, white)",
  },
}));

const Home = () => {
  const [value, setValue] = React.useState("female");
  const [guestCount, setGuestCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleAddGuest = () => {
    if (guestCount < 3) {
      setGuestCount((prevCount) => prevCount + 1);
    }
  };

  const calculateTimeRemaining = () => {
    const deadline = new Date("December 10, 2023 17:30:00 GMT+00:00");
    const currentTime = new Date();
    const timeDifference = deadline.getTime() - currentTime.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const [timeRemaining, setTimeRemaining] = React.useState(
    calculateTimeRemaining()
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRemoveGuest = (index: number) => {
    setGuestCount((prevCount) => prevCount - 1);
  };

  return (
    <Box sx={homeStyles.homeContainer}>
      <Box sx={homeStyles.homeChildContainer}>
        <DrawerAppBar />
        <Box sx={homeStyles.annualDayInvitationContainer}>
          <Box sx={homeStyles.annualDayInvitationChildContainer}>
            <Typography variant="h1" sx={homeStyles.extendedWebText}>
              EXTENDED WEB APPTECH
            </Typography>
            <Typography
              component="h2"
              sx={homeStyles.annualDayInvitationHeading}
            >
              ANNUAL DAY INVITATION
            </Typography>
            <Box sx={homeStyles.dateContainer}>
              <Typography component="h2" sx={homeStyles.dateHeading}>
                10
                <Box component="span" sx={homeStyles.thStyle}>
                  th
                </Box>
              </Typography>
              <Typography component="h2" sx={homeStyles.dateHeading}>
                December 2023
              </Typography>
            </Box>
            <Typography component="p" sx={homeStyles.celebratingPara}>
              Celebrating a Decade of Success A Glorious Journey of Annual Day
              Celebrations December 10th 2023.
            </Typography>
            <ColorButton variant="contained">RSVP</ColorButton>
          </Box>
        </Box>
      </Box>
      <Box sx={homeStyles.invitationCelebrationTextMainContainer}>
        <Box sx={homeStyles.invitationCelebrationTextChildContainer}>
          <Typography component="p" sx={homeStyles.venueDateText}>
            DECEMBER 10, 2023, 5: 30 PM
          </Typography>
          <Typography component="p" sx={homeStyles.invitedText}>
            You're invited to the celebration
          </Typography>
        </Box>
      </Box>
      <Box sx={homeStyles.cantWaitTimeContainer}>
        <Box sx={homeStyles.cantWaitTimeChildContainer}>
          <Box sx={homeStyles.cantWaitLeftContainer}>
            <Typography component="p" sx={homeStyles.cantWaitText}>
              Can't wait to meet you
            </Typography>
            <Typography component="p" sx={homeStyles.celebrateHarvestText}>
              Celebrate the harvest! Annual Day Celebration will be starting
              very soon.
            </Typography>
          </Box>
          <Box sx={homeStyles.countDownRightContainer}>
            <Box sx={homeStyles.countDownRightChildContainer}>
              <Box sx={homeStyles.timeTextContainer}>
                <Typography component="p" sx={homeStyles.time}>
                  {timeRemaining.days}
                </Typography>
                <Typography component="p" sx={homeStyles.timeText}>
                  DAYS
                </Typography>
              </Box>
              <Box component="span" sx={homeStyles.colon}>
                :
              </Box>
              <Box sx={homeStyles.timeTextContainer}>
                <Typography component="p" sx={homeStyles.time}>
                  {timeRemaining.hours}
                </Typography>
                <Typography component="p" sx={homeStyles.timeText}>
                  HOURS
                </Typography>
              </Box>
              <Box component="span" sx={homeStyles.colon}>
                :
              </Box>
              <Box sx={homeStyles.timeTextContainer}>
                <Typography component="p" sx={homeStyles.time}>
                  {timeRemaining.minutes}
                </Typography>
                <Typography component="p" sx={homeStyles.timeText}>
                  MINUTES
                </Typography>
              </Box>
              <Box component="span" sx={homeStyles.colon}>
                :
              </Box>
              <Box sx={homeStyles.timeTextContainer}>
                <Typography component="p" sx={homeStyles.time}>
                  {timeRemaining.seconds}
                </Typography>
                <Typography component="p" sx={homeStyles.timeText}>
                  SECONDS
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={homeStyles.yourPresenceContainer}>
        <Box sx={homeStyles.yourPresenceChildContainer}>
          <Typography component="p" sx={homeStyles.presenceText}>
            Your presence will undoubtedly enhance the joy of this special
            event.
          </Typography>
          <Box sx={homeStyles.textLogoContainer}>
            <Box sx={homeStyles.JoinUsExtContainer}>
              <Typography component="p" sx={homeStyles.joinUsText}>
                Join Us for the celebrate 10th Years Anniversary of
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  ...homeStyles.extendedWebText,
                  fontSize: { xs: "35px", lg: "40px" },
                }}
              >
                EXTENDED WEB APPTECH
              </Typography>
            </Box>
            <Box sx={homeStyles.logoContainer}>
              {/* <Box
                component="img"
                alt="logo"
                sx={homeStyles.tenYrsLogo}
                src={tenYrsLogo}
              /> */}
              <Box sx={homeStyles.logoChildContainer}>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={homeStyles.tenStyle}
                >
                  10
                </Typography>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={homeStyles.yearsStyle}
                >
                  Years
                </Typography>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={homeStyles.anniversaryStyle}
                >
                  Anniversary
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={homeStyles.aboutAnnualDayContainer}>
        <Box sx={homeStyles.aboutAnnualDayChildContainer}>
          <Typography component="h2" sx={homeStyles.aboutAnnualDayText}>
            About Annual Day
          </Typography>
          <Typography component="p" sx={homeStyles.AnnualDayPara}>
            An Annual Day celebration is when an organisation celebrates another
            year of its being, and appreciates the students achievements in all
            curricular, co-curricular and extracurricular activities conducted
            throughout the year. It is a day that leaves everyone with a sense
            of accomplishment, pride, and a host of memories to cherish.
          </Typography>
          <ColorButton variant="contained">I'm coming</ColorButton>
        </Box>
      </Box>
      <Box sx={homeStyles.letUsKnowContainer}>
        <Box sx={homeStyles.letUsKnowChildContainer}>
          <Typography sx={homeStyles.letUsKnow}>
            Let us know you're coming
          </Typography>
          <Typography sx={homeStyles.dateText}>
            10.12.2023 | 5:30PM (GMT +04:00)
          </Typography>
          <ColorButton variant="contained">RSVP</ColorButton>
        </Box>
      </Box>
      <Box sx={homeStyles.formContainer}>
        <Box sx={homeStyles.formChildContainer}>
          <Typography component="p" sx={homeStyles.joinPara}>
            Join us for the grateful evening
          </Typography>

          <FormControl sx={homeStyles.formEl}>
            <Box>
              <RadioGroup
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                sx={homeStyles.radioGroup}
              >
                <FormControlLabel
                  value="Yes, I will"
                  control={<Radio color="success" />}
                  label="Yes, I will"
                  sx={homeStyles.radioBtnLabel}
                />
                <FormControlLabel
                  value="Oops, I can't"
                  control={<Radio />}
                  label="Oops, I can't"
                  sx={homeStyles.radioBtnLabel}
                />
              </RadioGroup>
            </Box>
            <Box sx={homeStyles.inputsParentContainer}>
              <Box sx={homeStyles.inputGuestContainer}>
                <Box sx={homeStyles.inputsParentChildContainer}>
                  <Box sx={homeStyles.inputLabelContainer}>
                    <Box component="label" sx={homeStyles.inputElLabel}>
                      First name *
                    </Box>
                    <Box
                      component="input"
                      sx={homeStyles.inputElement}
                      value=""
                    />
                  </Box>
                  <Box sx={homeStyles.inputLabelContainer}>
                    <Box component="label" sx={homeStyles.inputElLabel}>
                      Last name *
                    </Box>
                    <Box
                      component="input"
                      sx={homeStyles.inputElement}
                      value=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={homeStyles.inputGuestContainer}>
                <Box sx={homeStyles.inputsParentChildContainer}>
                  <Box sx={homeStyles.inputLabelContainer}>
                    <Box component="label" sx={homeStyles.inputElLabel}>
                      Email *
                    </Box>
                    <Box
                      component="input"
                      sx={homeStyles.inputElement}
                      value=""
                    />
                  </Box>
                  <Box sx={homeStyles.inputLabelContainer}>
                    <Box component="label" sx={homeStyles.inputElLabel}>
                      Phone number *
                    </Box>
                    <Box
                      component="input"
                      sx={homeStyles.inputElement}
                      value=""
                    />
                  </Box>
                </Box>
              </Box>

              <Button
                onClick={handleAddGuest}
                sx={homeStyles.additionalGuestStyle}
                variant="text"
                disabled={guestCount === 3}
              >
                + Additional{" "}
                <Box component="span" sx={homeStyles.letterSpan}>
                  guest
                </Box>
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // border: "5px solid black",
                  gap: "30px",
                  // alignItems: "center",
                }}
              >
                {[...Array(guestCount)].map((_, i) => (
                  // <Box key={i} sx={{ display: "flex" }}>
                  <Box key={i} sx={homeStyles.inputGuestContainer}>
                    <Box sx={homeStyles.guestTextIconContainer}>
                      <Typography sx={homeStyles.guestCountText}>
                        Guest {i + 1}
                      </Typography>
                      <Box sx={homeStyles.iconCloseContainer}>
                        <IconButton>
                          <CloseIcon
                            sx={homeStyles.closeIcon}
                            onClick={() => handleRemoveGuest(i)}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        ...homeStyles.inputsParentChildContainer,
                        // justifyContent: { md: "flex-start" },
                        // marginLeft: { md: "58px" },
                      }}
                    >
                      <Box sx={homeStyles.inputLabelContainer}>
                        <Box component="label" sx={homeStyles.inputElLabel}>
                          First name *
                        </Box>
                        <Box
                          component="input"
                          sx={homeStyles.inputElement}
                          value=""
                        />
                      </Box>
                      <Box sx={homeStyles.inputLabelContainer}>
                        <Box component="label" sx={homeStyles.inputElLabel}>
                          Last name *
                        </Box>
                        <Box
                          component="input"
                          sx={homeStyles.inputElement}
                          value=""
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <ColorButton variant="contained">Submit</ColorButton>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
