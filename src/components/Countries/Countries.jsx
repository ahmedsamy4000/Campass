import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countriesAction } from '../../redux/slices/ContriesSlice';
import Country from './Country';
import { useParams } from 'react-router-dom';

const Countries = () => {
  const { search } = useParams();
  const countries = useSelector((state) => state.countries.countries); 
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(countriesAction());
  }, [dispatch]);
  console.log(search)

  const filteredCountries = search
  ? countries.filter(country =>
      country.Name.toLowerCase().includes(search.toLowerCase()) ||
      country.Cities.some(city =>
        city.Name.toLowerCase().includes(search.toLowerCase())
    ))
  : countries;


  return (
    <div className='w-100'>
        <img className='coverImg' src='//res2.weblium.site/res/5dc02e35769ac4002109a58b/5dc18ac331a15200214b8dad?nowebp' alt='Backgroung'></img>

    <div className="container" style={{paddingTop:'100px'}}>
      <div className="col"> 
        <h2 className='txt'>Let's explore the Countries</h2> 
      </div>
      <div className="row">
        {filteredCountries.map(country => (
          <div key={country.id} className="col-lg-4 col-md-6 col-sm-12">
            <Country key={country.id} {...country} />
          </div>
        ))} 
      </div>
    </div>
    </div>
  );
};

export default Countries;
