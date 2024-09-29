import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'

const SignInScreen = () => {

  const [isSubmitting, setisSubmitting] = useState(false)
  const [form, setform] = useState({
    email: "",
    password: ""
    
  })

  const submit = () => {

  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-[95vh] px-4 my-6'>
          <Image source={images.logo}
          resizeMode='contain'
          className='w-[115px] h-[35px]'
          />
          <Text className='text-lg text-white mt-8 font-psemibold'>Log in to Aura</Text>
          <FormField
          title="Email"
          value={form.email}
          handleChange={(e) => setform({...form, email: e})}
          otherStyle="mt-7"
          keyboardType="email-address"
          />
           <FormField
          title="Password"
          value={form.password}
          handleChange={(e) => setform({...form, password: e})}
          otherStyle="mt-7"
          keyboardType="password"
          />

          <CustomButton title='Sign In' constainerStyle='mt-7' handlePress={submit} isLoading={isSubmitting} />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-sm text-gray-100 font-pregular'>Dont't have an account</Text>
            <Link href="/(auth)/sign-up" className='text-sm font-psemibold text-secondary-100'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignInScreen