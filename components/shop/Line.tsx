import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'

const Line = () => {
  return (
    <ThemedView style={styles.container}>
    </ThemedView>
  )
}

export default Line

const styles = StyleSheet.create({
    container:{
        width:'50%',
        height:1,
        backgroundColor:'gray',
        marginHorizontal:'auto',
        marginVertical:10
    }
})