import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h1>
          <Link to = "/" id="headertext">
            Think Strange Inc.
          </Link>
        </h1>
      </header>
      <hr />
    </div>
  );
};

export default Header;
