import React, { useState } from "react";

function NextQuote({ quote }) {
  const [next, setNext] = useState([]);
  console.log(next);
  function handleClick(e) {
    setNext(quote);
  }
  return (
    <div>
      <button onClick={handleClick}>Next quote</button>
    </div>
  );
}

export default NextQuote;
