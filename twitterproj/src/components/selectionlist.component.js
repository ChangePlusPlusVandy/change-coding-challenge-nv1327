import React, { Component } from 'react';
import { Row } from 'simple-flexbox'; //Flexbox
import { TwitterMentionButton } from 'react-twitter-embed'; //Widget for Twitter mentions
import Tweet from './tweet'; //import Tweet object

export default class SelectionList extends Component implements Tweet {
  //give the class a constructor to establish an object for the class and set values for it
  constructor(props) {
    super(props);
    //declare state values so they can be rendered and changed
    this.state = {
      elonTweets: "", //set Elon tweet object to state value
      kanyeTweets: "", //set Kanye tweet object to state value
      display: "", //text that is displayed and can be changed with setState
      score: 0, //user score
      currentTweet: ""
    };
  }

  handleElon = () => { //function called when Elon's button is pressed
    if(this.state.currentTweet === "Elon") {
      this.setState({score: this.state.score+1});
      this.setState({display: "Correct!    +1"});
    }
    else if (this.state.currentTweet === "Kanye") {
      this.setState({score: this.state.score-1});
      this.setState({display: "Incorrect!    -1"});
    }
    setTimeout(function(){ //timing of feedback to user
        this.handleCalc();
    }.bind(this),1500);

  }

  handleKanye = () => { //function called when Kanye's button is pressed
    if(this.state.currentTweet === "Kanye") {
      this.setState({score: this.state.score+1});
      this.setState({display: "Correct!    +1"});
    }
    else if (this.state.currentTweet === "Elon") {
      this.setState({score: this.state.score-1});
      this.setState({display: "Incorrect!    -1"});
    }
    setTimeout(function(){ //timing of feedback to user
        this.handleCalc();
    }.bind(this),1500);
  }

  handleReset = () => { //function called when reset button is pressed
    this.setState({score: 0});
  }

//function initially pulls data from Tweet and Twitter API and is not called again for performance reasons
  async handleRefresh() {
    let elonResult = await Tweet.getTweet("elonmusk"); //request all filtered tweets from Tweet object using "elonmusk" as username parameter
    let kanyeResult = await Tweet.getTweet("kanyewest"); //request all filtered tweets from Tweet object using "kanyewest" as username parameter
    this.setState({elonTweets: elonResult}); //set the object equal to a state value so it can be used globally
    this.setState({kanyeTweets: kanyeResult}); //set the object equal to a state value so it can be used globally
    this.handleCalc(); //execute processing function below
  }

//waits for handleRefresh() to set state, then takes those global state values and processes them, then renders them
async handleCalc() {
  var elonResult = this.state.elonTweets;
  var kanyeResult = this.state.kanyeTweets;
  var randomDigit = Math.floor(Math.random() * 2);
  var res;
  //console.log(randomDigit);
  if(randomDigit === 1) {
    var randomElonDigit = Math.floor(Math.random() * elonResult.length);
    res = elonResult[randomElonDigit].text;
    this.setState({currentTweet: "Elon"});
  }
  else if (randomDigit === 0){
    var randomKanyeDigit = Math.floor(Math.random() * kanyeResult.length);
    res = kanyeResult[randomKanyeDigit].text;
    this.setState({currentTweet: "Kanye"});
  }
  this.setState({display: res}); //call the function to filter and render a new Tweet initially
}

//render and refresh before component is loaded
  async componentDidMount() {
    this.handleRefresh();
  }

//where JSX is rendered (can only take state values as the changing ones)
  render() {
    return (
      <div>
        <Row horizontal = "end">
            <h1 className="mb-4"style={{ fontSize: 25, fontWeight: "normal", marginTop: -95, marginRight: 55}}>Score: {this.state.score}</h1>
        </Row>


        <Row horizontal = "center">
            <h1 className="mb-4"style={{ marginTop: -20}}>Who Tweeted This?</h1>
        </Row>


        <Row horizontal="center">
          <p style={{ fontSize: 20, marginTop: 235, marginBottom: 235}}>{this.state.display}</p>
        </Row>

        <Row horizontal = "space-evenly">
          <img src="https://i2.wp.com/www.celebrity-cutouts.com/wp-content/uploads/2020/01/elon-musk-smile-celebrity-mask.png?resize=450%2C500&ssl=1" className="img-fluid" alt="Responsive"  width="80px"></img>
            <button onClick={this.handleElon} type="button" className="btn btn-outline-primary btn-lg col-md-4 mr-2 mt-4 mb-3">Elon</button>
            <button onClick={this.handleReset} type="button" style={{marginTop: 23, height: "55px"}} className="btn btn-outline-danger btn-lg">Reset</button>
            <button onClick={this.handleKanye} type="button" className="btn btn-outline-primary btn-lg col-md-4 ml-2 mt-4 mr-2 mb-3">Kanye</button>
            <img src="https://cdn11.bigcommerce.com/s-balh3740/images/stencil/1280x1280/products/26297/46281/KanyeWest__85697.1538500006.jpg?c=2" className="img-fluid" alt="Responsive"  width="65px"></img>
        </Row>

        <Row horizontal = "space-around">
          <TwitterMentionButton
            screenName={'elonmusk'}
          />
          <TwitterMentionButton
            screenName={'kanyewest'}
          />
        </Row>
      </div>
    );
  }
}
