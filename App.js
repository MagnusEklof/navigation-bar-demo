import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

function App({componentId}) {
  useEffect(() => {
    setTimeout(() => {
      Navigation.push(componentId, {
        component: {
          name: 'Page2',
        },
      });
    }, 2000);
  }, []);
  return <View style={styles.background} />;
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'blue',
  },
});

export default App;
