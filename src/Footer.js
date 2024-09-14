/* eslint-disable */

import React from "react";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        &copy; {new Date().getFullYear()} Fares Yigeremu
      </p>
    </div>
  );
}

export default Footer;
