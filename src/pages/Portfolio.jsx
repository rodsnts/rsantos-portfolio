import React from "react";

import "./Portfilio.scss";

const project = require("../projects.json");

const Portfolio = () => {
  return (
    <main>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-body">
          <h1 className="mark" style={{ width: "fit-content" }}>
            {project.projects.name}
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            blanditiis voluptatem tempora, numquam magni laborum debitis, quae
            doloremque possimus temporibus ad sapiente nulla cupiditate
            perspiciatis. Atque modi voluptate mollitia ratione!{" "}
            <a href="/">Source Files</a> <a href="/">Live Site</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
