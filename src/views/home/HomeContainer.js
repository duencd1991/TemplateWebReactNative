import React from 'react';
import { View } from 'react-native';
import HomeView from './HomeView'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myState: 'This is my state'
    }
  }

  render() {
    const {
      myState
    } = this.state;

    return (
      <View>
        <HomeView myState={myState} />
      </View>
    );
  }
}