import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { 
  SafeAreaView
} from 'react-native-safe-area-context';
import JurosScreen from './components/JurosScreen';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <JurosScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

export default App;