/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import AccordionDisplay from './components/presentational/AccordionDisplay';
import UserInterface from './components/presentational/UserInterface';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  List,
  ListItem
} from 'native-base';
import CardDisplay from './components/presentational/CardDisplay';
import CardImage from './components/presentational/CardImage';
import CardShowcase from './components/presentational/CardShowcase';
import Networking from './components/presentational/Networking';
import FetchComponent from './components/presentational/FetchComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('UI');
              }}
            >
              <Text>UI Components</Text>
            </ListItem>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('Networking');
              }}
            >
              <Text>Networking & Storage</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App
    },
    UI: {
      screen: UserInterface
    },
    Accordion: {
      screen: AccordionDisplay
    },
    Card: {
      screen: CardDisplay
    },
    CardImage: {
      screen: CardImage
    },
    CardShowcase: {
      screen: CardShowcase
    },
    Networking: {
      screen: Networking
    },
    FetchComponent: {
      screen: FetchComponent
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);
export default createAppContainer(AppNavigator);
