import React from "react";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
