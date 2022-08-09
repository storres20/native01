import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function App () {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required')
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (pickerResult.cancelled === true) {
      return
    }

    setSelectedImage({ localUri: pickerResult.uri })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image!!</Text>
      <Image
        source={{ uri: selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <Button
        title="Press Me"
        color="red"
        onPress={openImagePickerAsync}
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
  image: { height: 200, width: 200, borderRadius: 100, resizeMode: 'contain' }
})
