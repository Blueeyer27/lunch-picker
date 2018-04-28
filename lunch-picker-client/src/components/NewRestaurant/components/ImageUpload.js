import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { upload } from '../../../aws/s3';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  handleDrop = async files => {
    this.setState({
      files
    });

    let key = this.props.imageKey;
    if (this.props.imageKey == null) {
      const file = this.state.files[0];
      key = await upload(file);
      this.props.handleUpdateImageKey(key);
    }
    console.log('key', key);
    await this.props.detectTextInLogo(key);
  };

  renderDropZone = () => {
    const file = this.state.files.length > 0 ? this.state.files[0] : undefined;
    if (file) {
      return (
        <div className="preivew-image-container animated fadeIn">
          <img src={file.preview} alt="preview" />
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

  render() {
    return this.renderDropZone();
  }
}

export { ImageUpload };
