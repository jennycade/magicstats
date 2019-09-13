import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// vector icons
import { AntDesign, Entypo } from '@expo/vector-icons'

// my components
import LifeCounter from '../components/LifeCounter'

// hard code just for now!
const firstPlayer = 'p1'

const LifeCounterScreen = () => {

  // state variables
  const [p1life, setp1life] = useState(20)
  const [p2life, setp2life] = useState(20)
  const [turnNum, setTurnNum] = useState(1)
  const [turnPlayer, setTurnPlayer] = useState(firstPlayer)

  // helper functions
  const nextTurn = () => {
    // toggles turnPlayer and advances turn number if it's time
    // 1 p1, 1 p2, 2 p1, 2 p2, ...
    // 1 p2, 1 p1, 2 p2, 2 p1, ...
    
    // advance turn?
    if (turnPlayer !== firstPlayer) {
      setTurnNum(turnNum + 1)
    }
    // toggle player
    setTurnPlayer(turnPlayer === 'p1' ? 'p2' : 'p1')
  }

  return(
    <View style={styles.container}>
      <LifeCounter
        player='p2'
        decFunc={() => {setp2life(p2life - 1)}}
        incFunc={() => {setp2life(p2life + 1)}}
        life={p2life}
      />

      <TouchableOpacity style={styles.turnBar} onPress={() => {nextTurn()}}>
        <Entypo style={styles.turnArrow} name={turnPlayer === 'p1' ? 'arrow-down' : 'arrow-up'} />
        <Text style={styles.turnText}>turn {turnNum}</Text>
        <Entypo style={styles.turnArrow} name={turnPlayer === 'p1' ? 'arrow-down' : 'arrow-up'} />
      </TouchableOpacity>

      <LifeCounter
        player='p1'
        decFunc={() => {setp1life(p1life - 1)}}
        incFunc={() => {setp1life(p1life + 1)}}
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
    justifyContent: 'space-around',
    
  },
  turnArrow: {
    fontSize: 20,
  },
  turnText: {
    fontSize: 20,
  },
})

export default LifeCounterScreen