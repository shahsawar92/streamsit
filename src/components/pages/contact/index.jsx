import ContactFormSection from "./ContactFormSection";
import HeroContact from "./heroContact";
import GoogleMap from "../../common/map.jsx";
import CallToAction from "../../common/cta.jsx";
import Footer from "../../common/footer/footer.jsx";
import Navbar from "../../common/navbar/navbar.jsx";
export default function Index() {
  return (
    <>
      <Navbar bgColor='black' textColor='white' />

      <HeroContact />

      <ContactFormSection />
      <div className='px-12 bg-gray-200'>
        <GoogleMap />
      </div>

      <CallToAction />
      <Footer />
    </>
  );
}
