import React, { Component} from 'react';
import ImagePresentation from '../components/ImagePresentation.jsx';
import { observer } from 'mobx-react';
import nasaStore from '../store.js'


@observer class NasaImageContainer extends Component {
  constructor(props) {
    super(props);
  }
  renderingLogic = () => {
    return nasaStore.image ? (
      <ImagePresentation image={nasaStore.image} />
    ) : (
      <h3>Click the Ajax Button To Kick Off Async Redux Action</h3>
    );
  }
  render() {
    const image = this.renderingLogic();
    return (
      image
    );
  }
}

//(track) => trackStore.activeTrack = track
// class NasaImageContainer extends Component {
//   constructor(props) {
//     super(props);
//     console.log('props from image container', props);
//   }
//
//   renderingLogic = () => {
//     return 1 ? (
//       <ImagePresentation />
//     ) : (
//       <h3>Click the Ajax Button To Kick Off Async Redux Action</h3>
//     );
//   }
//
//   render() {
//     const spaceImage = this.renderingLogic();
//     return (
//       <div>
//         {spaceImage}
//       </div>
//     )
//   }
//
// }

export default NasaImageContainer;
