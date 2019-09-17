import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Landing from './screens/Landing';

export default class App extends React.Component<any, { visible: boolean }>
{
  state = {
    visible: false,
  };

  render()
  {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Landing />
        </View>
      </PaperProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
});
