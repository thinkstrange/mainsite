import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h1>
          <Link to = "/" id="headertext" style={{color: "blue"}}>
            Think Strange Inc.
          </Link>
        </h1>
      </header>
      <hr />
    </div>
  );
};

export default Header;
