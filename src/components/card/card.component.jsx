import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.roboto.id}?set=set1&size=180x180`} alt=""/>
        <h2> {props.roboto.name} </h2>
        <p> {props.roboto.email} </p>
    </div>
);