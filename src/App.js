import './App.css';
import NavBar_ from './nav_component/NavBar_';
import Main from './main_component/Main';
import Footer_ from './footer_component/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      {/* navbar */}
      <NavBar_/>
      {/* main */}
      <Main/>
      {/* footer */}
      <Footer_/>
    </React.Fragment>
  );
}

export default App;
