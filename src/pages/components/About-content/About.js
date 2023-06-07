import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ChoosingUs from "./choosing_us/ChoosingUs";
import Heading from "./our_team/heading/Heading";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12" id="colabout">
            <h1 className="text-center aboutheading">About Tronix</h1>
            <p className="text-center aboutpara">
              We are here to provide a place special for electronic devices.
              Although we only operated for 2 years but we always provide the
              best service for customers and all the sellers who use our
              website. With the hope that it can help improve a better life
              using various electronic goods with the latest technology, we are
              all ears to any suggestion from our dear customers
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div class="card" id="background">
              <img src="/pics_svgs/background.svg"   class="card-img" alt="..." />
              {/* <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ChoosingUs/>
      <Heading/>
      <Footer />
    </>
  );
};

export default About;
