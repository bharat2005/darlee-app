import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { format } from 'date-fns'
import DatePicker, {} from 'react-native-date-picker'
import Feather from '@expo/vector-icons/Feather';

const DateInputCard = ({primaryText, isSecondaryText, secondaryText, value, setFeildValue, exPrimaryText, exSecondaryText, expandable}) => {
  const [open, setOpen] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <View style={{width:'100%',paddingHorizontal:4}}>
     
     <View style={{width:'100%', borderRadius:12, backgroundColor:'white', padding:12, gap:18}}>

        <Text style={{fontSize:16, fontWeight:'700'}}>{primaryText}</Text>

        {isSecondaryText && (
            <Text style={{fontSize:14, fontWeight:'400', color:'gray'}}>{secondaryText}</Text>
        )}


        <TouchableOpacity onPress={()=> setOpen(true)} style={{width:'100%', height:50, flexDirection:'row', borderWidth:1, borderColor:'black', borderRadius:6, justifyContent:'space-between', paddingHorizontal:8, alignItems:'center'}}>
          <Text>{format(value, 'yyyy/MM/dd')}</Text>
          <Feather name="chevron-down" size={24} color="black" />
        </TouchableOpacity>



        {expandable && (
        <TouchableOpacity onPress={()=> setIsExpanded(prev => !prev)} style={{width:'50%'}}>
          <Text>{exPrimaryText}</Text>
        </TouchableOpacity>
        )}


        {
          isExpanded && (
            <View style={{paddingVertical:12, width:'100%'}}>
              <Text>{exSecondaryText}</Text>
              </View>
          )

        }



      <DatePicker
        modal
        title={'Date of Birth'}
        open={open}
        mode='date'
        date={value}
        onConfirm={(date) => {
          setOpen(false)
          setFeildValue(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />







     </View>

    </View>
  )
}

export default DateInputCard