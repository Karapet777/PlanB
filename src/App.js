import React from "react";

import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Service from "./containers/Service/Service";
import BlockImges from "./containers/imgblock/Imgblock";
import YearsBlock from "./containers/YearsBlock/YearsBlock";
import CarouselBox from "./containers/carousel/Carousel";
import Rooms from "./containers/roomsSection/RoomSection";
import ImgSection from "./containers/imgSection/ImgSection";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Service />
        <BlockImges />
        <YearsBlock />
        <CarouselBox />
        <Rooms />
        <ImgSection />
      </Layout>
    </div>
  );
}

export default App;
