import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

// vector icons
import { AntDesign, Entypo } from '@expo/vector-icons'

const LifeCounter = (props) => {
  return(
    <View style={[styles.lifeCounter]}>
      <TouchableOpacity style={styles.iconButtonContainer} onPress={props.decFunc}>
        <AntDesign style={styles.iconButton} name='minuscircleo' />
      </TouchableOpacity>
      <Text style={styles.lifeText}>{props.life}</Text>{/* add ability to pull up roller for changing life here */}
      <TouchableOpacity style={styles.iconButtonContainer} onPress={props.incFunc}>
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
  iconButtonContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  iconButton: {
    fontSize: 50,
  },
  lifeText: {
    fontSize: 50,
    flex: 4,
    textAlign: 'center',
  }
})

export default LifeCounter