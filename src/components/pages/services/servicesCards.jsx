import React from "react";
import { Card } from "../../common/card";

export default function ServicesCards() {
  return (
    <div className='flex flex-wrap justify-center gap-3'>
      <Card
        heading='HVAC Control & Monitoring'
        icon='https://img.icons8.com/ios/452/finance.png'
        className='bg-gradient-to-b from-purple-900 to-indigo-700  text-white py-28 '
      />
      <Card
        heading='Data Security & Retention'
        icon='https://img.icons8.com/ios/452/finance.png'
        className='bg-gradient-to-b from-purple-900 to-indigo-700  text-white py-28 '
      />
      <Card
        heading='Machine Learning & Analysis'
        icon='https://img.icons8.com/ios/452/finance.png'
        className='bg-gradient-to-b from-purple-900 to-indigo-700  text-white py-28 '
      />
      <Card
        heading='Predictive Maintenance'
        icon='https://img.icons8.com/ios/452/finance.png'
        className='bg-gradient-to-b from-purple-900 to-indigo-700  text-white py-28 '
      />
      <Card
        heading='Generator Control & Monitoring'
        icon='https://img.icons8.com/ios/452/finance.png'
        className='bg-gradient-to-b from-purple-900 to-indigo-700  text-white py-28 '
      />
      <Card
        heading='Battery Monitoring & Management'
        icon='https://img.icons8.com/ios/452/finance.png'
        className='bg-gradient-to-b from-purple-900 to-indigo-700  text-white py-28 '
      />
      <Card
        heading='Solar Monitoring & Analysis'
        icon='https://img.icons8.com/ios/452/finance.png'
        className='bg-gradient-to-b from-purple-900 to-indigo-700  text-white py-28 '
      />
      <Card
        heading='Fuel Monitoring & Management'
        icon='https://img.icons8.com/ios/452/finance.png'
        className='bg-gradient-to-b from-purple-900 to-indigo-700  text-white py-28 '
      />
    </div>
  );
}
