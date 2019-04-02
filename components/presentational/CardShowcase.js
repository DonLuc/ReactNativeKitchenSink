import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Header,
  Left,
  Right,
  Body,
  Card,
  CardItem,
  Icon,
  Thumbnail
} from 'native-base';
class CardShowcase extends Component {
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
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'
                }}
              />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri:
                    'https://www.careermatch.com/job-prep/wp-content/uploads/sites/29/2017/11/computer_programmer_profile_image.jpg'
                }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
              <Text>Your text here</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  backIcon: {
    flex: 1
  }
});
export default CardShowcase;
