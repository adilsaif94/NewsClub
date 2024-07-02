import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>0</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    text:{
        fontSize:50,
    }
})