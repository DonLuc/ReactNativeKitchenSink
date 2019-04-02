import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Container, Content, Header } from 'native-base';

class UserInterface extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>Accordion</Text>
            </ListItem>
            <ListItem>
              <Text>Action Sheet</Text>
            </ListItem>
            <ListItem>
              <Text>Deck Swiper</Text>
            </ListItem>
            <ListItem>
              <Text>Footer Tabs</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default UserInterface;
