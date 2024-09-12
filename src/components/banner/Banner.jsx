import React from 'react'
import Bannerimg1 from '../../assets/images/hero-02.jpg'
import Bannerimg2 from '../../assets/images/hero-01.jpg'
import Heading from "../typography/Heading"
import "./Banner.css"
import Heading1 from '../typography/Heading1'
import Paragrapgh from '../typography/Heading1'
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-6 content">
              <Heading1 title={"Welcome to Ceramic Shop"} />
              <Heading title={"Elevate Your Space with Ceramic Elegance."} />
              <Paragrapgh title={"Starting from just $149.00"} />
              <button className='mt-3'>SHOP NOW</button>
            </div>

            <div className="col-6 banner-image ">

              <img src={Bannerimg1} alt="" className='banner-img-1' />
              <img src={Bannerimg2} alt="" className='banner-img-2' />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner