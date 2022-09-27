import React from 'react'
import marketer from '../img/marketer/marketer.png';
import tick from '../img/manager/tick.png';

function Product() {
  return (
    <>
        <div className="product">
            <div className="img"><img src={marketer} alt="marketer" /></div>
            <div className="product-content">
                <h2><span>Easier decision making for</span> <br />
            Product Managers</h2>
                <p>The Myspace page defines the individual,his or her characteristics, traits, personal choices and the overall
                    personality of the person.</p>
                <div>
                    <div className='tick'>
                        <img src={tick} alt="tick" />
                        <p>Never worry about overpaying for your
                        energy again.</p>
                    </div>
                    
                    
                    <div className="tick">
                        <img src={tick} alt="tick" />
                        <p>We will only switch you to energy companies
                        that we trust and will treat you right.</p>
                    </div>
                    

                    <div className="tick">
                        <img src={tick} alt="tick" />
                        <p>We track the markets daily and know where the
                        savings are.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product;