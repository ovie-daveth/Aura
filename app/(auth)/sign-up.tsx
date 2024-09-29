import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'

const SignUpScreen = () => {

  const [isSubmitting, setisSubmitting] = useState(false)
  const [form, setform] = useState({
    email: "",
    password: "",
    username: ""
    
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
          <Text className='text-lg text-white mt-8 font-psemibold'>Sign Up to Aura</Text>
          <FormField
          title="Email"
          value={form.email}
          handleChange={(e) => setform({...form, email: e})}
          otherStyle="mt-7"
          keyboardType="email-address"
          />
           <FormField
          title="Username"
          value={form.username}
          handleChange={(e) => setform({...form, username: e})}
          otherStyle="mt-7"
          />
           <FormField
          title="Password"
          value={form.password}
          handleChange={(e) => setform({...form, password: e})}
          otherStyle="mt-7"
          keyboardType="password"
          />

          <CustomButton title='Sign Up to Aura' constainerStyle='mt-7' handlePress={submit} isLoading={isSubmitting} />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-sm text-gray-100 font-pregular'>Have an account</Text>
            <Link href="/(auth)/sign-in" className='text-sm font-psemibold text-secondary-100'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreen