import React from 'react';
import LandingNavBar from './Components/nav/landingPage';
import LandingPage from "./Components/pages/landing Page/landingPage";



function LearnableApp() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingNavBar />
        <LandingPage />
      </header>
    </div>
  );
}

export default LearnableApp;
