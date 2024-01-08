import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const CategoryProduct = () => {
    const [products,setProducts]=useState([])
    const {category}=useParams()
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER}/getProductByCategory/${category}`)
        .then(res=>setProducts(res.data))
    },[category])
    console.log(products)
    return (
        <div>
            
        </div>
    );
};

export default CategoryProduct;