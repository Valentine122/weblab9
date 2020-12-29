import React from "react";
import { Card } from "antd";
import { Footer, ExtraInfo} from "./CombineCardItem.styled";
import ViewMoreButton from "./ViewMoreButton";
import example from '../assets/example.jpg';


const { Meta } = Card;

function CombineCardItem(props) {
  return(
  <Card 
    id={props.id}
    hoverable
    style={{ width: 500, maxWidth: "360px", height: 530, marginRight: "100px", borderRadius: "20px" }}
    cover={
      <img style={{ borderRadius: "20px", height: 220  }}  src={example} />}
>
    <Meta title={props.title} description={props.introOffer} style={{height: "80px"}}/>
    <Footer>
    <ExtraInfo>
    <br/>
    <div>Combine: <b>{props.combine_name}</b></div>
    <div>id: <b>{props.id}</b></div>
    <div>Price: <b>{props.price}</b></div>
    <div>Rate: <b>{props.rateInPercent}%</b></div>
    
    <br/>

    </ExtraInfo>
    <ViewMoreButton id={props.id}/>
    </Footer>
  </Card>
  );
  }

export default CombineCardItem;