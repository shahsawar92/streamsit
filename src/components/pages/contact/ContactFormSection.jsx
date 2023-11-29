import React from "react";

const ContactFormSection = () => {
  return (
    <div className='bg-gray-200 py-20 lg:py-24'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-0'>
        {/* Left Section */}
        <div className='w-full lg:w-1/2 lg:pr-6'>
          <div className='text-center lg:text-left mb-8'>
            <h2 className='text-3xl lg:text-4xl font-semibold text-gray-800 mb-2'>
              If You Are Interested In Talking To Us About A Project, Please
              Send Us A Message
            </h2>
            <p className='text-gray-600'>
              Subheading or additional details can go here.
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className='w-full lg:w-1/2'>
          <form className='bg-white rounded-lg shadow-lg px-3 py-6'>
            <input
              type='text'
              placeholder='Name'
              className='w-full border rounded-lg mb-4 px-4 py-3'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full border rounded-lg mb-4 px-4 py-3'
            />
            <input
              type='text'
              placeholder='Website'
              className='w-full border rounded-lg mb-4 px-4 py-3'
            />
            <textarea
              placeholder='Message'
              className='w-full border rounded-lg mb-4 px-4 py-3 resize-none'
              rows='4'></textarea>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
