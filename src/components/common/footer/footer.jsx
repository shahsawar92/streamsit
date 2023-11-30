import * as React from "react";
import streamitlogo from "../../../assets/streamitlogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class=" container mx-auto p-8 py-24 flex flex-col gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div>
          <img src={streamitlogo} />
          <p>
            We are persistently trying to upgrade our product and improve our
            services to suit our customer’s requirements. We are pleased to
            introduce our product MAKWAY-313 designed specifically for RMC. We
            assure you that this product is extremely cost-effective,
            user-friendly, and eco-friendly in nature.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <p className="text-black font-bold text-2xl">Useful Links.</p>
          <div className=" flex flex-col gap-4 ">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>

            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-4">
          {" "}
          <p className="text-black font-bold text-2xl">Contact</p>
          <p>Millenium Heights F11 Markaz Islamabad 44000, Pakistan</p>
          <p>info@streamsits.com sales@streamsits.com</p>
          <p> +92 345 9394040</p>
        </div>
        <div className="flex flex-col gap-8 mt-4">
          {" "}
          <p className="text-black font-bold text-2xl">
            Sign Up for Newsletter
          </p>
          <p>
            Keep me up to date with content, updates, and offers from Streams IT
            Solutions
          </p>
          <div className="flex gap-1 ">
            <input
              type="text"
              className="text-lg border p-2 rounded-2xl"
              placeholder="Enter Your Email"
            />
            <button className="text-lg  border p-2 rounded-3xl text-white bg-[#646cff]">
              Sumbit
            </button>
          </div>
        </div>
      </div>
      <div>
        <p variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://streamsits.com/">
            Streams IT Solutions
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </p>
      </div>
    </div>
    // <Box
    //   component='footer'
    //   sx={{
    //     backgroundColor: (theme) =>
    //       theme.palette.mode === "light"
    //         ? theme.palette.grey[200]
    //         : theme.palette.grey[800],
    //     p: 6,
    //   }}>
    //   <Container maxWidth='lg'>
    //     <Grid container spacing={4}>
    //       {/* First Section */}
    //       <Grid item xs={12} sm={6} md={3}>
    //         <Typography variant='h6' color='text.primary' gutterBottom>
    //           Logo
    //         </Typography>
    //         <img
    //           src='path_to_your_logo_image'
    //           alt='Streams Logo'
    //           width='200'
    //           height='85'
    //         />
    //         <Typography variant='body2' color='text.secondary'>
    //           We are persistently trying to upgrade our product and improve our
    //           services to suit our customer’s requirements. We are pleased to
    //           introduce our product MAKWAY-313 designed specifically for RMC. We
    //           assure you that this product is extremely cost-effective,
    //           user-friendly, and eco-friendly in nature.
    //         </Typography>
    //       </Grid>
    //       {/* Second Section */}
    //       <Grid item xs={12} sm={6} md={3}>
    //         <Typography variant='h6' color='text.primary' gutterBottom>
    //           Useful Links
    //         </Typography>
    //         <Link href='/' color='inherit' variant='body2' display='block'>
    //           Home
    //         </Link>
    //         <Link
    //           href='/services'
    //           color='inherit'
    //           variant='body2'
    //           display='block'>
    //           Services
    //         </Link>
    //         <Link
    //           href='/contact'
    //           color='inherit'
    //           variant='body2'
    //           display='block'>
    //           Contact Us
    //         </Link>
    //         <Link href='/about' color='inherit' variant='body2' display='block'>
    //           About Us
    //         </Link>
    //       </Grid>
    //       {/* Third Section */}
    //       <Grid item xs={12} sm={6} md={3}>
    //         <Typography variant='h6' color='text.primary' gutterBottom>
    //           Contact
    //         </Typography>
    //         <Typography variant='body2' color='text.secondary'>
    //           Millenium Heights F11 Markaz Islamabad
    //           <br />
    //           44000, Pakistan
    //         </Typography>
    //         <Typography variant='body2' color='text.secondary'>
    //           info@streamsits.com
    //           <br />
    //           sales@streamsits.com
    //         </Typography>
    //         <Typography variant='body2' color='text.secondary'>
    //           +92 345 9394040
    //         </Typography>
    //       </Grid>
    //       {/* Fourth Section */}
    //       <Grid item xs={12} sm={6} md={3}>
    //         <Typography variant='h6' color='text.primary' gutterBottom>
    //           Sign Up for Newsletter
    //         </Typography>
    //         <Typography variant='body2' color='text.secondary'>
    //           Keep me up to date with content, updates, and offers from Streams
    //           IT Solutions
    //         </Typography>
    //         {/* Your email input and sign-up button here */}
    //         {/* Example: */}
    //         <form>
    //           <input type='email' placeholder='Enter Your Email Address' />
    //           <button type='submit'>Sign Up</button>
    //         </form>
    //       </Grid>
    //     </Grid>
    //     <Box mt={5}>
    //       <Typography variant='body2' color='text.secondary' align='center'>
    //         {"Copyright © "}
    //         <Link color='inherit' href='https://streamsits.com/'>
    //           Streams IT Solutions
    //         </Link>{" "}
    //         {new Date().getFullYear()}
    //         {"."}
    //       </Typography>
    //     </Box>
    //   </Container>
    // </Box>
  );
}
