import React from 'react'
import marketing1 from '../img/marketing/marketing01.png';
import marketing2 from '../img/marketing/marketing02.png';
import marketing3 from '../img/marketing/marketing03.png';

function Resources() {
  return (
    <>
      <div className="resources">
        <h2>Marketing Strategies</h2>
        <p>Join 40,000+ other marketers and get proven strategies on email marketing</p>
        <div className="carder">
          <div className="card">
            <img src={marketing2} alt="marketing" />
            <p>By <span>Edward Apersil</span>|17 September 2022</p>
            <h3>Increasing Prosperity With Positive Thinking</h3>
          </div>

          <div className="card">
            <img src={marketing3} alt="marketing" />
            <p>By <span>Albert Apersil</span>|17 September 2022</p>
            <h3>Increasing Prosperity With Positive Thinking</h3>
          </div>

          <div className="card">
            <img src={marketing1} alt="marketing" />
            <p>By <span>Ransford Apersil</span>|17 September 2022</p>
            <h3>Increasing Prosperity With Positive Thinking</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resources