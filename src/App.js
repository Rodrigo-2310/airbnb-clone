import React from 'react';
import './App.css';
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (

    //BEM
    <div className="app">
      <Router>
        <Header/>

        {/* Render depending of the path we are in the website  */}
        <Switch>
          
          <Route path="/search">
            <SearchPage/>
          </Route>
          
          {/* Always have the default page in the last spot: 1.SearchPage - 2.Home */}
          <Route path="">
            <Home/>
          </Route>
          
        </Switch>

        <Footer/>
      </Router>

    </div>
  );
}

export default App;
