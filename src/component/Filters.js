import React from "react";
import {Input, InputButton, Select, Option, Button} from "./Filters.styled";

function Filters(props) { 
    function cancelSearch() {
        window.location.reload();
    } 

    function doFilterByRate(e) {
        e.preventDefault();          
        let rateInPercent = document.getElementById('rateInPercent').value;
        props.byRate(rateInPercent);
    }

    function doFilterByPrice(e) {
        e.preventDefault();
        let price = document.getElementById('price').value;
        props.byPrice(price);
    }

    function doFilterByCombineName(e) {
        e.preventDefault();
        let combine_name = document.getElementById('combine_name').value;
        props.byCombineName(combine_name);
    }

    
    return (
        <div style={{display: "flex", flexDirection: "row", marginLeft:"500px", marginTop:"-107px", paddingBottom:"15px",}}>
            <form  onSubmit={doFilterByRate}>
                <Input id="rateInPercent" type="number" placeholder="Higher than by rates" min="1" max="100000" step="1"/>
                <InputButton type="submit" id="search-button" value="Filter" />
            </form>
            <form  onSubmit={doFilterByPrice}>
                <Input id="price" type="number" placeholder="Lower than by price" min="10" max="1000" step="5"/>
                <InputButton type="submit" id="search-button" value="Filter" />
            </form>
            <form  onSubmit={doFilterByCombineName}>
                <Select id="combine_name" placeholder="Choose combine..." required>
                    <Option value="Select a combine" disabled selected>Select a combine...</Option>
                    <Option value="Top Combine">Top Combine </Option>
                    <Option value="City">City</Option>
                    <Option value="American Express">American Express</Option>
                    <Option value="Discover it">Discover it</Option>
                </Select>
                <InputButton type="submit" id="search-button" value="Filter" />
            </form>
            <Button onClick={cancelSearch}>Cancel</Button> 
        </div>
    );

}

export default Filters;