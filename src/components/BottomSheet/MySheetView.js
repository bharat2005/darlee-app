import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import MySheetViewHeader from './MySheetViewHeader'
import MyBottomSheetDate from './MyBottomSheetDate'
import MyFormikView from './Formik/MyFormikView'
import { useDayLog } from '../../hooks/useDayLog'
import { dateStore } from '../../stores/dateStore'
import { useMutateDayLog } from '../../hooks/useMutateDayLog'


const MySheetView = ({handlSheet, weekDays}) => {
  const selectedDate = dateStore(state => state.selectedDate)
  const {data: dayLog, error} = useDayLog(selectedDate)
  const {mutateAsync: mutateDayLog, error: errorMutate} = useMutateDayLog(selectedDate, weekDays)




  const handleFormikSubmit = async(values) => {
    await mutateDayLog({dayLogData: values})
    handlSheet('close')
  }




  return (
    <KeyboardAvoidingView style={{width:'100%', height:'100%'}} behavior='height' keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 60}>
        <MySheetViewHeader handlSheet={handlSheet} />

        <MyBottomSheetDate  selectedDate={selectedDate} /> 

        <MyFormikView handleFormikSubmit={handleFormikSubmit} dayLog={dayLog} />


    </KeyboardAvoidingView>
  )
}

export default MySheetView