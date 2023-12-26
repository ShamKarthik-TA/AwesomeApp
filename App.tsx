/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useCallback, useEffect } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevices } from "react-native-vision-camera";
function App() {
  const cameraPermission = Camera.getCameraPermissionStatus()
  console.log("cameraPermission",cameraPermission)
  useEffect(()=> {
    console.log()
    requestCameraPermission()
  },[])

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...')
    const permission = await Camera.getCameraPermissionStatus()
    console.log(`Camera permission status: ${permission}`)

    if (permission === 'denied') await Linking.openSettings()
  }, [])
  const devices = useCameraDevices()
  const device = devices.back
  console.log(devices)
  if (device == null) return <View>
    <Text>no Camera</Text>
  </View>
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}
export default App;