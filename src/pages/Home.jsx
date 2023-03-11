import React from 'react';
import Product from './Product.jsx';
//import './App.css';
import ('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
const Home = () => {

  const styles = {
    color: '#DF2E38',
   
    fontSize: '24px',
    padding: '10px',
    marginRight: '20px',
    fontFamily: 'Dancing Script', 
    font : 'bold',
    
  };

  return (
    <div className='hero py-16'>

      <div className='container mx-auto flex item-center justify-between'>
        <div className='w-1/2'>
          <h3 className='not-italic text-left text-xl' style={styles}>WELCOME TO SUYOG'S KITCHEN</h3>
          <h6 className='text-lg'><em>Are you hungry?</em></h6>
          <h1 className='text-4xl md:6xl font-bold'>Don't wait !</h1>
          <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-600 hover:bg-yellow-700'>Order Now</button>
        </div>
        <div className='w-1/2'>
          <img className='drop-shadow-lg w-4/5' src='/images/pizza.png' alt='pizza'/> 
        </div>
      </div>
      <div className='pb-24'>
        < Product/>
      </div>
    </div>
  )
}

export default Home