import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Puzzle from './pages/Puzzle'
import PageNotFound from './pages/PageNotFound'

import Navbar from './components/layouts/Navbar'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="container">
        <Switch>
          <Route exact path ='/'    component = {Home} />
          <Route path='/puzzle/:id'  component = {Puzzle} />
          <Route component = {PageNotFound} /> 
        </Switch>
        </div>
      </main>

      <footer>

      </footer>
    </BrowserRouter>
  );
}

export default App;
