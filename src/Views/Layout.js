import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "../Routes/Routers";
import { NavbarDefault } from "../Asset/Component/Navbar/NavbarDefault";
import { FooterDefault } from "../Asset/Component/Footer/FooterDefault";

export const Layout = () => {
  return (
    <div>
      <>
        <NavbarDefault />
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
        <FooterDefault />
      </>
    </div>
  );
};
