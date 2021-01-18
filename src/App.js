import React from "react";

import Layout from "./components/layout/Layout";
import Service from "./containers/Service/Service";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Service />
      </Layout>
    </div>
  );
}

export default App;
