import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox'; //Flexbox
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import { TwitterMentionButton } from 'react-twitter-embed'; //Widget for Twitter mentions
//import "typeface-montserrat";
import Tweet from './tweet'; //import Tweet object

export default class SelectionList extends Component implements Tweet{

  //give the class a constructor to establish an object for the class and set values for it
  constructor(props) {
    super(props);
    //declare state values so they can be rendered and changed
    this.state = {
      elonTweets: "",
      kanyeTweets: "",
      display: "",
    };

  }

  handleElon = () => {
      console.log('Elon');
      this.handleCalc();
    }

  handleKanye = () => {
      console.log('Kanye');
      this.handleCalc();
    }

  async handleRefresh() {
    let elonResult = await Tweet.getTweet("elonmusk"); //request all filtered tweets from Tweet object
    let kanyeResult = await Tweet.getTweet("kanyewest");
    this.setState({elonTweets: elonResult});
    this.setState({kanyeTweets: kanyeResult});
    this.handleCalc();
  }

  async handleCalc(){
    let elonResult = this.state.elonTweets;
    let kanyeResult = this.state.kanyeTweets;
    var randomDigit = Math.floor(Math.random() * 2);
    var res;
    //console.log(randomDigit);
    if(randomDigit == 0) {
      var randomElonDigit = Math.floor(Math.random() * elonResult.length);
      res = elonResult[randomElonDigit].text;
    }
    else if(randomDigit == 1) {
      var randomKanyeDigit = Math.floor(Math.random() * kanyeResult.length);
      res = kanyeResult[randomKanyeDigit].text;
    }
    this.setState({display: res});
  }


  async componentWillMount() {
    this.handleRefresh();
  }


/*
<blockquote className="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
*/

  render() {

    return (

      <div>
        <Row horizontal = "center">
          <h1 className="mb-4"style={{ marginTop: -20}}>Who Tweeted This?</h1>
        </Row>

        <Row horizontal="center">

        <p style={{ marginTop: 235, marginBottom: 235}}>{this.state.display}</p>

        </Row>

        <Row horizontal = "space-evenly">

        <img src="https://i2.wp.com/www.celebrity-cutouts.com/wp-content/uploads/2020/01/elon-musk-smile-celebrity-mask.png?resize=450%2C500&ssl=1" className="img-fluid" alt="Responsive"  width="80px"></img>
          <button onClick={this.handleElon} type="button" className="btn btn-outline-primary btn-lg col-md-4 mr-2 mt-4 mb-3">Elon</button>
          <button onClick={this.handleKanye} type="button" className="btn btn-outline-primary btn-lg col-md-4 ml-2 mt-4 mr-2 mb-3">Kanye</button>
          <img src="https://cdn11.bigcommerce.com/s-balh3740/images/stencil/1280x1280/products/26297/46281/KanyeWest__85697.1538500006.jpg?c=2" className="img-fluid" alt="Responsive"  width="65px"></img>

        </Row>
        <Row horizontal = "space-evenly">
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
