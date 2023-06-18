import { useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Cards from "../../components/Cards";
import CustomButton from "../../components/CustomButton";
import { useDataContex } from "../../context/DataContext";
import ImageComponent from "./Components/ImageComponent";
import ImageWeb from "./web/ImageWeb";
import TitleComponent from "./Components/TitleComponent";
import Paragraph from "../../components/Paragraph";
import ProfileContainer from "./Components/ProfileContainer";
import profileImg from "../../assests/images/login_back_img.png";
import fund from "../../assests/images/superfund_mobile_img.jpg";
import superfund from "../../assests/images/superfund_desktop.jpg";
import EventComponent from "./Components/EventComponent";
import CharityImages from "./Components/CharityImages";
import RequestPrayer from "./Components/PrayerRequest";
import SellProperty from "./Components/SellProperty";
import CharityComponent from "./Components/CharityComponent";
import Footer from "./Components/Footer";
import ParagraphText from "./Components/ParagraphText";

import { DontationText, textParagaph } from "./utils";
import StateDisclosure from "./Components/StateDisclosure";
import { Box, CircularProgress } from "@mui/material";
import TitleWeb from "./web/TitleWeb";
import Divider from "../../components/Divider";
import EventComponentWeb from "./web/EventComponentWeb";
import FooterWeb from "./web/FooterWeb";

export default function Mission() {
  const { id } = useParams();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dividedByTwo = screenWidth / 2;
  const leftWidth = screenWidth - 400;
  const webImagesWidth = (leftWidth /3) -10;
  const classes = useStyles({ dividedByTwo, leftWidth });
  const prayerButtonWidth =screenWidth/10;

  const [missionData, setMissionData] = useState();
  const [missionEvent, setMissionEvent] = useState([]);
  const [eventImages, setEventImages] = useState([]);
  const [missionPrayer, setMissionPrayer] = useState([]);
  const [StateDisclosures, setStateDiscloures] = useState([]);


  const getCharityGraph = (charityName) => {
    const data = `Financial info and charitable purpose, programs, and activities is either above, or can be obtained by contacting ${charityName}, and or as stated below.\n\nDonations go direct to ${charityName} via PayPal preferenced for missionary or minister (worker’s role and budget with charity). SeedForMe does not receive donation money or fees from PayPal. Preferencing support for worker is secondary to gifts use by the charity. Worker’s mission or ministry is to be conducted under direction of the charity and its board approves worker’s budget`;
    return data;
  };

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        const response = await fetch(
          `https://seedapis.seedforme.com/api/v1/mission/${id}`
        );
        const data = await response.json();
      
        setMissionData(data.data);
        setMissionEvent(data.data.mission_events);
        setEventImages(data.data.gallery);
        setMissionPrayer(data.data.mission_prayers);
        setStateDiscloures(data.data.state_disclosure);

      } catch (error) {
        console.error("Error fetching mission data:", error);
      }
    };

    fetchMissionData();
  }, [id]);

  const charityText = getCharityGraph(missionData?.charity?.name);
  return (
    <>
      {missionData && (
        <>
          <div className={classes.mobileView}>
            <ImageComponent
              backgroundImage={missionData.mission.title_picture}
              eventEndTime={missionEvent[0].end_time}
              eventStartTime={missionEvent[0].start_time}
              missionUrl={missionEvent[0].url}
            />

            <TitleComponent
              title={missionData.mission.title}
              received_amount={missionData.mission.received_amount}
              goal_amount={missionData.mission.goal_amount}
              payment_keys={missionData.mission.payment_keys}
            />

            <div style={{ paddingBottom: "30px", marginTop: 20 }}>
              <Paragraph
                text={
                  missionData.mission.mission_details
                    ? missionData.mission.mission_details
                    : textParagaph
                }
                lineLimit={10}
              />
            </div>
            <ProfileContainer
              name={missionData.user.name}
              address={missionData.charity.address}
              charityName={missionData.charity.name}
              businessTag={missionData.user.business_title}
              phone={missionData.user.phone}
              BusinessLogo={missionData.user.business_logo}
              ProfilePicture={missionData.user.profile_picture}
              imageSrc={profileImg}
            />
            <div style={{ paddingBottom: "50px", marginTop: "16px" }}>
              <Paragraph
                text={missionData.user.about_us}
                lineLimit={4}
              ></Paragraph>
            </div>
            {missionEvent.length > 0 && (
              <>
                {missionEvent.map((mission, index) =>
                  mission.is_active == true ? (
                    <EventComponent
                      imageUrl={mission.banner_picture}
                      missionImage={mission.banner_picture}
                      eventType={mission.type}
                      eventName={mission.title}
                      eventDate={mission.event_date}
                      eventStartTime={mission.start_time}
                      eventEndTime={mission.end_time}
                      missionUrl={mission.url}
                      index={index}
                    />
                  ) : null
                )}
              </>
            )}
            {eventImages.length > 0 && (
              <>
                <CharityImages imageUrls={eventImages} />
              </>
            )}

            {!missionPrayer.length <= 0 && (
              <>
                {missionPrayer.map((mission, index) => (
                  <>
                    {mission.prayer_text !== null ? (
                      <RequestPrayer
                        index={index}
                        Prayer={mission.prayer_text}
                      />
                    ) : null}
                  </>
                ))}
              </>
            )}

            <SellProperty
              imageUrl={fund}
              title=""
              url="https://www.youtube.com/watch?v=cv8Ee15MsNw"
            />
            <CharityComponent
              imageUrl={missionData.charity.logo_image}
              name={missionData.charity.name}
              address={missionData.charity.address}
              phone={missionData.charity.phone}
              email={missionData.charity.email}
              website={missionData.charity.website}
              taxEIN={missionData.charity.irs_tax}
            />
            {StateDisclosures.length > 0 && (
              <>
                <StateDisclosure disclosure={missionData.state_disclosure[0]} />
              </>
            )}

            <ParagraphText text={charityText} isUppercase={false} />

            <ParagraphText
              text={DontationText}
              isUppercase={true}
            ></ParagraphText>
            <Footer />
          </div>
          <div className={classes.webView}>
            <div className={classes.header}>
              <ImageWeb backgroundImage={missionData.mission.title_picture} />
              <TitleWeb
                title={missionData.mission.title}
                received_amount={missionData.mission.received_amount}
                goal_amount={missionData.mission.goal_amount}
                eventEndTime={missionEvent[0].end_time}
                eventStartTime={missionEvent[0].start_time}
                missionUrl={missionEvent[0].url}
                payment_keys={missionData.mission.payment_keys}
              />
            </div>
            <div className={classes.mainContainer}>
              <div className={classes.left}>
                <Paragraph
                  text={missionData.mission.mission_details}
                  lineLimit={10}
                />
                <div style={{ marginTop: 30, marginBottom: 15 }}>
                  <ProfileContainer
                    name={missionData.user.name}
                    address={missionData.charity.address}
                    charityName={missionData.charity.name}
                    businessTag={missionData.user.business_title}
                    phone={missionData.user.phone}
                    BusinessLogo={missionData.user.business_logo}
                    ProfilePicture={missionData.user.profile_picture}
                    imageSrc={profileImg}
                  />
                </div>
                <div style={{ marginBottom: 25 }}>
                  <Paragraph text={missionData.user.about_us} lineLimit={5} />
                </div>
                {eventImages.length > 0 && (
                  <>
                    <CharityImages imageUrls={eventImages} webImagesWidth={webImagesWidth} />
                  </>
                )}
                {!missionPrayer.length <= 0 && (
                  <>
                    {missionPrayer.map((mission, index) => (
                      <>
                        {mission.prayer_text !== null ? (
                          <RequestPrayer
                          
                            index={index}
                            Prayer={mission.prayer_text}
                            prayerButtonWidth={prayerButtonWidth}
                          />
                        ) : null}
                      </>
                    ))}
                  </>
                )}
                <div className={classes.charityContainer}>
                  <div className={classes.charity}>
                    <CharityComponent
                      imageUrl={missionData.charity.logo_image}
                      name={missionData.charity.name}
                      address={missionData.charity.address}
                      phone={missionData.charity.phone}
                      email={missionData.charity.email}
                      website={missionData.charity.website}
                      taxEIN={missionData.charity.irs_tax}
                    />
                    <Divider />
                    <div className={classes.charityDetails}>
                      {StateDisclosures.length > 0 && (
                        <>
                          <StateDisclosure
                            disclosure={missionData.state_disclosure[0]}
                          />
                        </>
                      )}
                      <ParagraphText text={charityText} isUppercase={false} fontSize={10}/>
                      <ParagraphText text={DontationText} isUppercase={true} fontSize={10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.right}>
                {missionEvent.length > 0 && (
                  <>
                    {missionEvent.map((mission, index) =>
                      mission.is_active == true ? (
                        <EventComponentWeb
                          imageUrl={mission.banner_picture}
                          missionImage={mission.banner_picture}
                          eventType={mission.type}
                          eventName={mission.title}
                          eventDate={mission.event_date}
                          eventStartTime={mission.start_time}
                          eventEndTime={mission.end_time}
                          missionUrl={mission.url}
                          index={index}
                        />
                      ) : null
                    )}
                  </>
                )}
                <div className={classes.propertyContainer}>
                  <SellProperty
                    imageUrl={superfund}
                    title=""
                    url="https://www.youtube.com/watch?v=cv8Ee15MsNw"
                  />
                </div>
              </div>
            </div>
            <FooterWeb />
          </div>
        </>
      )}
      {!missionData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress className={classes.progress} />
        </div>
      )}
    </>
  );
}

const useStyles = makeStyles({
  progress: {
    color: "#EDBE49 !important",
  },
  mobileView: {
    "@media (max-width: 800px)": {
      display: "block",
    },
    "@media (min-width: 800px)": {
      display: "none",
    },
  },
  webView: {
    "@media (max-width: 800px)": {
      display: "none",
    },
    "@media (min-width: 800px)": {
      display: "block",
    },
  },
  header: {
    display: "flex",
    height: (props) => (props.dividedByTwo ? props.dividedByTwo : "600px"),
  },
  mainContainer: {
    display: "flex",
    gap: "50px",
    marginTop: "60px",
    padding: "0px 40px 0px 60px",
  },
  left: {
    width: (props) => (props.leftWidth ? props.leftWidth : "500px"),
  },
  right: {
    width: "250px !important",
  },
  charityContainer: {
    border: "1px solid #E0E0E0",
    borderRadius: "20px",
  },
  charity: {},
  charityDetails: {
    padding: "20px",
  },
  propertyContainer: {
    marginTop: 24,
    borderRadius: 10,
    overflow: "hidden",
  },
});
