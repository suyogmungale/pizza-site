import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Product from '../pages/Product.jsx';
import CartContext  from '../pages/CartContext.js';

const Productt = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { product } = props; 

  const addToCart = (event) => {
    event.preventDefault();
    console.log('Add to cart button clicked');
    let _cart = {...cart};
  
    if(!_cart.items){
      _cart.items = {}
    }
  
    if(_cart.items[product._id]){
      _cart.items[product._id] = _cart.items[product._id] + 1; 
    } else {
      _cart.items[product._id] = 1;
    }
  
    if(!_cart.totalItems){
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true)

    setTimeout(() => {

      setIsAdding(false);

    }, 1000);
    
    // Store cart data in localStorage
    localStorage.setItem('cart', JSON.stringify(_cart));
  }
  
    

  
  return (
    <Link to={`/product/${product._id}`}>
    <div>
           <img className='shadow-2xl' src={product.image} alt='img'/>
           <div className='text-center'>
           <h2 className='text-lg font-bold py-2'>{product.name}</h2>
           <span className='bg-gray-400 py-1 rounded-full text-sm px-4'>{product.size}</span>
           </div>
           <div className='flex justify-between items-center mt-4'>
            <span class="font-bold m-2" >₹{product.price}</span>
            <button disabled={isAdding} onClick={(e) => { addToCart (e, product)}} className={`${isAdding ? 'bg-green-500' : 
            'bg-yellow-600'} py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED' : ''}</button>
           </div>
        </div>
    </Link>
  )
}

export default Productt