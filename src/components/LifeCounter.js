import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Picker } from 'react-native'

// vector icons
import { AntDesign, Entypo } from '@expo/vector-icons'

const LifeCounter = (props) => {

  // picker generator
  const picker = []
  for (i=100; i>0; i--) {
    picker.push(<Picker.Item label={i} value={i} key={i} />)
  }

  return(
    <View style={[styles.lifeCounter]}>
      <TouchableOpacity style={styles.iconButtonContainer} onPress={props.decFunc}>
        <AntDesign style={styles.iconButton} name='minuscircleo' />
      </TouchableOpacity>
      <Picker
        selectedValue={props.life}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => props.changeLife(parseInt(itemValue))}
        >
        {picker}
      </Picker>

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
  },
  picker: {
    width: 100,
    height: 50,
  }
})

export default LifeCounter