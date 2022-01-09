import React from "react";
import MerchsImage from "../img/Merchs-image.png"

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={MerchsImage} alt="An image of Merchs" />
    </React.Fragment>
  );
}

export default Header;