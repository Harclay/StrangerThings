import React from "react";

function ViewMessages( {viewAllMessages} ) {
  return (
    <div>
      {viewAllMessages.map(message => (
        <div key={message._id}>
          <p>{`${message.content}: From: ${message.fromUser.username}`}</p>
          {/* <p>From: {message.fromUser.username}</p> */}
          {/* <p>To: {message.post.author.username}</p> */}
        </div>
      ))}
    </div>
  );
}

export default ViewMessages