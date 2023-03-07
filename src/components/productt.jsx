import React from 'react'

const Productt = (props) => {
  const { product } = props; 
  return (
    <div>
           <img src={product.image} alt='img'/>
           <div className='text-center'>
           <h2 className='text-lg font-bold py-2'>{product.name}</h2>
           <span className='bg-gray-400 py-1 rounded-full text-sm px-4'>{product.size}</span>
           </div>
           <div className='flex justify-between items-center mt-4'>
            <span>₹{product.price}</span>
            <button className='bg-yellow-600 py-1 px-4 rounded-full font-bold'>Add</button>
           </div>
        </div>
  )
}

export default Productt