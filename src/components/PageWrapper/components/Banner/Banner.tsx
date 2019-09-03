import React from "react";
import { Img, Info, BannerStyle } from "./style";
import logo from "../../../../assets/logo-white.png";

const Banner = () => (
  <BannerStyle>
    <Img src={logo} />
    <Info>24. september kl. 13:00 | Høyteknologisenteret</Info>
  </BannerStyle>
);

export default Banner;
