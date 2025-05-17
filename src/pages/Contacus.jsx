import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
export const ContactUs = () => {
  return (

<div className="overflow-hidden">

   <Navbar></Navbar>
   
      <div className=" bg-beige overflow-hidden  max-w-[700px] p-10 m-4 md:m-10 rounded-lg ">
              <div className="flex flex-col lg:flex-row gap-6 items-start max-w-7xl mx-auto">

        <div className="flex-1 text-slate-800  space-y-4 max-w-[500px] items-center">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-lg ">If you have any questions, need assistance, or want to share feedback, our dedicated customer support team is here to help. We value your experience and are always ready to ensure your transactions are seamless and your information is protected at all times.</p>
          <div className="space-y-2 list-none">
            <li><a href="mailto:info@growhub.shop"><strong>Email:</strong> info@growhub.shop</a></li>
            <li><a href="tel:+917576043293"><strong>Phone:</strong> +91 75760 43293 </a></li>
          </div>
        </div>


      <div>
    </div>
    </div>

 </div>
      <div className=" bg-rblue overflow-hidden  w-full p-5 md:p-10 ">
              <div className="flex flex-col lg:flex-row gap-6  max-w-7xl mx-auto">

        <div className="flex-1 text-white space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our location</h2>
          <div className="space-y-2 list-none">
            <li>GrowHub office 3rd floor, Maniram Dewan Rd, near SBI silpukhuri branch, Chenikuthi </li>
            <li>Guwahati, Assam</li>
            <li>781003</li>

            
          </div>
        </div>


      <div className="flex-1 w-full md:max-w-3xl mx-auto  rounded-lg overflow-hidden aspect-video">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3488806334994!2d91.7612345!3d26.1853269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5943049fdf6d%3A0xf31a7be604a2b88f!2sGROWHUB!5e0!3m2!1sen!2sin!4v1747483403930!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </div>
    <Footer></Footer>
</div> 
  );
};
