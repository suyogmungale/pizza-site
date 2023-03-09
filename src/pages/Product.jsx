import React, { useState, useEffect, useContext } from 'react';
import Productt from '../components/productt.jsx';
import  CartContext  from './CartContext.js';


const Product = () => {
  const [products, setProducts] = useState([]);
  
 // const {name} = useContext(CartContext);

  useEffect(() => {
    fetch('/api/products')
    .then(response =>response.json())  
    .then(products => {
     console.log(products)
      setProducts(products)
      
    })
  }, []);

  return (
   
   <div className='container mx-auto pb-24'>
      <h1 className='text-lg font-bold py-8'>Products</h1>
      <div className='grid grid-cols-5 my-8 gap-24'>
        {
          products.map(product => <Productt key={product._id} product={product} />)

        }
      </div>
    </div>
  );
}

export default Product;
