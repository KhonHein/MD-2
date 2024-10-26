import { Ionicons } from '@expo/vector-icons'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons size={24} color="black" name='cart-outline'/>
        <View style={styles.textContainer}>
            <Text style={styles.quantity}> 5 </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',

    },
    textContainer:{
        width:20,height:20,
        backgroundColor:'red',
        borderRadius:10,
        justifyContent:'center', alignItems:'center',
        marginLeft:-5,
        marginTop:-5,
    },
    quantity:{
        color:'white',
        fontSize:11,
        fontWeight:'bold'
    }
})
