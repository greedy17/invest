import React from 'react';
import {Jumbotron} from 'react-bootstrap';

const SearchBar = ({input,onChange}) => {

    return (
        <Jumbotron className="search-display">
        <div className="center">
        <h3 className="bold color-white">Search our list of investors</h3> 
            <input key="random1" value={input} placeholder={"search investors"} className="mr-sm-2" onChange={(e) => onChange(e.target.value)}/>
        </div> 
        </Jumbotron>
    );
  }
  
  export default SearchBar;
