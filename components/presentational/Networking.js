import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  List,
  ListItem
} from 'native-base';
class Networking extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('FetchComponent');
              }}
            >
              <Text>Fetch</Text>
            </ListItem>
            <ListItem>
              <Text>Post</Text>
            </ListItem>
            <ListItem>
              <Text>Common Errors</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Networking;
