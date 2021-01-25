import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EditBlog extends Component {
  constructor(props) {
			console.warn(props.route.params.item.title);
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> EditBlog {this.props.route.params.item.title} </Text>
      </View>
    );
  }
}
