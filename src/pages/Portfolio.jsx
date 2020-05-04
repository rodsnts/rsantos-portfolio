import React, { Component } from "react";

import "./Portfilio.scss";

const project = require("../projects.json");

// const projectArray = [project];

// const Portfolio = () => {
//   return (
//     <main>
//       <div className="card">
//         <div className="card-image"></div>
//         <div className="card-body">
//           <h1 className="mark" style={{ width: "fit-content" }}>
//             {project.projects.name}
//           </h1>
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
//             blanditiis voluptatem tempora, numquam magni laborum debitis, quae
//             doloremque possimus temporibus ad sapiente nulla cupiditate
//             perspiciatis. Atque modi voluptate mollitia ratione!{" "}
//             <a href="/">Source Files</a> <a href="/">Live Site</a>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// };

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      posts: project,
    };
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <main>
            <div key={post.id} className="card">
              <div className="card-image"></div>
              <div className="card-body">
                <h1 className="mark" style={{ width: "fit-content" }}>
                  <a
                    href={post.url}
                    style={{ textDecoration: "none", color: "inherit" }}
                    target="__blank"
                  >
                    {post.name}
                  </a>
                </h1>
                <p>{post.info}</p>
              </div>

              <div className="card-bottom">
                {" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "35px",
                  }}
                >
                  <a href={post.sourceURL} target="__blank" className="hover">
                    Source Files
                  </a>{" "}
                  <a href={post.url} target="__blank" className="hover">
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </main>
        ))}
      </div>
    );
  }
}

export default Portfolio;
