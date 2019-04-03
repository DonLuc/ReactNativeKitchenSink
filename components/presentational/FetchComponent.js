import React, { Component } from 'react';
import { View } from 'react-native';

const openDataUrl = '';
class FetchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('https://public.opendatasoft.com/api/v2/')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.links
          },
          function() {}
        );
      })
      .catch(error => {
        console.warn(error);
      });
    console.warn(this.state.dataSource);
  }

  render() {
    return <View />;
  }
}

export default FetchComponent;
