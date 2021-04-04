import React from 'react';
import FooterContent from "./components/FooterContent";
import HeaderContent from "./components/HeaderContent";
import HeroContent from "./components/HeroContent";
import MainContent from "./components/MainContent";
import Wave from "./components/sub-components/Wave";
import "./styles/css/index.css";

const App = () => {
  return (
    <div id="App">
      <header>
        <HeaderContent />
      </header>
      <div className="spacer" />
      <main>
        <section className="hero-section">
          <HeroContent />
        </section>

        <section className="main-section">
        <Wave/>
          <MainContent />
        </section>

        <footer>
          <FooterContent />
        </footer>
        
      </main>
    </div>
  );
};

export default App;
