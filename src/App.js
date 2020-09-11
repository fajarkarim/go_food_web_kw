import React from 'react';
import Header from "./components/Header/Header";
import ActionButton from "./components/ActionButton/ActionButton";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Restaurants from "./components/Restaurants/Restaurants";
import HeaderWrapper from "./components/Header/HeaderWrapper";

import './App.css';

import Logo from './assets/go-food.svg'

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderWrapper>
          <img src={Logo} alt={'Logo'}/>
          <div className={'flex align-items-center justify-space-around'} style={{width: '300px'}}>
            <span>Dapetin App di Gocek</span>
            <ActionButton label={"Download"}/>
          </div>
        </HeaderWrapper>
      </Header>
      <MainContent>
        <h2>Pesan langsung dari restoran di Jakarta</h2>
        <p className={'mb-1'}>Lihat-lihat makanan enak, pilih yang kamu suka, GoFood bakal antar ke kamu.</p>
        <Restaurants/>
      </MainContent>
      <Footer/>
    </div>
  );
}

export default App;
