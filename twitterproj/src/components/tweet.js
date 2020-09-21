import axios from 'axios';


const Tweet = { //object that will be exported
    getTweet(personName) { //method of the object
        let config = {
          headers: { //web headers sent to API for auth
            authorization: "Bearer AAAAAAAAAAAAAAAAAAAAACX5HgEAAAAAyPFmFuUj3kPPH90SaeMwQoa%2FmFs%3DoNmiJejgc7yrqro6sv3YOqJFTavTAo4Y109R7a5sZTR4qw7q4Y", //Bearer token
          }
        }

        let filteredTweets = [];

        //GET request made to API endpoint, bypassed CORS, and returned
        return axios.get(`https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${personName}&count=200`, config)
        .then(res => {
          const tweets = res.data;
          //filtered for @ and web symbols
          filteredTweets = tweets.filter(tweet => {
            if(tweet.text.includes("&amp") || tweet.text.includes("@") || tweet.text.includes("http")) { //the res.data.entities.urls and ...entities.user_mentions wasn't working for me so I did it manually
              return null;
            }
            else {
              return tweet.text;
            }

        })
        //returns the final object of tweets (it's 16 arrays for Elon at the current time)
        return filteredTweets;

    })

  }
}

//export the info so other classes can use this object
export default Tweet;
