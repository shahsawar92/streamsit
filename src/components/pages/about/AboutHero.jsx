import React from "react";
import Photo from "../../../assets/1.png";
const AboutHeroSection = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20 gap-5'>
      {/* Left Section */}
      <div className='w-full lg:w-1/2'>
        <h2 className='text-green-500 text-lg font-semibold mb-2'>
          WHY CHOOSE US
        </h2>
        <h1 className='text-3xl lg:text-4xl font-bold mb-4'>
          Remote Monitoring & Control Services (RMCS)
        </h1>
        <p className='text-lg mb-6'>
          Stream's Remote Monitoring System is designed to work with any device
          at any time from any location. As the telecom sector consolidates and
          service prices mature, we provide:
        </p>
        <div className='flex flex-wrap items-center justify-between mb-8'>
          <div className='flex items-center mb-4 lg:mb-0'>
            {/* Icon 1 */}
            <svg
              className='w-8 h-8 mr-2 fill-current text-blue-500'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              {/* Your icon */}
            </svg>
            <span>Reduction in overall CAPEX</span>
          </div>
          <div className='flex items-center mb-4 lg:mb-0'>
            {/* Icon 2 */}
            <svg
              className='w-8 h-8 mr-2 fill-current text-blue-500'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              {/* Your icon */}
            </svg>
            <span>Predictive Maintenance</span>
          </div>
          <div className='flex items-center mb-4 lg:mb-0'>
            {/* Icon 3 */}
            <svg
              className='w-8 h-8 mr-2 fill-current text-blue-500'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              {/* Your icon */}
            </svg>
            <span>Becoming Energy Efficient</span>
          </div>
          <div className='flex items-center'>
            {/* Icon 4 */}
            <svg
              className='w-8 h-8 mr-2 fill-current text-blue-500'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              {/* Your icon */}
            </svg>
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className='w-full lg:w-1/2'>
        <img src={Photo} alt='About' className='rounded-lg w-full' />
      </div>
    </div>
  );
};

export default AboutHeroSection;
