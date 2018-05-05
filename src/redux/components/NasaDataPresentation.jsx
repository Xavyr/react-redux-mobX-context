import React from 'react';

const NasaDataPresentation = props => (
  <div>
    <h1>{props.nasaData.title}</h1>
    <h6>{props.nasaData.date}</h6>
    <p>{props.nasaData.explanation}</p>
  </div>
);


export default NasaDataPresentation;