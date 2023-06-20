import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
