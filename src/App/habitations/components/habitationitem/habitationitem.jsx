import React from 'react';
import "./habitationitem.css"
const Habitationitem = ({item}) => {
    return (
        <div className='d-flex flex-column align-items-center'>
        <div class="grid w-100 p-3">
        <figure class="effect-lexi w-100 rounded-5">
            <img src={item.image} alt="img12"/>
            <figcaption>
                <h2><span>{item.name}</span></h2>
                <p>{item.description}</p>
                <a href="#">View more</a>
                
            </figcaption>			
        </figure>
      
    </div>
    <div className='btn btn-dark w-50'>Programs</div>
    </div>
    );
}

export default Habitationitem;
