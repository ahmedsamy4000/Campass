import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countriesAction } from '../../redux/slices/ContriesSlice';
import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries); 
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(countriesAction());
  }, [dispatch]);

  console.log(countries);

  return (
    <div className='w-100'>
    <div className="container" style={{paddingTop:'100px'}}>
      <div className="col text-center"> 
        <h2>Let's explore the Countries</h2> 
      </div>
      <div className="row">
        {countries.map(country => (
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
