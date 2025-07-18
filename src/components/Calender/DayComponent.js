import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { dateStore } from '../../stores/dateStore'
import { format, parseISO } from 'date-fns'
import Toast from 'react-native-toast-message'

const DayComponent = ({date, marking, state, handlSheet, isMarked, isFutureToday}) => {
  const setSelectedDate = dateStore(state => state.setSelectedDate)

const handleDatePress = () => {
  if(isFutureToday) {
    Toast.show({
      type: 'custome',
      text1: 'Future Date',
      text2: 'You can not select a future date',
      props:{
        type: 'error'
      }
    })
    return
  }
  setSelectedDate(format(parseISO(date.dateString), 'yyyy-MM-dd'))
  handlSheet('open')
}




  return (
    <TouchableOpacity activeOpacity={state === 'disabled' ? 1 : 0.5} onPress={state === 'disabled' ? null : handleDatePress} style={{width:'100%', height:80, justifyContent:'center', alignItems:'center', borderBottomWidth:1, borderBottomColor:'#ccc', backgroundColor: state === 'today' ? 'blue' : 'transparent'}}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{state === 'disabled' ? '' : date?.day}</Text>
      {(isMarked && state !== 'disabled') && <View style={{width:10, height:10, backgroundColor:'blue', borderRadius:10, position:'absolute', top:0, right:0}} />}
    </TouchableOpacity>
  )
}

export default DayComponent