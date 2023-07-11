import React from "react";
import "./service.css";
import filter from '../../assests/filter.png';
import { MdVerified ,MdVerifiedUser} from "react-icons/md";
import data from "./data";

const service = ({ head, ans }) => {
  return (
    <div className="service">
          
      <div className="service-image">
      <div className="service-header"><MdVerifiedUser size={30} style={{ color: "#3B82F6" }}/>Customers’ Needs Above All Else</div><br/>
          <img src={filter} alt="filter" className="filter" />
      </div>
      <div className="service-content">
        <h1>Take Control</h1>
        <mark>Monitor Usage & Change Filters</mark>
        <h1>No Technician Needed</h1>
        <p>
          We have crafted a product that addresses the real frustrations of a
          customer. The first step is to ensure there are zero service delays.
        </p>

        <div className="service-list">
          {data.map((item) => (
            <div className="service-item" key={item.id}>
              <h2>
                <MdVerified size={30} style={{ color: "green" }} /> {item.head}
              </h2>
              <p>{item.ans}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default service;
