import React from 'react'
import "./Products.css";
import Heading from "../typography/Heading"
import Heading1 from '../typography/Heading1';
import Headingh4 from '../typography/Headingh4';
import Paragrapgh from '../typography/Paragraph';

const Products = () => {
    return (
        <>
            <div className="products mt-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6 product-content">
                          <Heading1  className="mt-1 " title={'THE BEST OR CERMAICS'}/>
                            <Heading  title={'Our Products Category​'}/>
                            <p style={{fontSize: "15px"}}>Explore our exquisite collection of ceramic treasures that elevate your spaces and celebrate the artistry of craftsmanship. From dinnerware to decor, each piece in our product range is a testament to quality, style, and the timeless beauty of ceramics.</p>
                          <div className="category1">
                            <div className="category1-content mx-3 p-2">
                                <h4>Stylish Ceramic Home Decor</h4>
                                <p>Starting from just $99.00</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-6">
                        <div className="category2">
                            <div className="category1-content mx-3 p-2">
                                <Headingh4 title={'Trending Ceramic Dinnerware'} />
                                <Paragrapgh title={'Starting from just $299.00'}  />
                            </div>
                          </div>
                          <div className="category3 mt-5">
                            <div className="category1-content mx-3 p-2">
                            <Headingh4 title={'Garden and Outdoor Accents'} />
                            <Paragrapgh title={'Starting from just $190.00'} />
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products