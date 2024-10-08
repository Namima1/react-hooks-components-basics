import React from "react";

function Article() { //we declare the function article, the return value is JSX, this is reacts way of saying we want to put component in the DOM
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  );
}
function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}



export default Article;
