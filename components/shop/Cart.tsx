import { Ionicons } from '@expo/vector-icons'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'

export default class Cart extends Component {
  render() {
    return (
      <ThemedView style={styles.container}>
        <Ionicons size={24} color="gray" name='cart-outline'/>
        <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.quantity}> 5 </ThemedText>
        </ThemedView>
      </ThemedView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textContainer: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
    marginTop: -5,
  },
  quantity: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});
