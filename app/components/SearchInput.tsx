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
const SearchInput = ({title, value, handleChange, otherStyle, keyboardType, placeHolder, ...props}: Prop) => {

    const [showPassword, setshowPassword] = useState(false)
    return (
          <View className={`border-2 border-black-200 w-full h-12 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4`}>
            <TextInput className='flex-1 text-white font-pregular text-base' value={value} placeholder={placeHolder} placeholderTextColor='#7b7b8b' 
            onChangeText={handleChange}
            secureTextEntry={title === "Password" && !showPassword}
            />

            <TouchableOpacity>
                <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
            </TouchableOpacity>
            
          </View>
      )
}

export default SearchInput