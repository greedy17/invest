import React from 'react';
import {Jumbotron} from 'react-bootstrap';

const SearchBar = ({input,onChange}) => {

    return (
        <Jumbotron className="search-display">
        <div className="center">
        <h4 className="bold color-white">Search products by name, category, or description.</h4> 
            <input key="random1" value={input} placeholder={"search products"} className="mr-sm-2" onChange={(e) => onChange(e.target.value)}/>
        </div> 
        </Jumbotron>
    );
  }
  
  export default SearchBar;
