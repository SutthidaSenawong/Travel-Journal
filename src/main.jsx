import React from 'react';

export default function Main(props) {
  // console.log(props);
  // console.log('Image', Image);
  return (
    <div className="main-container">
      {/* <img src={`../image/${props.img}`} /> */}
      {/* <img src="./railay.jpeg" /> */}
      <img src={props.img} />
      <div className="detail-container">
        <div className="detail-top">
          <p className="country">
            <i class="fa-solid fa-location-dot"></i> {props.country}
          </p>
          <a href={`${props.map}`}>View on Google Maps</a>
        </div>
        <h1 className="location">{props.location}</h1>
        <p className="date">{props.date}</p>
        <p className="description">{props.desc}</p>
      </div>
    </div>
  );
}
