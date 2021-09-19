import React, { Component } from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";

class NavBar extends Component {
  render() {
    return (
      <ReactNavbar className="navBarObject"
        logo="https://svgshare.com/i/KHh.svg"
        menu={[          
          { name: "INICIO", to: "/"},
          { name: "NOSOTROS", to: "/articles"},
          { name: "INGRESAR", to: "/about"},
          { name: "INFORMACIÓN GENERAL", to: "/info"},
          { name: "REGISTRO", to: "/contact"},
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://twitter.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
  }
}

export default NavBar;