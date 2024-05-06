import React from 'react';
import './slider.css';

const City = ({city}) => {
    return (
    <div>
      <section className="card-sm" style={{ backgroundImage: `url(${city.Image})` }}>
        <h1 className="card__text-lg">{city.Name}</h1>
      </section>    
    </div>
  );
};

export default City;
