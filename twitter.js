var Twit = require('twit');

var T = new Twit({
  consumer_key:         'YOURCONSUMERKEY',
  consumer_secret:      'YOURCONSUMERSECRET',
  access_token:         'YOURACCESSTOKEN',
  access_token_secret:  'YOURACCESSTOKENSECRET'
});



// A user stream
var stream = T.stream('user');

// When someone follows the user
stream.on('follow', followed);
stream.on('tweet', tweetEvent);



// In this callback we can see the name and screen name
function followed(event) {
  var name = event.source.name;
  var screenName = event.source.screen_name;
  console.log('I was followed by: ' + name + ' ' + screenName);
}


function tweetEvent(tweet) {
  var reply_to = tweet.in_reply_to_screen_name;
  // Check to see if this was, in fact, a reply to you
  if (reply_to === 'yourusername') {
    // Get the username and content of the tweet
    var name = tweet.user.screen_name;
    var txt = tweet.text;
    // Tweet back a reply?
  }
}


T.get('search/tweets', { q: 'JavaScript', count: 10 }, gotData);
function gotData(err, data) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}


T.post('statuses/update', { status: 'I am tweeting via the API!' }, tweeted);