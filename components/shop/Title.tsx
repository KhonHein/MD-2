import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

type Props = {
    title:string;
    actionText:string;
}
const Title = ({title,actionText}:Props) => {
  return (
    <ThemedView style={styles.container}>
    <ThemedText style={styles.title}>{title}</ThemedText>
    <Pressable>
        <ThemedText style={styles.btnText}>{actionText}</ThemedText>
    </Pressable>
</ThemedView>
  )
}

export default Title

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginRight: 20,
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
    btnText: {
        color: 'gray',
        fontWeight: '500',
    },
});