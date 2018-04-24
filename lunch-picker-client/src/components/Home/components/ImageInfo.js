import React, { Component } from 'react';

class ImageInfo extends Component {
  render() {
    return (
      <div className="information-container">
        <p className="info-title">Grill'd Camberwell</p>
        <p className="info-category">Burger</p>
        <p className="info-description">879 Burke Rd, Camberwell VIC 3124</p>
        <div className="info-map" />
      </div>
    );
  }
}

export { ImageInfo };
