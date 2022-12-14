import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <div className='app-wrapper-content'>
            <Route exact path='/Architects/' component={Home} />
            <Route exact path='/Architects/people' component={People} />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

