import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '../../contexts/AuthContextProvider'

const GoogleAuthComp = () => {
    const {googleLogin} = useAuth()
  return (
    <View style={{width:'100%', height:50, paddingHorizontal:12}}>
        
        <TouchableOpacity onPress={googleLogin} style={{width:'100%', height:'100%', borderRadius:12, backgroundColor:'snow', borderWidth:1, borderColor:'black', justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'black'}}>Google</Text>
        </TouchableOpacity>

    </View>
  )
}

export default GoogleAuthComp