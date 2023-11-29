import React from "react";
import Image1 from "../../../assets/5-768x768.png"; // Replace with your image paths
import Image2 from "../../../assets/15-768x768.png"; // Replace with your image paths

const WhoWeAreSection = () => {
  return (
    <div className='bg-gray-100 py-20 lg:py-24'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-0'>
        {/* Left Section */}
        <div className='w-full lg:w-1/2 lg:pr-6'>
          <div className='text-center lg:text-left mb-8'>
            <h2 className='text-3xl lg:text-4xl font-semibold text-gray-800 mb-4'>
              Who We Are
            </h2>
            <p className='text-gray-600 mb-6'>
              Brief description or subtitle goes here.
            </p>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full'>
              Learn More
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className='w-full lg:w-1/2 flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-between'>
          <div className='lg:w-1/2 lg:pr-2 mb-4 lg:mb-0'>
            <p className='text-gray-600 text-center lg:text-left'>
              Description above the image 1.
            </p>
            <img
              src={Image1}
              alt='Image 1'
              className='w-full rounded-lg mb-4'
            />
          </div>
          <div className='lg:w-1/2 lg:pl-2'>
            <img
              src={Image2}
              alt='Image 2'
              className='w-full rounded-lg mb-4'
            />
            <p className='text-gray-600 text-center lg:text-left'>
              Description below the image 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
