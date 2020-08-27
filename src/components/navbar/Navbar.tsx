import React, { useState } from "react";
import { Burger } from "./Burger";
import { Menu } from "./Menu";

export function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </>
  );
}
