import React from 'react';
import "./coveritem.css"

const CoverItem = ({item}) => {
    console.log(item.image)
    return (

        <div className="grid w-100 m-0 p-0" id="mainItem">
        <figure className="effect-apollo w-100 w-0 p-0">
            <img className='w-100 m-0' src= "/habitationcover.jpg" />
            <div className='w-100 d-flex justify-content-start align-items-start'>
            <figcaption className='d-flex'>
                <label id="habitationsLabel">Habitations</label>
                <p>Find your comfort and what suits you Here ..</p>
                
            </figcaption>			
            </div>
        </figure>
    </div>
    );
}

export default CoverItem;
