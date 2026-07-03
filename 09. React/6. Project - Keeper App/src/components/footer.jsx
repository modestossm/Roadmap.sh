import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
        <p>copyright © {currentYear} </p>
    </div>
  );
}

export default Footer;