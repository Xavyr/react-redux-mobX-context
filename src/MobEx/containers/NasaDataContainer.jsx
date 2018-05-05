import React, { Component} from 'react';
import NasaDataPresentation from '../components/NasaDataPresentation.jsx';

class NasaDataContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderingLogic () {
    return 1 ? (
      <NasaDataPresentation />
    ) : (
      <button onClick={console.log('clicked')}>Click Button To Fire Sync Action and See Nasa Data in State</button>
    );
  }

  render() {
    const nasaData = this.renderingLogic();
    return (
      <div>
        {nasaData}
      </div>
    )
  }
}

export default NasaDataContainer;