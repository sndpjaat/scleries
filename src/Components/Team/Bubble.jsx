import React from 'react';
// import '../styles.css'; // Ensure this path is correct

const BubbleAnimation = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Bubbles with different animations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full bubble-up"></div>
      <div className="absolute top-30 left-20 w-52 h-52 bg-green-200 rounded-full bubble-down"></div>
      <div className="absolute top-110 left-60 w-32 h-32 bg-red-900 rounded-full bubble-diagonal-down-left"></div>
      <div className="absolute top-110 left-60 w-32 h-32 bg-yellow-600 rounded-full bubble-diagonal-down-left"></div>
      <div className="absolute top-130 left-70 w-52 h-52 bg-red-200 rounded-full bubble-up"></div> 
      <div className="absolute bottom-9 left-20 w-52 h-52 bg-yellow-500 rounded-full bubble-down"></div>      
    </div>
  );
};

export default BubbleAnimation;

