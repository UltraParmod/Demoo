import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './Src/Navigations/StackNavigation'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StackNavigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})