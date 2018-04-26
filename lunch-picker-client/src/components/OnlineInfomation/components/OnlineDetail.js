import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Gmap } from '../../Share';

class OnlineDetail extends Component {
  renderDetails = () => {
    const { restaurant } = this.props;
    if (restaurant.name == null) return null;

    return (
      <div className="information-container">
        <p className="info-title">{restaurant.name}</p>
        <p className="info-description">
          Category: <small>{restaurant.categories.join(' ')}</small>
        </p>
        <p className="info-description">
          Address: <small>{restaurant.address}</small>
        </p>
        <p className="info-description">
          Rating: <small>{restaurant.rating}</small>
        </p>
        <p className="info-description">
          {restaurant.isOpen ? 'Open' : 'Closed'}
        </p>
        <div className="info-description">
          <GridList cols={2.2}>
            {restaurant.photos.map((photo, index) => (
              <GridTile key={index}>
                <img src={photo} alt="restaurant images" />
              </GridTile>
            ))}
          </GridList>
        </div>

        <div className="info-map">
          <Gmap
            lat={restaurant.coordinates.latitude}
            lng={restaurant.coordinates.longitude}
            defaultZoom={15}
            isMarkerShown={true}
          />
        </div>
      </div>
    );
  };

  render() {
    return this.renderDetails();
  }
}

export { OnlineDetail };
