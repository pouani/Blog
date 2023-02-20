import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>EditScreen - {navigation.getParam('id')}</Text>
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({})