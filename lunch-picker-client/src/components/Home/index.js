import React, { Component } from 'react';
import { ImageUpload, ImageInfo } from './components';
import { Button } from '../Share';
import './styles/home.css';

export default class Home extends Component {
  handleSave = () => {};

  render() {
    return (
      <div className="wrapper">
        <ImageUpload />
        <ImageInfo />
        <Button label="Save" disabled={true} onClick={this.handleSave} />
      </div>
    );
  }
}
