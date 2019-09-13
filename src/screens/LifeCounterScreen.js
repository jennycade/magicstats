import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// vector icons
import { AntDesign, Entypo } from '@expo/vector-icons'

// my components
import LifeCounter from '../components/LifeCounter'

const LifeCounterScreen = () => {

  // state variables
  const [p1life, setp1life] = useState(20)
  const [p2life, setp2life] = useState(20)
  const [turnNum, setTurnNum] = useState(1)
  const [turnPlayer, setTurnPlayer] = useState('p1') // arbitrary; should be set with prop?

  return(
    <View style={styles.container}>
      <LifeCounter
        player='p2'
        decFunc={() => {setp2life(p2life - 1)}}
        incFunc={() => {setp2life(p2life + 1)}}
        life={p2life}
      />

      <TouchableOpacity style={styles.turnBar}>
        {turnPlayer === 'p1' ? <Entypo name='arrow-down' /> : <Entypo name='arrow-up' />}
        <Text>turn {turnNum}</Text>
        {turnPlayer === 'p1' ? <Entypo name='arrow-down' /> : <Entypo name='arrow-up' />}
      </TouchableOpacity>

      <LifeCounter
        player='p1'
        decFunc={() => {setp2life(p1life - 1)}}
        incFunc={() => {setp2life(p1life + 1)}}
        life={p1life}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  turnBar: {
    // flex: 1, // makes it disappear, why?
    flexDirection: 'row',
  }
})

export default LifeCounterScreen