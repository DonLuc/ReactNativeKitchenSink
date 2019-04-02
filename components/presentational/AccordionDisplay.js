import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Button,
  Left,
  Icon,
  Content,
  Text,
  Accordion
} from 'native-base';

const dataArray = [
  {
    title: 'Accordion 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Accordion 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Accordion 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

class AccordionDisplay extends Component {
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
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} />
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

export default AccordionDisplay;
