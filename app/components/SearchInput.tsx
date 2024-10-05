import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import { router, usePathname } from 'expo-router'

type Prop = {
    value: string,
    placeHolder?: string
}
const SearchInput = ({ value, placeHolder}: Prop) => {

    const pathename = usePathname();
    const [searchValue, setSearchValue] = useState(value)
    return (
          <View className={`border-2 border-black-200 w-full h-12 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4`}>
            <TextInput className='flex-1 text-white font-pregular text-base' 
            value={searchValue} placeholder={placeHolder} placeholderTextColor='#CDCDE0' 
            onChangeText={(e) => setSearchValue(e)}
            />

            <TouchableOpacity
            onPress={() => {
                if(pathename.startsWith('search')) router.setParams({searchValue})
                    else router.push(`/search/${searchValue}`)

            }}
            disabled={!searchValue}
            >
                <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
            </TouchableOpacity>
            
          </View>
      )
}

export default SearchInput