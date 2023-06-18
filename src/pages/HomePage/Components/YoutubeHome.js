import React from "react";
import youtubeLOgo from "../../../assests/images/youtube_img.png";

const YoutubeHome = () => {
  const handleClick = () => {
    const url = "https://www.youtube.com/watch?v=nzWh_KqD2AE"; // Replace with the actual YouTube URL you want to open
    window.open(url, "_blank");
  };

  return (
    <div style={{ margin: "0 auto", width: "fit-content" }}>
      <div style={{ position: "relative" }}>
        <img
          src="https://img.youtube.com/vi/nzWh_KqD2AE/0.jpg"
          alt="Home Image"
          onClick={handleClick}
          width={"100%"}
          style={{ objectFit: "cover" }}
        />
        <div>
          <img
            src={youtubeLOgo} // Replace with the actual YouTube logo image URL
            alt="YouTube Logo"
            onClick={handleClick}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 100,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default YoutubeHome;
