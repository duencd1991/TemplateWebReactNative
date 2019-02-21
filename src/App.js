import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route } from './routing';
import {
  Home
} from "./views";

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.appContainer}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 10,
    backgroundColor: 'green'
  }
});
