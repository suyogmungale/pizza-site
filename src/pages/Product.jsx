import React from 'react'

const Product = () => {
  return (
    <div className='container mx-auto pb-24'>
      <h1 className='text-lg font-bold py-8'>Products</h1>
      <div className='grid grid-cols-5 my-8 gp-24'>
        <div>
           <img src='/images/peproni.png' alt='img'/>
           <div className='text-center'>
           <h2 className='text-lg font-bold py-2'>Havana Special</h2>
           <span className='bg-gray-400 py-1 rounded-full text-sm px-4'>small</span>
           </div>
           <div className='flex justify-between items-center mt-4'>
            <span>₹500</span>
            <button className='bg-yellow-600 py-1 px-4 rounded-full font-bold'>Add</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Product