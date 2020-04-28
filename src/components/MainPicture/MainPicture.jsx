import React from "react";

const MainPicture = (props) => {
  return (
    <section
      style={{
        backgroundImage: `url(${props.imgURL})`,
        width: "533px",
        height: "764px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(100%) contrast(90%) brightness(0.8)",
      }}
    ></section>
  );
};

export default MainPicture;
