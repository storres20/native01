import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: '#fff'
  }
})
