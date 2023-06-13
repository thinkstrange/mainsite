import React from "react";

const Footer = () => {
  return (
    <div id="sticker">
      <hr />

      <footer>
        <div>
          <a href="policies.html">
            <p>Policies</p>
          </a>
          <a href="Socials.html">
            <p>Socials</p>
          </a>
          <a href="contact.html">
            <p>Contact</p>
          </a>
          <p id="theme" className="light">
            Theme
          </p>
        </div>

        <p>Copyright © 2015 – 2023 Think Strange Inc.</p>
      </footer>
    </div>
  );
};

export default Footer;
