import React from 'react';

import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  // Image,
} from 'react-native';
import Sound from 'react-native-sound';

// import Sound from 'react-native-sound';

const soundList = [
  require('./assests/numbers/one.wav'),
  require('./assests/numbers/two.wav'),
  require('./assests/numbers/three.wav'),
  require('./assests/numbers/four.wav'),
  require('./assests/numbers/five.wav'),
  require('./assests/numbers/six.wav'),
  require('./assests/numbers/seven.wav'),
  require('./assests/numbers/eight.wav'),
  require('./assests/numbers/nine.wav'),
];

// import One from './assests/numbers/one.wav';
// import Two from './assests/numbers/two.wav';
// import Three from './assests/numbers/three.wav';
// import Four from './assests/numbers/four.wav';
// import Five from './assests/numbers/five.wav';
// import Six from './assests/numbers/six.wav';
// import Seven from './assests/numbers/seven.wav';
// import Eight from './assests/numbers/eight.wav';

const App = () => {
  const playSound = sound => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('NOT ABLE TO PLAY SOUND');
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 500);

    soundVar.release();
  };
  return (
    <ScrollView style={styles.conatiner}>
      <View style={styles.gridContainer}>
        {soundList.map(sound => (
          <TouchableOpacity
            key={sound}
            style={styles.box}
            onPress={() => {
              playSound(sound);
            }}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    // flex: 1,
    backgroundColor: '#1b262c',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    // width: '46%',
    // marginVertical: 6,
    // backgroundColor: '#0f4c75',
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 100,
    color: '#ff4301',
  },
});

export default App;
