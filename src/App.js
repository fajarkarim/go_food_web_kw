import React from 'react';
import Header from "./components/Header/Header";
import ActionButton from "./components/ActionButton/ActionButton";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <Header>
        <ActionButton/>
      </Header>
      <MainContent>
        <div>iini contentnya</div>
      </MainContent>
      <Footer/>
    </div>
  );
}

export default App;
