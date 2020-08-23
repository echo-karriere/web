import React, { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </>
  );
};

export default Navbar;
