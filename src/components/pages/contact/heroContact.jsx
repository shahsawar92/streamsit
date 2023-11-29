import React from "react";
import { Card } from "../../common/card";

export default function HeroContact() {
  return (
    <div className='flex flex-col justify-center align-middle content-center sm:flex-row gap-5 flex-wrap py-40 bg-gray-200  '>
      <Card
        heading='Contact'
        description='Contact us for more information'
        className='w-72 h-56 md:w-96 md:h-56 py-28  after:w-96 bg-white  shadow-lg'
      />
      <Card
        heading='Contact'
        description='Contact us for more information'
        className='w-72 h-56 md:w-96 md:h-56 py-28 after:w-96 bg-white shadow-lg'
      />
      <Card
        heading='Contact'
        description='Contact us for more information'
        className='w-72 h-56 md:w-96 md:h-56 py-28 after:w-96 bg-white shadow-lg'
      />
      <Card
        heading='Contact'
        description='Contact us for more information'
        className='w-72 h-56 md:w-96 md:h-56 py-28 after:w-96 bg-white shadow-lg'
      />
    </div>
  );
}
