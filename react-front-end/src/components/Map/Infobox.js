
import React from 'react';
import "./map.css";

const Infobox= ({ info }) => {
  return (
 <div className="informations">
    <img src={info.img_url}alt="house1.jpg" style={{width: '150px', height: '200px'}}/>
  <p>{info.address}</p>
  <p>{info.bedroomno}</p>
  <p>{info.bathroomno}</p>
  <p>{info.minimum_price}</p> 
  <p>{info.size}</p>
  <p>{info.pets}</p>
  <p>{info.furnished}</p>
  <p>{info.laundry}</p>
  <p>{info.parking}</p>     
</div>
  )
};

export default Infobox;