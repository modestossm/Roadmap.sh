import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
        <p>Copyright © {currentYear} </p>
    </div>
  );
}

export default Footer;