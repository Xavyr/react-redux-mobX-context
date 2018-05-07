import React from 'react';

const NasaDataPresentation = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h6>{props.date}</h6>
    <p>{props.explanation}</p>
  </div>
);


export default NasaDataPresentation;