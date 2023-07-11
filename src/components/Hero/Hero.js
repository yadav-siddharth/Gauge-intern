import React from "react";
import './hero.css';
import water from '../../assests/water.png';
import {MdWaterDamage,MdVerifiedUser} from 'react-icons/md';
import {IoMdWater} from 'react-icons/io';
import {FaRupeeSign} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
      
        <div className="content">
        <div className="hero-header"><MdVerifiedUser size={30} style={{ color: "#3B82F6" }}/>Nothing Above Customers’</div><br/>
          <div className="heading">
          <h1>Gauge Water Purifier</h1>
          <mark>Puts an End</mark> 
          <h1>To RO Service Pain</h1>
          </div>

          <p >Fully automatic water purifer the highest water savings while 
              ensuring a seamless service experience      
          </p>
          <button className="btn">Have a Look</button>
        </div>
      </div>

      <div className="right">
        <div className="photo-section">
          
                    
          <div className="photo-header">
          <h2>Pure Water <mark>Guarantee</mark></h2>
          <svg width="208" height="16" viewBox="0 0 208 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 12.668C43.9929 5.60812 154.854 -4.27568 204.045 12.668" stroke="#FEB906" strokeWidth="6" strokeLinecap="round"></path> </svg>
          <path d="M3 12.668C43.9929 5.60812 154.854 -4.27568 204.045 12.668" stroke="#FEB906" strokeWidth="6" strokeLinecap="round"></path>
          </div>
        
          <img src={water} className="water" alt="water" />
          <div className="user">
          <div className="student"><IoMdWater /> Instant Hot Water</div><br/>
          <div className="employeer"><FaRupeeSign size={20}/> Less Cost</div><br/>
          <div className="company"><MdWaterDamage size={20}/> Water Leakage</div><br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
