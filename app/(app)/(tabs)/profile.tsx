import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSession } from '@/providers/ctx';
import { ThemedText } from '@/components/ThemedText';

const profile = () => {
  const { signOut } = useSession();
  return (
    <SafeAreaView>
      <Text>profile</Text>
      <Pressable>
      <ThemedText
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        Sign Out
      </ThemedText>
      </Pressable>
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({})