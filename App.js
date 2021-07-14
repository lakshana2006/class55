import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync({
      uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'

    },
    {
      shouldPlay:true
    }
    );
  }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'pink', 
        marginTop:100,
        borderRadius:100,
        alignItems:'center',
     }}onPress={this.playSound}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        }}>
         PRESS ME </Text>
      </TouchableOpacity>
    );

  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <SoundButton />
      </View>
    );
  }
}
