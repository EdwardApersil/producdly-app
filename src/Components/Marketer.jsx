import React from 'react'
import manager from '../img/manager/manager.png'

function Marketer() {
  return (
    <>
      <div className="customer">
        <div className="customer-img">
          <img src={manager} alt="manager" />
        </div>
        <div className="customer-content">
          <h2><span>Effortless Validation for</span> <br />
            Design Professionals</h2>
          <p>The Myspace page defines the individual,his or her characteristics, traits, personal choices and the overall
            personality of the person.</p>
          
          <h4>Accessory makers</h4>
          <p>While most people enjoy casino gambling, sports betting,
            lottery and bingo playing for the fun</p>
          
          <h4>Alterationists</h4>
          <p>If you are looking for a new way to promote your business
that won't cost you money</p>

          <h4>Custom Design designers</h4>
          <p>If you are looking for a new way to promote your business
that won't cost you more money,</p>
        </div>


      </div>
    </>
  )
}

export default Marketer;