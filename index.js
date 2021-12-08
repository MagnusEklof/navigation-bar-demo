import App from './App';
import {Navigation} from 'react-native-navigation';
import Page2 from './Page2';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Page2', () => Page2);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      drawBehind: true,
      backgroundColor: 'transparent',
    },
    topBar: {
      visible: false,
    },
    // navigationBar: {
    //   visible: false,
    // },
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});
