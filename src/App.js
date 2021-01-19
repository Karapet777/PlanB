import React from "react";

import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Service from "./containers/Service/Service";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Service />
      </Layout>
    </div>
  );
}

export default App;
