import React from 'react';
import './slider.css';
import { Link } from 'react-router-dom';

const City = ({city, country}) => {
  return (
    <div>
      <Link to={`/Countries/${country}/${city.Name}/programs`}>
        <section className="card-sm" style={{ backgroundImage: `url(${city.Image})` }}>
          <h1 className="card__text-lg">{city.Name}</h1>
        </section>    
      </Link>
    </div>
  );
};

export default City;
