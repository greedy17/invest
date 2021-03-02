import React, {useState,useEffect} from 'react';
import SearchBar from './SearchBar/searchBar';
import InvestorList from './InvestorList/investorList';
import './investors.css'
import axios from 'axios';

const Investors = props => {
    const [input,setInput] = useState('');
    const [investorList, setInvestorList] = useState([])
    const [investorListDefault, setInvestorListDefault] = useState();
    const usersApi = "http://localhost:5000/api/user/users/";

    const getInvestors = async () => {
        axios.get(usersApi)
        .then(res => {
            setInvestorList(res.data);
            setInvestorListDefault(res.data);
        });
    }
    
        const updateInput = async (input) => {
            const filtered = investorListDefault.filter(product => {
             return product.name.toLowerCase().includes(input.toLowerCase())
            })
            setInput(input);
            setInvestorList(filtered);
         }
    
        useEffect( ()=> {getInvestors()},[])

    return(
        <div>
          <SearchBar input={input} onChange={updateInput}/>
          <div className="scroll-box">
            <InvestorList investorList={investorList}/>
          </div>
        </div>
    )
}

export default Investors;