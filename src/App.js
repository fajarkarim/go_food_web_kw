import React from 'react';
import Header from "./components/Header/Header";
import ActionButton from "./components/ActionButton/ActionButton";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Restaurants from "./components/Restaurants/Restaurants";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <ActionButton/>
      </Header>
      <MainContent>
        <Restaurants/>
      </MainContent>
      <Footer/>
    </div>
  );
}

export default App;
