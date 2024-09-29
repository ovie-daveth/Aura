import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Prop = {
    title: string,
    handlePress: () => void,
    constainerStyle: string,
    textStyles?: string,
    isLoading?: boolean
}
const CustomButton = ({title, constainerStyle, handlePress, textStyles,isLoading}: Prop) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={handlePress} className={`${constainerStyle} bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${isLoading ? ' opacity-50' : ''}`} disabled={isLoading}>
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton