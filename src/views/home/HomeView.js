import React, { Component } from 'react'
import { Alert, Text, View, StyleSheet, Button } from 'react-native';
import List from "../../components/List";

class HomeView extends Component {

  _onPressButton = () => {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>
          {this.props.myState}
        </Text>
        <View style={styles.viewContainer}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
              color="#841584"
            />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="This looks great!"
            />
            <Button
              onPress={this._onPressButton}
              title="OK!"
              color="#841584"
            />
          </View>
        </View>

        <List />
      </View >
    )
  }

}
export default HomeView;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 400,
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    height: 40,
    lineHeight: 40
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
})