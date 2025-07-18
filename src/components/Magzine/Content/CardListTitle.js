import { View, Text } from 'react-native'
import React from 'react'

const CardListTitle = ({listData}) => {
  return (
    <View style={{width:'100%', height:40, flexDirection:'row', alignItems:'center', paddingHorizontal:12}}>
        <Text>{listData?.title}</Text>
    </View>
  )
}

export default CardListTitle