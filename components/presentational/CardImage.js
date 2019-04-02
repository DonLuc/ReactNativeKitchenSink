import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
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
class CardImage extends Component {
  render() {
    return (
      <Container padder>
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
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'
                }}
              />
              <Body>
                <Text>Native Base</Text>
                <Text note>Geeky Ants</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://www.careermatch.com/job-prep/wp-content/uploads/sites/29/2017/11/computer_programmer_profile_image.jpg'
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
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

export default CardImage;
