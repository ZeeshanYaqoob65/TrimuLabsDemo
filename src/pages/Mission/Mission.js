import { useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Cards from "../../components/Cards";
import CustomButton from "../../components/CustomButton";
import { useDataContex } from "../../context/DataContext";
import ImageComponent from "./Components/ImageComponent";
import TitleComponent from "./Components/TitleComponent";
import Paragraph from "../../components/Paragraph";
import ProfileContainer from "./Components/ProfileContainer";
import profileImg from "../../assests/images/login_back_img.png";
import fund from "../../assests/images/superfund_mobile_img.jpg";
import EventComponent from "./Components/EventComponent";
import CharityImages from "./Components/CharityImages";
import RequestPrayer from "./Components/PrayerRequest";
import SellProperty from "./Components/SellProperty";
import CharityComponent from "./Components/CharityComponent";
import Footer from "./Components/Footer";
import ParagraphText from "./Components/ParagraphText";
import { DontationText } from "./utils";
import StateDisclosure from "./Components/StateDisclosure";

export default function Mission() {
  const { id } = useParams();
  console.log(id)

  const [missionData, setMissionData] = useState();
  const [missionEvent, setMissionEvent] = useState([]);
  const [eventImages, setEventImages] = useState([]);
  const [missionPrayer, setMissionPrayer] = useState([]);

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
        console.log(data);
        setMissionData(data.data);
        setMissionEvent(data.data.mission_events);
        setEventImages(data.data.gallery);
        setMissionPrayer(data.data.mission_prayers);
      } catch (error) {
        console.error("Error fetching mission data:", error);
      }
    };

    fetchMissionData();
  }, [id]);

  useEffect(() => {
    console.log("mission event", missionEvent);
  }, [missionEvent]);

  const paragraphText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et finibus mauris. Curabitur hendrerit metus sit amet ligula convallis, at luctus dolor ultrices. Sed nec erat a nulla condimentum dictum a non magna. Sed nec volutpat mauris. Sed eleifend consectetur justo, non consectetur sem dictum ut. In laoreet magna in pharetra aliquet. Nulla sed turpis lectus. Nullam egestas, erat eu commodo lacinia, sem nibh luctus mi, et venenatis arcu justo et est. Sed sollicitudin lectus eu enim congue, id condimentum risus gravida. Duis id vestibulum urna. Donec feugiat magna in gravida fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et finibus mauris. Curabitur hendrerit metus sit amet ligula convallis, at luctus dolor ultrices. Sed nec erat a nulla condimentum dictum a non magna. Sed nec volutpat mauris. Sed eleifend consectetur justo, non consectetur sem dictum ut. In laoreet magna in pharetra aliquet. Nulla sed turpis lectus. Nullam egestas, erat eu commodo lacinia, sem nibh luctus mi, et venenatis arcu justo et est. Sed sollicitudin lectus eu enim congue, id condimentum risus gravida. Duis id vestibulum urna. Donec feugiat magna in gravida fermentum.";
  const charityText = getCharityGraph(missionData?.charity?.name);
  return (
    <>
      {missionData && (
        <div>
          <ImageComponent backgroundImage={missionData.mission.title_picture} />

          <TitleComponent
            title={missionData.mission.title}
            received_amount={missionData.mission.received_amount}
            goal_amount={missionData.mission.goal_amount}
          />
          <div style={{ paddingBottom: "50px" }}>
            <Paragraph
              text={missionData.mission.mission_details}
              lineLimit={10}
            ></Paragraph>
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
          ></ProfileContainer>
          <div style={{ paddingBottom: "50px", marginTop: "16px" }}>
            <Paragraph text={paragraphText} lineLimit={3}></Paragraph>
          </div>
          {missionEvent.length > 0 && (
            <>
              {missionEvent.map((mission, index) => (
                <EventComponent
                  imageUrl={profileImg}
                  missionImage={mission.banner_picture}
                  eventType={mission.type}
                  eventName={mission.title}
                  eventDate={mission.event_date}
                  eventStartTime={mission.start_time}
                  eventEndTime={mission.end_time}
                />
              ))}
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
                <RequestPrayer index={index} Prayer={mission.prayer_text} />
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
          {/* <StateDisclosure disclosure={missionData.state_disclosure[0]} /> */}

          <ParagraphText text={charityText} isUppercase={false}></ParagraphText>

          <ParagraphText
            text={DontationText}
            isUppercase={true}
          ></ParagraphText>
          <Footer />
        </div>
      )}
      {!missionData &&(
        <div>heko</div>
      )

      }
    </>
  );
}
