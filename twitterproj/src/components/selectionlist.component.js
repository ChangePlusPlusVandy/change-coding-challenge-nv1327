


//try to make it mobile friendly!
//i already installed react-responsive so try that
//https://www.npmjs.com/package/react-responsive
//if on a mobile device, just change the inner row to a column in render()
//try that using react-responsive


import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import "typeface-montserrat";
import axios from 'axios';
import update from 'immutability-helper';
//https://github.com/kolodny/immutability-helper
//https://stackoverflow.com/questions/29537299/react-how-to-update-state-item1-in-state-using-setstate

//For pulling photos, just visit instagram.com/username/?__a=1
//so like https://www.instagram.com/isabellapaone/?__a=1
//then look for the link to the profile photo

var eloratio = 30;

export default class SelectionList extends Component {

  state = {

}


  componentDidMount() {
    axios.get("http://157.245.128.87:7000/")
      .then(res => {

      })


  }



  render() {

    var imageStyle = {
            marginTop: 60,
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 15,
            border: '2px solid gray',
        };

    var bottomTextStyle = {
            margin: 60
        };

/*  <Row horizontal = "center">
    <p style={bottomTextStyle}>Disclaimer: Created with fully free, public information. Information pulled from Twitter.</p>
  </Row>*/

//if on a mobile device, just change the inner row to a column
//try that using react-responsive
    return (

      <div>
        <Row horizontal = "center">
          <h1 class="mb-4"style={{ fontFamily: "montserrat", marginTop: 10}}>Who Tweeted This?</h1>
        </Row>

        <Row horizontal="center">
        <TwitterTweetEmbed

        />
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </Row>



        <Row horizontal = "space-evenly">

        <img src="https://i2.wp.com/www.celebrity-cutouts.com/wp-content/uploads/2020/01/elon-musk-smile-celebrity-mask.png?resize=450%2C500&ssl=1" class="img-fluid" alt="Responsive image"  width="80px"></img>
          <button type="button" class="btn btn-outline-primary btn-lg col-md-4 mr-2 mt-4 mb-3">Elon</button>
          <button type="button" class="btn btn-outline-primary btn-lg col-md-4 ml-2 mt-4 mr-2 mb-3">Kanye</button>
          <img src="https://cdn11.bigcommerce.com/s-balh3740/images/stencil/1280x1280/products/26297/46281/KanyeWest__85697.1538500006.jpg?c=2" class="img-fluid" alt="Responsive image"  width="65px"></img>

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
