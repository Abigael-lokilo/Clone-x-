
import React from 'react';
import Header from './../components/hearder';
import TweetEditor from './../components/tweet-editor';
import Tweet from './../components/tweet';
import TweetBody from './../components/tweet-body';
import TweeterTitleAuthor from './../components/tweeter-title-author';
import TweetTitleDetails from './../components/tweet-title-details';
import TweetImg from './../components/tweet-img';

function Home() {
  return (
    <main className="timeline">

      <Header />
      <TweetEditor />
      <Tweet />
      <TweetBody />
      <TweeterTitleAuthor />
      <TweetTitleDetails />
      <TweetImg />
    </main>
  );
}

export default Home;