import React from 'react'
import  iconOne  from '../img/category/iconOne.png';
import  iconTwo  from '../img/category/iconTwo.png';
import  iconThree  from '../img/category/iconThree.png';
import iconFour  from '../img/category/iconFour.png';


function Products() {
  return (
    <>
      <div className="products">
        <h2>We design tools to unveil
          your superpowers</h2>
        <div className="cards">
          <div className="card">
            <img src={iconOne} alt="" />
            <h4>First click tests</h4>
            <p>While most people enjoy casino gambling</p>
          </div>
          <div className="card">
            <img src={iconTwo} alt="" />
            <h4>Design surveys</h4>
            <p>Personal choices and the overall personality of the person.</p>
          </div>
          <div className="card">
            <img src={iconThree} alt="" />
            <h4>Preference tests</h4>
            <p>Sports betting,lottery and bingo playing for the fun</p>
          </div>
          <div className="card">
            <img src={iconFour} alt="" />
            <h4>Five second tests</h4>
            <p>The Myspace page defines the individual.</p>
          </div>
        </div>
        <button>SignUp</button>
      </div>
      
    </>
  )
}

export default Products