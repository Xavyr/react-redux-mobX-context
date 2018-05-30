import React from 'react';
import StateContext from '../state.js';

const NasaDataPresentation = (props) => (
  //PROBS SKIP THE LAST CONTEXT AND JUST PUT IT HERE!!
  <div>
    <h1>{props.title}</h1>
    <h6>{props.date}</h6>
    <p>{props.explanation}</p>
  </div>
);


export default NasaDataPresentation;