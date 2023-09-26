import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-block" 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="120" /> 
    <rect x="5" y="275" rx="5" ry="5" width="270" height="27" /> 
    <rect x="5" y="322" rx="5" ry="5" width="270" height="88" /> 
    <rect x="5" y="430" rx="5" ry="5" width="85" height="27" /> 
    <rect x="121" y="418" rx="30" ry="30" width="152" height="45" />
  </ContentLoader>
)

export default PizzaSkeleton;