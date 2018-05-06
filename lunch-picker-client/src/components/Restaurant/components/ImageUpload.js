import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Icon from 'material-ui/Icon';

class ImageUpload extends Component {
  handleDrop = async files => {
    await this.props.onUpload(files[0]);
  };

  renderDropZone = () => {
    const { imageSrc } = this.props;
    if (imageSrc) {
      return (
        <div className="preivew-image-container animated fadeIn">
          <img src={imageSrc} alt="preview" />
        </div>
      );
    } else {
      return (
        <Dropzone
          className="drop-zone"
          multiple={false}
          onDrop={this.handleDrop}
        >
          <Icon className="drop-zone-icon">add</Icon>
          <p className="drop-zone-text">
            Click or drag file to this area to upload
          </p>
        </Dropzone>
      );
    }
  };

  render() {
    return this.renderDropZone();
  }
}

export { ImageUpload };
