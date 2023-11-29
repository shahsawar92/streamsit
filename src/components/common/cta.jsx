import React from "react";

const CallToAction = () => {
  return (
    <div className='bg-gradient-to-b from-purple-900 to-indigo-700 py-24'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='p-8'>
            <h2 className='text-4xl font-semibold text-center text-gray-800 mb-4'>
              Turn Your Idea into Reality
            </h2>
            <p className='text-center text-gray-600 mb-8'>
              Small subtitle or description goes here.
            </p>
            <div className='flex justify-center'>
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

export default CallToAction;
