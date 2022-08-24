import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

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
    if (Platform.OS === 'web') {
      console.log('hello')
    } else {
      setSelectedImage({ localUri: pickerResult.uri })
    }
  }

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Sharing, is not available on your platform')
    }
    await Sharing.shareAsync(selectedImage.localUri)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image!!</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
      >
        <Image
          source={{ uri: selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200' }}
          style={styles.image}
        />
      </TouchableOpacity>
      {selectedImage
        ? (
        <Button
          title="Share this image"
          color="red"
          onPress={openShareDialog}
        />
          )
        : (
        <View/>
          )}

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
