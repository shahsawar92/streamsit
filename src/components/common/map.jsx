import React from "react";

const GoogleMap = () => {
  return (
    <div className='w-auto h-[600px] py-20 '>
      <iframe
        title='Google Map'
        width='100%'
        height='100%'
        frameBorder='0'
        style={{ border: 0 }}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387195.62718918234!2d-74.25987532812336!3d40.69767000577748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281cee6ce790!2sNew%20York%2C%20USA!5e0!3m2!1sen!2suk!4v1589965558894!5m2!1sen!2suk'
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMap;
