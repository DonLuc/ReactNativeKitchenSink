import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  List,
  Button,
  Left,
  ListItem,
  Container,
  Content,
  Header,
  Icon,
  Text
} from 'native-base';

class UserInterface extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={styles.backIcon}>
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

const styles = StyleSheet.create({
  backIcon: {
    flex: 1
  }
});

export default UserInterface;
