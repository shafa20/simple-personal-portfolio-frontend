// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get('http://localhost/wordpress/wp-json/wp/v2/product')
      .then(response => {
        setData(response.data);
       // console.log("pl",response.data);
        response.data.forEach(product => {
         // console.log("Product Title:", product.title.rendered);
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return <p></p>
}
export default ProductList;
