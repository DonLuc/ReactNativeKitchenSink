import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Header,
  Left,
  Icon
} from 'native-base';
class CardImage extends Component {
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
