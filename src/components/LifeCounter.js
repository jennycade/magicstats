import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

// vector icons
import { AntDesign, Entypo } from '@expo/vector-icons'

const LifeCounter = (props) => {
  return(
    <View style={[styles.lifeCounter]}>
      <TouchableOpacity onPress={props.decFunc}>
        <AntDesign style={styles.iconButton} name='minuscircleo' />
      </TouchableOpacity>
      <Text style={styles.lifeText}>{props.life}</Text>{/* add ability to pull up roller for changing life here */}
      <TouchableOpacity onPress={props.incFunc}>
        <AntDesign style={styles.iconButton} name='pluscircleo' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  lifeCounter: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    fontSize: 20,
    flex: 1, // doesn't seem to do anything
    alignSelf: 'center', // doesn't do anything
    backgroundColor: 'green',
  },
  lifeText: {
    fontSize: 50,
    flex: 4,
    backgroundColor: 'red',
    textAlign: 'center',
  }
})

export default LifeCounter