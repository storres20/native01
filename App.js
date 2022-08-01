import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import image from './assets/diamond-red.png'

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world!!</Text>
      <Image
        source={image}
        style={styles.image}
      />
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
  },
  image: { height: 200, width: 200 }
})
