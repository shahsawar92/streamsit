import React from "react";
import backgroundImage from "../../../assets/home-hero-banner-Jim-Fahad-Digital.png"; // Replace with your image path

const CallToAction2 = () => {
  return (
    <div className='bg-white py-24'>
      <div className='max-w-7xl mx-auto'>
        <div
          className='relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden py-20'
          style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className='absolute inset-0 bg-green-500 bg-opacity-70'></div>
          <div className='p-12 relative z-10'>
            <h2 className='text-4xl font-semibold text-center text-white mb-4 py-4 '>
              We will help you to achieve your goals and to grow your business
            </h2>
            <p className='text-center text-white mb-8 py-4'>
              We are persistently trying to upgrade our product and improve our
              services to suit our customer's requirements. We are pleased to
              introduce our product MAKWAY-313 designed specifically for RMC. We
              assure you that this product is extremely cost-effective,
              user-friendly, and eco-friendly in nature.
            </p>
            <div className='flex justify-center py-4'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full'>
                Call to Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction2;
