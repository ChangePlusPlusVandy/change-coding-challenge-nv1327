import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import SelectionList from './components/selectionlist.component';
import ScoreList from './components/scorelist.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={SelectionList} />
      <Route path="/score" component={ScoreList} />
    </Router>
  );
}

export default App;
