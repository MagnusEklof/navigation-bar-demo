import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

function Page2({componentId}) {
  useEffect(() => {
    setTimeout(() => {
      Navigation.mergeOptions(componentId, {
        navigationBar: {
          visible: false,
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
    backgroundColor: 'red',
  },
});

export default Page2;
