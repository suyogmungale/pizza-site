import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import CartContext  from './CartContext.js'
const Cart = () => {
  let total = 0 ;
  const[products,setproducts] = useState([])
  const { cart, setCart } = useContext(CartContext);
  console.log(cart)

 useEffect(() => {
  console.log(Object.keys(cart.items));
  fetch('/api/products/cart-items',
   {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ids: Object.keys(cart.items) })
    
    })
    
    .then(res => res.json())
    .then(products => {
      setproducts(products);
    })
}, [cart.items]) 


const getQty = (productId) => {
  return cart.items[productId] ;
  }
  const increment = (productId) => {
    const oldQty = cart.items[productId] ;
    const _cart = {...cart};
        cart.items[productId] = oldQty + 1;
        _cart.totalItems +=1;
        setCart(_cart);
}
 
const decrement = (productId) => {
  const oldQty = cart.items[productId] ;
  if(oldQty === 1){
    return;
  }
  const _cart = {...cart};
      cart.items[productId] = oldQty - 1;
      _cart.totalItems -=1;
      setCart(_cart);
}

const getsum = (productId,price) => {
  const sum = price * getQty(productId);
  total += sum;
  return sum;
}
  return (

    products.length ?
    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
      
      <h1 className='my-12 font-bold'>Cart items</h1>

      <ul>
        {
          products.map(product => {
            console.log(product.name)
            return(
              <li className='mb-12' key={product._id}>
              <div className='flex items-center justify-between'>
                <div className='flex item-center'>
                  <img className='h-16' src={product.image} alt="img" />
                  <span className='font-bold ml-4 w-48'>{product.name}</span>
                </div>
                <div>
                  <button onClick={() => { decrement (product._id)}} className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                  <b className='px-4'>{getQty(product._id)}</b>
                  <button onClick={() => { increment (product._id)}} className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                </div>
                <span>₹ {getsum(product._id, product.price)}</span>
                <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
              </div>
            </li>
            )
          })
        }
        
      </ul>

      <ul>
        
      </ul>

      <hr className='my-6' />

      <div className='text-right'>
        <b>Grand total: </b> ₹ {total}
      </div>

      <div>
        <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
      </div>

      </div>
      :
      <img className='mx-auto w-1/2 mt-12 ' src="/empty-cart.png" alt="empty cart" />
  )
}

export default Cart 