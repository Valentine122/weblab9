import React, {useState} from "react";
import Comb1 from '../assets/Comb1.jpg';
import Comb2 from '../assets/Comb2.jpg';
import Comb3 from '../assets/Comb3.jpg';
import Comb4 from '../assets/Comb4.jpg';
import Comb5 from '../assets/Comb5.webp';
import Comb6 from '../assets/Comb6.jpg';

import '../App.css';
import {
  StyledButton,
  CardWrapper,
} from "./ItemsContainer.styled";
import CardItem from "./CardItem";

function remove() {
  var myobj = document.getElementById("button");
  myobj.remove();
}

const ItemsContainer = () => {
  
    
  const [items, setItems]= useState([
    {
      id: 1,
      title: "SPARE PARTS",
      text: "We will pick up your favorite spare parts ",
      image: Comb1,
      clientNumber: 715
    },
    {
      id: 2,
      title: "WHEELS",
      text:
        "Qualitative replacement of any typical wheels",
      image: Comb2,
      clientNumber: 540
    },
    {
      id: 3,
      title: "OUR PROFESSIONAL COMBINERS",
      text:
        "Our professional combine harvesters will tell you all about the combine",
      image: Comb3,
      clientNumber: 1610
    }
  ]);
  const addThreeMoreItems = () =>{
    let threeMoreObjects=[
      {
        id: 4,
        title: "MASTER CLASS",
        text: "Sign up for a master class from our professional combine harvesters",
        image: Comb4,
        clientNumber: 20000
      },
      {
        id: 5,
        title: "COMBINE REPAIR",
        text: "We qualitatively repair combines",
        image: Comb5,
        clientNumber: 540
      },
      {
        id: 6,
        title: "RENT COMBINE",
        text:"Rent our best combines",
        image: Comb6,
        clientNumber: 2000
      }
    ]
    let expandedBankList = items.concat(threeMoreObjects);
    setItems(expandedBankList);
    remove(this);
  }
  return (
    
    <div>
      <CardWrapper>
      {items.map(item => (
          <CardItem style={{paddingTop:"600px"}}
            title={item.title}
            text={item.text}
            imageSrc={item.image}
            clientNumber={item.clientNumber}
          />
        ))}
      </CardWrapper>
      <StyledButton id="button" type="text" shape="round" onClick={addThreeMoreItems}>View more</StyledButton>
      </div>
  );
};

export default ItemsContainer;