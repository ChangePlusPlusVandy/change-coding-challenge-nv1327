import axios from 'axios';


const Tweet = {
    getTweet(personName) {
      let config = {
        headers: {
          authorization: "Bearer AAAAAAAAAAAAAAAAAAAAACX5HgEAAAAAyPFmFuUj3kPPH90SaeMwQoa%2FmFs%3DoNmiJejgc7yrqro6sv3YOqJFTavTAo4Y109R7a5sZTR4qw7q4Y", //Bearer token
        }
      }

      let filteredTweets = [];

      return axios.get(`https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${personName}&count=200`, config)
      .then(res => {
        const tweets = res.data;
        filteredTweets = tweets.filter(tweet => {
          if(tweet.text.includes("@") || tweet.text.includes("http")) { //the res.data.entities.urls and ...entities.user_mentions wasn't working for me so I did it manually
            return null;
          }
          else {
            return tweet.text;
          }

      })
      //console.log(filteredTweets);
      return filteredTweets;

  })

}
}

export default Tweet;
