import React, { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import Burger from "./Burger";
import Menu from "./Menu";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node.current, () => setOpen(false));

  return (
    <div ref={node}>
      <FocusLock disabled={!open}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </FocusLock>
    </div>
  );
};

export default Navbar;
