import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ListView, StyleSheet } from 'react-native';
import pokemon from './pokemonStore';

export default class Home extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
      number: 0
    }
  }
  updateText = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {
    const {
      dataSource,
      number
    } = this.state;
    return (
      <View style={styles.body}>
        <Text style={styles.title}>ListView</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        <Text onPress={this.updateText}>{`Number ${number}`}</Text>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    fontSize: '25pt',
    color: 'yellow'
  }
});
