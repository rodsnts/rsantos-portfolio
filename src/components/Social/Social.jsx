import React from "react";

const db = require("../../db.json");

const Social = () => {
  return (
    <aside className="social">
      <ul className="social-links">
        <li>
          <a href={db.social.linkedIn}>LinkedIn</a>
        </li>
        <li>
          <a href={db.social.GitHub}>GitHub</a>
        </li>
        <li>
          <a href={db.social.Twitter}>Twitter</a>
        </li>
      </ul>
    </aside>
  );
};

export default Social;
