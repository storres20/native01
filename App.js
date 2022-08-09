import React from 'react'
import { StyleSheet, View, Text, Image, Button, Alert } from 'react-native'
// import image from './assets/diamond-red.png'

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world!!</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <Button
        title="Press Me"
        color="red"
        onPress={() => Alert.alert('Hello!!!')}
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
  image: { height: 200, width: 200, borderRadius: 100 }
})
