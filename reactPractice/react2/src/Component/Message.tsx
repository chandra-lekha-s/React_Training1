import React from 'react';

function Message() {
  const name = "Chandralekha";
  if (name) return <p>Hii {name}</p>;
  return <p>Hii user</p>;
}

export default Message;
