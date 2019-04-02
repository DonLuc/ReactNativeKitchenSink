import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  List,
  ListItem,
  Content,
  Text,
  Header,
  Left,
  Right,
  Card,
  Button,
  CardItem,
  Icon
} from 'native-base';
import {
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native-gesture-handler';

class CardDisplay extends Component {
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
          <Card>
            <CardItem>
              <Icon active name="address" />
              <Text
                onPress={() => {
                  this.props.navigation.navigate('CardImage');
                }}
              >
                Card Image
              </Text>
              <Right style={{ flex: 1 }}>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="address" />
              <Text>Card Showcase</Text>
              <Right style={{ flex: 1 }}>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
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
export default CardDisplay;
