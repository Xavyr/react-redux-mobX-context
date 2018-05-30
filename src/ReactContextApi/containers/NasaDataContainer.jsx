import React from 'react';
import NasaDataPresentation from '../components/NasaDataPresentation.jsx';
import StateContext from '../state.js';


class NasaDataContainer extends React.Component {
  constructor(props) {
    console.log('data container props', props);
    super(props);
  }

  render() {
    console.log(StateContext.consumer);
    return (
      <StateContext.Consumer>
        {state =>
          <div>
            <h1>{state.nasaData.title}</h1>
            <h1>{state.nasaData.date}</h1>
            <h1>{state.nasaData.explanation}</h1>
          </div>
        }
      </StateContext.Consumer>
    )
  }
}

export default NasaDataContainer;