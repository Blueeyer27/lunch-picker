import React, { Component } from 'react';
import { RateEmoji } from '../../Share';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class OnlineDetail extends Component {
  renderSlider = () => {
    const { restaurant } = this.props;
    return (
      restaurant.photos && (
        <Carousel
          className="online-carousel"
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={true}
        >
          {restaurant.photos.map((photo, index) => {
            return (
              <div key={index}>
                <img src={photo} alt="restaurant images" />
              </div>
            );
          })}
        </Carousel>
      )
    );
  };
  renderDetails = () => {
    const { restaurant } = this.props;
    if (restaurant.name == null) return null;

    let rate = parseInt(restaurant.rating, 10);
    if (isNaN(rate) || rate < 1) rate = 1;
    if (rate > 5) rate = 5;

    return (
      <div className="with-footer">
        {this.renderSlider()}
        <p className="info-title">{restaurant.name}</p>
        <p className="info-description">
          Category: <span>{restaurant.categories.join(' ')}</span>
        </p>
        <p className="info-description">
          Address: <span>{restaurant.address}</span>
        </p>
        <p className="info-description">
          Rating:{' '}
          <span>
            <RateEmoji rate={rate} />
          </span>
        </p>
        <p className="info-description">
          {restaurant.isOpen ? 'Open' : 'Closed'}
        </p>
      </div>
    );
  };

  render() {
    return this.renderDetails();
  }
}

export { OnlineDetail };
