import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./About.css";
import welcome from "../../images/welcome.png";
const About = () => {
  return (
    <div>
      <PageTitle title="About"></PageTitle>
      <h2 className="text-center about-h">About Us</h2>
      <div className="d-flex container containerr align-items-center">
        <div className="w-50 p-5 me-3 my-5">
          <h2 className="about-h">Welcome to Autostars, </h2>
          <p className="text-muted about-des">
            your ultimate destination for finding the perfect vehicle to suit
            your needs. At Car Dealer, we strive to provide our customers with a
            seamless car-buying experience, backed by our commitment to quality
            and customer satisfaction.
          </p>
        </div>
        <div className="w-50 p-3">
          <img className="w-100" src={welcome} alt=""></img>
        </div>
      </div>
      <div className="d-flex flex-row-reverse container containerr align-items-center">
        <div className="w-50 p-5 me-3 my-5">
          <h2 className="about-h">Our mission</h2>
          <p className="text-muted about-des">
            Our mission at Autostars Dealer is to revolutionize the way people
            buy cars. We aim to make the car-buying process more transparent,
            convenient, and enjoyable for our customers. With a focus on
            integrity and excellence, we endeavor to build long-lasting
            relationships with our clients by delivering exceptional service and
            value.
          </p>
        </div>
        <div className="w-50 p-3">
          <img
            className="w-100"
            src={`https://www.acps-automotive.com/wp-content/uploads/_media/unternehmen/leitbild/leitbild-01.jpg`}
            alt=""
          ></img>
        </div>
      </div>
      <div className="d-flex container containerr align-items-center">
        <div className="w-50 p-5 me-3 my-5">
          <h2 className="about-h">Our Team</h2>
          <p className="text-muted about-des">
            At Austostars Car Dealer, we're proud to have a team of dedicated
            professionals who are passionate about cars and dedicated to
            providing outstanding service. From our experienced sales
            representatives to our skilled technicians, each member of our team
            is committed to ensuring that every customer's needs are met with
            the highest level of professionalism and care.
          </p>
        </div>
        <div className="w-50 p-3">
          <img
            className="w-100"
            src={`https://dotyumzonirqv.cloudfront.net/publish/wp-content/uploads/2023/06/Matt-Johnson-Prestige-640x360.jpg`}
            alt=""
          ></img>
        </div>
      </div>
      <div className="d-flex flex-row-reverse container containerr align-items-center">
        <div className="w-50 p-5 me-3 my-5">
          <p className="text-muted about-des">
            Extensive Selection: With a wide range of vehicles to choose from,
            including new and used cars, trucks, and SUVs, we're confident
            you'll find the perfect vehicle to suit your lifestyle and budget.
            Exceptional Service: Our team of experts is here to assist you every
            step of the way, from helping you find the right vehicle to
            providing financing options and post-sale support. Transparency: At
            Car Dealer, we believe in transparency and honesty. We provide
            detailed information about our vehicles, including pricing,
            features, and vehicle history reports, so you can make an informed
            decision. Convenience: With our user-friendly website and convenient
            online tools, you can browse our inventory, schedule a test drive,
            and even complete your purchase from the comfort of your own home.
          </p>
        </div>
        <div className="w-50 p-3">
          <img
            className="w-100"
            src={`https://pcaedu.in/wp-content/uploads/2019/09/why-us-800x400.jpg`}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
