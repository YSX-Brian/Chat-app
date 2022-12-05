import React from 'react';
import { View, Text } from 'react-native';

export default class Chat extends React.Component {
  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }

  render() {
    let background = this.props.route.params.background;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: background }}>
        {/* check if the background is black or purple and adjust text color */}
        <Text style={{ color: background == '#090C08' || background == '#474056' ? 'white' : 'black' }}>
          Welcome to the Chat Screen!
        </Text>
      </View>
    )
  }
}