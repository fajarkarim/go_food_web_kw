import React from 'react';
import Header from "./components/Header/Header";
import ActionButton from "./components/ActionButton/ActionButton";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Restaurants from "./components/Restaurants/Restaurants";
import './App.css';
import HeaderWrapper from "./components/Header/HeaderWrapper";

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderWrapper>
          <img src={'./asset/go-food.svg'} alt={'Logo'}/>
          <div className={'flex align-items-center justify-space-around'} style={{width: '300px'}}>
            <span>Dapetin App di Gocek</span>
            <ActionButton label={"Download"}/>
          </div>
        </HeaderWrapper>
      </Header>
      <MainContent>
        <Restaurants/>
      </MainContent>
      <Footer/>
    </div>
  );
}

export default App;
