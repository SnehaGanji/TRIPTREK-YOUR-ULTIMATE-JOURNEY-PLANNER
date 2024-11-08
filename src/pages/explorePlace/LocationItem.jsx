import React from 'react';

const LocationItem = ({ name, description, address, photoUrl }) => {
  return (
    <div className="location-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Address: {address}</p>
      <img src={photoUrl} alt={name} />
    </div>
  );
};

export default LocationItem;
