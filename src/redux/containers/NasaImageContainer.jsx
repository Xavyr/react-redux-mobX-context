import React, { Component} from 'react';
import ImagePresentation from '../components/ImagePresentation.jsx';

//Nasa Image Container has a bit of rendering logic, depending on whether the
//Ajax trigger has been fired.
class NasaImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderingLogic = () => {
    return this.props.imageUrl ? (
      <ImagePresentation imageUrl={this.props.imageUrl} />
    ) : (
      <h3>Click the Ajax Button To Kick Off Async Redux Action</h3>
    );
  }

  render() {
    const spaceImage = this.renderingLogic();
    return (
      <div>
        {spaceImage}
      </div>
    )
  }

}

export default NasaImageContainer;
