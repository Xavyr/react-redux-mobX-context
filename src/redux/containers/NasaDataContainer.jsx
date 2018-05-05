import React, { Component} from 'react';
import NasaDataPresentation from '../components/NasaDataPresentation.jsx';

class NasaDataContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderingLogic () {
    return this.props.nasaData.showFlag && this.props.nasaData.title ? (
      <NasaDataPresentation nasaData={this.props.nasaData} />
    ) : (
      <button onClick={this.props.showNasaDataAction}>Click Button To Fire Sync Action and See Nasa Data in State</button>
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