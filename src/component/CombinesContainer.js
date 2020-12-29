import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Filters from "./Filters"
import Loader from "./Loader"

import {
  CardWrapper,
} from "./CombinesContainer.styled";
import ItemInfo from "./ItemInfo";
import CombineCardItem from "./CombineCardItem";
import Search from "./Search"
import { getAllByFilters } from "../api/Crud.js";


const CombinesContainer = () => {

  const [items, setItems] = useState([]);
  const [combineNameFilter, setCombineNameFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState();
  const [rateInPercentFilter, setRateInPercentFilter] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    (async function () {
      setItems(await getAllByFilters(combineNameFilter, priceFilter, rateInPercentFilter));
      setLoading(false);
    })()}, [combineNameFilter, priceFilter, rateInPercentFilter]);
  

  
    function filterByCombineName(combine_name) {
      if (combine_name !== '') {
        setLoading(false);
        setCombineNameFilter(combine_name);
        setLoading(true);
      }
    }
  
    function filterByPrice(price) {
      if (price > 0) {
        setLoading(false);
        setPriceFilter(price);
        setLoading(true);
      }
    }
  
    function filterByRate(rateInPercent) {
      if (rateInPercent > 0) {
        setLoading(false);
        setRateInPercentFilter(rateInPercent);
        setLoading(true);
      }
    }

  let match = useRouteMatch();
  return (
    <div>
      
      <Switch >
        <Route path={`${match.path}/:itemId`}>
          <ItemInfo items={items} />
        </Route>
        <Route path={match.path}>
        <div style={{ backgroundColor: "white",  paddingLeft: "100px"}}>
        <Search byCombineName={filterByCombineName} />
        <Filters byRate={filterByRate} byPrice={filterByPrice} byCombineName={filterByCombineName}/> 
        </div>
          <CardWrapper>
            {
               loading ? (
                <Loader />
               ):(
                
                items.map(item => (
                  <CombineCardItem
                    id={item.id}
                    title={item.title}
                    combine_name={item.combine_name}
                    image={item.image}
                    price={item.price}
                    introOffer={item.introOffer}
                    rateInPercent={item.rateInPercent}
                  />

              )))
          }
           </CardWrapper>
        </Route>

      </Switch>
    </div>
  );
};

export default CombinesContainer;