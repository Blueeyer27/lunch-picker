import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClose from 'material-ui/svg-icons/navigation/close';
import ContentCheck from 'material-ui/svg-icons/navigation/check';
import { upload } from '../../../aws/s3';

class ImageUpload extends Component {
  constructor(props) {
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

  handleSaveImage = async () => {
    const file = this.state.files[0];
    const key = await upload(file);
    console.log(key);
    await this.props.detectTextInLogo(key);
  };

  renderDropZone = () => {
    const file = this.state.files.length > 0 ? this.state.files[0] : undefined;
    if (file) {
      return (
        <div className="preivew-image-container animated fadeIn">
          <img src={file.preview} alt="preview" />
          <span
            key="removeBtn"
            className="image-icon close-icon"
            onClick={this.handleRemoveImage}
          >
            <ContentClose />
          </span>,
          <span
            key="saveBtn"
            className="image-icon check-icon"
            onClick={this.handleSaveImage}
          >
            <ContentCheck />
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

  render() {
    return this.renderDropZone();
  }
}

export { ImageUpload };
