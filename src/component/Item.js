import React from "react";



function Item ({ title='No title.', text, imageSrc, clientNumber, combinesGivenOut }) { 
  return(
  <div>
  <div>{title}</div>
  <div>{text}</div>
  <div>{imageSrc}</div>
  <div>{clientNumber}</div>
  <div>{combinesGivenOut}</div>
  </div>
  )
};

export default Item;

