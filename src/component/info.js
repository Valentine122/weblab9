import React from 'react'
import EconomyPicture from '../assets/hero.jpg'
import {
    SectionWrapper,
    SecondSectionWrapper,
  } from "./info.styled";

function Info() {
    return(
        <SectionWrapper>
        <a><img src={EconomyPicture} style={{width:'540px', border: "1px solid white", borderRadius: "4px", padding: "20px"}}/></a>
        <SecondSectionWrapper>
        <div style={{marginTop:"50px", marginLeft:"-60px", marginRight: "100px", color: "white", fontWeight:"900", fontSize:"50px"}}>COMBINES</div>
        <hr style={{marginLeft:"-30px", border: "2px dashed #FFFFFF", marginRight: "100px"}}></hr>
        <div style={{marginTop:"30px", marginLeft:"-40px", marginRight: "140px", color: "white", fontStyle: "italic",fontWeight:"500", fontSize:"20px", fontFamily: 'Open Sans'}}>Combine, complex farm machine that both cuts and threshes grain. An early primitive combine was a horse-drawn “combination harvester–thresher” introduced in Michigan in 1836 and later used in California. Combines were not generally adopted until the 1930s, when tractor-drawn models became available. Self-propelled machines, capable of cutting swaths 8 to 18 feet (2.5 to 5.5 metres) wide, appeared a decade later. Originally designed to harvest wheat, they came to be used to harvest many other crops.</div>
        </SecondSectionWrapper>
        </SectionWrapper>
    );
}
export default Info;