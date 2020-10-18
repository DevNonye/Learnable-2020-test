import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import FaqPage from './Faq';
import SoftwareDevelopersPage from './learnable-software-developer';
import ProductDesignPage from './learnable-product-designer';
import ApplyPage from './Apply your knowledge';
import JournalPage from './Journal';
import LearnableHomePage from './learnableHomePage';
import Footer from './footer';
import './Subscribe'
import './Pages.css';
import './media.css';
import '/footer.css'


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
            <Navigation/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                    <LandingPage/>
              </React.Fragment>
            )}/>
            <Route path="/LearnableHomePage" component={LearnableHomePage}/>
            <Route path="/SoftwareDevelopersPage" component={SoftwareDevelopersPage}/>
            <Route path="/ProductDesignPage" component={ProductDesignPage}/>
            <Route path="/ApplyPage" component={ApplyPage}/>
            <Route path="/JournalPage" component={JournalPage}/>
            <Route path="/FaqPage" component={FaqPage}/>
            <Footer/>
        </Router>
      </>
        
      
        
    )
  }
}

export default App;
