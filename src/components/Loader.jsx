import React from 'react';
import loader from '../../public/loader.gif';


const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-black'>
        <div className="spinner-container ">
          <img className='h-full w-full  object-cover' src={loader} alt="" />
      {/* <div className="spinner"></div> */}
    </div>
    </div>
  );
};

export default Loading;
