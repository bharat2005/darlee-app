import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import StartButton from './StartButton'

const Card = ({cardData, type, isStarred}) => {
  return (
        <View style={{height:'100%', width:160, paddingHorizontal:4}}>

            <Pressable onPress={()=> router.push({pathname:'/magScreen', params: {cardId: cardData?.docId, type}})} style={{height:'100%', width:'100%', backgroundColor:'black', borderRadius:8}}>
              <Text style={{color:'white', textAlign:'center', marginVertical:'auto'}}>{cardData?.titleText}</Text>
            </Pressable>

            <View style={{position:'absolute', bottom:18, right:18}}>

              <StartButton isStarred={isStarred} type={type} cardId={cardData?.docId} />

            </View>

        </View>
  )
}

export default Card