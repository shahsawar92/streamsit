import React from "react";
import { Card } from "../../common/card";

export default function Services() {
  return (
    <div className='flex flex-wrap justify-center container mx-auto px-auto py-20 gap-4 '>
      <Card
        heading='Heading'
        description='Description'
        className='bg-blue-300 '
        icon={""}
      />
      <Card
        heading='Heading'
        description='Description'
        className='bg-blue-300'
        icon={""}
      />
      <Card
        heading='Heading'
        description='Description'
        className='bg-blue-300'
        icon={""}
      />
      <Card
        heading='Heading'
        description='Description'
        className='bg-blue-300'
        icon={""}
      />
    </div>
  );
}
