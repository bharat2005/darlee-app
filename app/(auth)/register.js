import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoogleAuthComp from '../../src/components/Auth/GoogleAuthComp'
import EmailAuthComp from '../../src/components/Auth/EmailAuthComp'

const Register = () => {
  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{flex:1, gap:28}}>
      
    <EmailAuthComp />

    <GoogleAuthComp />
      
    </SafeAreaView>
      </TouchableWithoutFeedback>
  )
}

export default Register