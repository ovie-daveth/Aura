import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'

type Prop = {
    title: string,
    value: string,
    handleChange: (e: any) => void
    otherStyle?: string,
    keyboardType?: any
    placeHolder?: string
}
const FormField = ({title, value, handleChange, otherStyle, keyboardType, placeHolder, ...props}: Prop) => {

    const [showPassword, setshowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyle}`}>
          <Text className={`text-base text-gray-100 font-pmedium`}> {title} </Text>

          <View className={`border-2 border-black-200 w-full h-12 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row`}>
            <TextInput className='flex-1 text-white font-psemibold text-base' value={value} placeholder={placeHolder} placeholderTextColor='#7b7b8b' 
            onChangeText={handleChange}
            secureTextEntry={title === "Password" && !showPassword}
            />
 
            {title === 'Password' && 
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} resizeMode='contain' className='w-6 h-6' />
            </TouchableOpacity>
            }
          </View>
        </View>
      )
}

export default FormField