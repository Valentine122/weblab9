
import React, { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";
import {
  Name, CombineName, StyledButton, Number, Rate, Price, Offer
} from "./ItemInfo.styled";
import {
  Link
} from "react-router-dom";
import { getOne } from "../api/Crud.js";
import Loader from "./Loader";
import example from '../assets/example.jpg';

function ItemInfo(props) {
    let { itemId } = useParams();
    
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      (async function () {
          setLoading(true);
          setItem(await getOne(itemId));
          setLoading(false);
      })()
  }, [itemId]);


    return (
      loading ? (
          <Loader />):(
        <div style={{display: "flex", minHeight: "580px"}}>
          <div><img src={example} style={{borderRadius: "23px", height: "40vh", margin: "90px", marginRight: "50px"}}/></div>
          <div style={{margin:"70px"}}> 
          <Name>{item.title}</Name>
          <CombineName>{item.combine_name}</CombineName>
          <Offer>{item.introOffer}</Offer>
          <Rate>rate: <Number>{item.rateInPercent} %</Number> </Rate>
          <Price>price: <Number>{item.price}</Number></Price>
          <div style={{display: "flex"}}>
          <Link to={'/info'}><StyledButton type="text" shape="round" style={{marginTop: "40px"}}>Back</StyledButton></Link>;
          <StyledButton id="button" type="text" shape="round">Add to cart</StyledButton>
          </div>
          
          </div>
        </div>
      ))
          }
export default ItemInfo;