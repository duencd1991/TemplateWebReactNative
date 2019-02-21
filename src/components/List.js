import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        {
          id: 0,
          name: 'Ben',
        },
        {
          id: 1,
          name: 'Susan',
        },
        {
          id: 2,
          name: 'Robert',
        },
        {
          id: 3,
          name: 'Mary',
        }
      ]
    }
  }
  alerItemName = (item) => {
    alert(item.name)
  }

  render() {
    const {
      names
    } = this.state;
    return (
      <View style={styles.container}>
        {
          names.map((item, index) => (
            <Button key={item.id} title={item.name} onPress={() => this.alerItemName(item)}></Button>
          ))
        }
      </View>
    );
  }
}
export default List

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c'
  }
})