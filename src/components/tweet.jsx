import React from "react";


function Tweet() {
  return (

    <div className="tweet">
      {/* <img src="src alt="tweet profil" /> */}
      <div className="tweet-avatar">
        <img src="src/images/tweet-profile-photo.png" alt="profil photo" /></div>
      <div className="tweet-content">
        <div className="tweet-body">
          <h1 className="tweet-title">CNN @CNN .7m </h1>

          <p className="tweet-text">
            President Joe Biden touted a new agreement reached with the European
            Union to ease Trump-era tariffs on aluminum and steel as a "major
            breaktrought" that would serve to both strengthen the US steel industry
            and combat the global climate crisis.
          </p>
        </div>
       
        
      </div>
    </div>

  );
}

export default Tweet;