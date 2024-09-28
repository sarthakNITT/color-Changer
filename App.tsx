import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [Background, setBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)] // Math.floor - get not a decimal value and the range of numbers will be till 16
    }
    setBackground(color)
  }
  return (
    <>
    <StatusBar backgroundColor={Background}/>
    <View style={[styles.container, {backgroundColor: Background}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.Actionbtn}>
          <Text style={styles.ActionbtnTxt}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Actionbtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  ActionbtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase'
  }
});

export default App;
