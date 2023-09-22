import React, { Component } from 'react';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        this.handleLocation,
        this.handleLocationError
      );
    } else {
      this.setState({ error: 'Geolocation is not supported by this browser.' });
    }
  }

  handleLocation = (position) => {
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude });
  };

  handleLocationError = (error) => {
    this.setState({ error: error.message });
  };

  render() {
    const { latitude, longitude, error } = this.state;

    return (
      <div>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
        )}
      </div>
    );
  }
}

export default Location;




