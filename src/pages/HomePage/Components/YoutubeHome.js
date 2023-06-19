import React from "react";
import Next from "../../../assests/images/YtThumbNail.jpg";

const YoutubeHome = () => {
  const handleClick = () => {
    const url = "https://www.youtube.com/watch?v=nzWh_KqD2AE"; // Replace with the actual YouTube URL you want to open
    window.open(url, "_blank");
  };

  return (
    <div style={{ margin: "0 auto", width: "100%" }}>
      <div style={{ position: "relative" }}>
        <img
          src={Next}
          alt="Home Image"
          onClick={handleClick}
          width={"100%"}
          style={{ objectFit: "cover" }}
        />
      
      </div>
    </div>
  );
};

export default YoutubeHome;
