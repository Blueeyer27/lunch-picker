import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClose from 'material-ui/svg-icons/navigation/close';
import './styles/home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  handleDrop = files => {
    this.setState({
      files
    });
  };

  handleRemoveImage = () => {
    this.setState({
      files: []
    });
  };

  renderDropZone = () => {
    const file = this.state.files.length > 0 ? this.state.files[0] : undefined;
    if (file) {
      return (
        <div className="preivew-image-container">
          <img src={file.preview} alt="preview" />
          <span className="close-icon" onClick={this.handleRemoveImage}>
            <ContentClose />
          </span>
        </div>
      );
    } else {
      return (
        <Dropzone
          className="drop-zone"
          multiple={false}
          onDrop={this.handleDrop}
        >
          <ContentAdd className="drop-zone-icon" />
          <p className="drop-zone-text">
            Click or drag file to this area to upload
          </p>
        </Dropzone>
      );
    }
  };

  renderFileInfo = () => {
    if (this.state.files.length === 0) return null;
    const file = this.state.files[0];
    return (
      <ul>
        <li>Name: {file.name}</li>
        <li>Size: {file.size}</li>
        <li>Type: {file.type}</li>
        <li>Preview: {file.preview}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderDropZone()}
        {this.renderFileInfo()}
      </div>
    );
  }
}
