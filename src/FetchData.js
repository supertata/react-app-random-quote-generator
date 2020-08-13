import React, { useState, useEffect } from "react";
const FetchData = () => {
  const [quote, setQuote] = useState({});
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  };
  useEffect(() => {
    fetch("https://laetitia-quote-server.glitch.me/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      });
  }, [click]);
  return (
    <div>
      <div>
        <h2>{quote.quote}</h2>
        <h4>{quote.author}</h4>
      </div>
      <button onClick={handleClick}>Get a new quote!</button>
    </div>
  );
};
export default FetchData;
