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
import { createStackNavigator, createAppContainer } from 'react-navigation';

class UserInterface extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={styles.backIcon}>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content>
          <List>
            <ListItem
              onPress={() => this.props.navigation.navigate('Accordion')}
            >
              <Text>Accordion</Text>
            </ListItem>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('Card');
              }}
            >
              <Text>Card</Text>
            </ListItem>
            <ListItem>
              <Text>Deck Swiper</Text>
            </ListItem>
            <ListItem>
              <Text>Activity Indicator</Text>
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

/* 
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);
*/
export default UserInterface;
