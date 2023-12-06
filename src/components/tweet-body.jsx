import React from "react";


function TweetBody() {
  return (

    <div className="tweet-body">
      {/* <img src="src alt="tweet profil" /> */}
      <div className="tweet-avatar">
        <img src="Profile-Photo (1).png" alt="profil photo" /></div>
      <div className="tweet-content">
        <div className="tweet-body">
          <h1 className="tweet-title">The New York Time </h1>

          <p className="tweet-text">
  Gardening boomed during the pandemic. Six black writers share how has helped them re-establish,and reimagine,a connection to cultivationand the land
          </p>
        </div>
        <div className="tweet-actions">
        <img src="src/images/tweet-image.png" /> </div>
        <img src="Frame 8.png" /> 
      </div>
    </div>

  );
}

export default TweetBody;