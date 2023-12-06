import React from "react";
import Avatar from "./avatar";
import TweetEditorForm from "./tweet-editor-form";
import ProfileImage from "../images/profile-photo.png";
function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Avatar source={ProfileImage} />
      <TweetEditorForm />
    </div>
  );
}
export default TweetEditor;