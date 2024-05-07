import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryByIdAction } from '../../redux/slices/ContriesSlice';
import City from './City';
import './slider.css';
import { useParams } from 'react-router-dom';



const Cities = () => {
  const { countryId } = useParams(); 

  const dispatch = useDispatch();
  console.log(countryId)

  const country = useSelector(state => state.countries.selectedCountry);

  useEffect(() => {
    dispatch(CountryByIdAction(countryId));
  }, [dispatch, countryId]);

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
       <main className="main">
      <section className="card-lg__container">
          <img src={country.Image} alt="Background" className="background-img" />
        <h1 className="font-weight-bold">Lest explore</h1>
        <h1 className="font-weight-bold">{country.Name}</h1>
      </section>
    
      <section className="card-sm__container">
        {country.Cities.map(city => (
          <City key={city.id} city={city} />
        ))}
      </section>
    </main>
  );
};

export default Cities;