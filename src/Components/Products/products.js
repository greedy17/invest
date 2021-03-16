import React, {useState,useEffect} from 'react';
import ProductList from './ProductList/productList';
import './products.css';
import axios from 'axios';
import SearchBar from './SearchBar/searchBar';

const Products = props => {
    const [input,setInput] = useState('');
    const [productList, setProductList] = useState([])
    const [productListDefault, setProductListDefault] = useState();
    const productsApi = "http://localhost:5000/api/user/products/";

    const getProducts = async () => {
    axios.get(productsApi)
    .then(res => {
        setProductList(res.data);
        setProductListDefault(res.data);
    });
}

    const updateInput = async (input) => {
        const filtered = productListDefault.filter(product => {
         return product.name.toLowerCase().includes(input.toLowerCase()) ||
         product.category.toLowerCase().includes(input.toLowerCase()) ||
         product.description.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setProductList(filtered);
     }

    useEffect( ()=> {getProducts()},[]) 

    return(
        <div className="product-background">
          <SearchBar input={input} onChange={updateInput}/>
          <div className="scroll-box">
            <ProductList productList={productList}/>
          </div>
        </div>
    )
}

export default Products;