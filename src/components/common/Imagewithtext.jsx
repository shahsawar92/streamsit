import React from "react";

const ImageTextSection = ({
  image,
  title,
  subtitle,
  description,
  link,
  className,
}) => {
  return (
    <div
      className={` flex flex-col md:flex-row items-center justify-between gap-5 px-5 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20 ${className}`}>
      <div className='w-full md:w-[70%] pr-0 md:pr-8 shadow-md'>
        <img src={image} alt='Section Image' className='rounded-lg p-12' />
      </div>
      <div className='w-full md:w-2/5'>
        <h2 className='text-green-500 text-lg font-semibold mb-2'>
          {subtitle}
        </h2>
        <h1 className='text-3xl lg:text-4xl font-bold mb-4'>{title}</h1>
        <p className='text-lg mb-4'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-block'>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ImageTextSection;
