import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import SelectionList from './components/selectionlist.component';
import ScoreList from './components/scorelist.component';


//For Postman OAuth1.0 was used --> add authorization data: "Request Headers" and "Encode the parameters in the Authorization Header" was checked
//For GET requests, leave body blank
//Tested with: "https://api.twitter.com/2/users/by?usernames=elonmusk,kanyewest"

//For .env - https://create-react-app.dev/docs/adding-custom-environment-variables/

//      <Route path="/score" component={ScoreList} />

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={SelectionList} />

    </Router>
  );
}

export default App;
