import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageUpload, ImageInfo, SelectedModal } from './components';
import { Button } from '../Share';
import { detectTextInLogo, searchByName, getDetailById } from '../../actions';
import './styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelectedModal: false
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.restaurant.detectedResults.length !== 0 &&
      prevProps.restaurant.detectedResults !==
        this.props.restaurant.detectedResults &&
      !this.state.showSelectedModal
    ) {
      this.setState({
        showSelectedModal: true
      });
    }
  };

  selectRestaurantName = async name => {
    await this.props.searchByName(name);
    await this.props.getDetailById(this.props.restaurant.searchSummary.id);
    this.setState({
      showSelectedModal: false
    });
  };

  handleSave = () => {};

  render() {
    const { detectTextInLogo, restaurant } = this.props;
    return (
      <div className="wrapper">
        <ImageUpload detectTextInLogo={detectTextInLogo} />
        <ImageInfo restaurant={restaurant.onlineDetail} />
        <SelectedModal
          open={this.state.showSelectedModal}
          handleSelect={this.selectRestaurantName}
          names={restaurant.detectedResults}
        />
        <Button label="Save" disabled={false} onClick={this.handleSave} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { restaurant: state.restaurant };
};

export default connect(mapStateToProps, {
  detectTextInLogo,
  searchByName,
  getDetailById
})(Home);
