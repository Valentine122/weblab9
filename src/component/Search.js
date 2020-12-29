import React from 'react';
import {
    Input,
    InputButton
  } from "./Search.styled";

  

function Search(props) {


    function doSearch(e) {
        e.preventDefault();          
        let param = document.getElementById('combine-name').value;
        props.byCombineName(param);
      }

          return(
<div>       
        <form style={{paddingTop: "50px", marginBottom: "70px"}}onSubmit={doSearch}>
            <Input id="combine-name" type="text" placeholder="Search by combine name..." />
            <InputButton type="submit" id="search-button" value="Search" />
        </form>
        
    </div>
    );
}
export default Search;