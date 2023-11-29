import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const stylespartners = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const PartnerLogosSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='py-8 my-20 bg-white'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Our Partners</h2>
      <Slider {...settings}>
        <div style={stylespartners}>
          <img src={logo1} alt='Partner 1' className='h-16 w-auto mx-auto' />
        </div>
        <div style={stylespartners}>
          <img src={logo2} alt='Partner 2' className='h-16 w-auto mx-auto' />
        </div>
        <div style={stylespartners}>
          <img src={logo3} alt='Partner 3' className='h-16 w-auto mx-auto' />
        </div>
        <div style={stylespartners}>
          <img src={logo4} alt='Partner 4' className='h-16 w-auto mx-auto' />
        </div>
        <div style={stylespartners}>
          <img src={logo5} alt='Partner 5' className='h-16 w-auto mx-auto' />
        </div>
      </Slider>
    </div>
  );
};

export default PartnerLogosSection;
