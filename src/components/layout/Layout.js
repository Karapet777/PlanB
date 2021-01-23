import React from "react";

import Footer from "../../containers/footer/Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
