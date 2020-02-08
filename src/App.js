import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
            <Home/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
