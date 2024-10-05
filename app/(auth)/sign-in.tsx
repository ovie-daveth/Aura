import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import { Link, router } from 'expo-router'
import { SignIn } from '@/lib/apprite'
import { useGlobalContext } from '@/context/globalProvider'

const SignInScreen = () => {

  const [isSubmitting, setisSubmitting] = useState(false)
  const {user, setUser} = useGlobalContext();
  
  const [form, setform] = useState({
    email: "",
    password: ""
    
  })

  const submit = async () => {
    if(!form.email || !form.password) Alert.alert('Error', "Form cannot be empty");

    setisSubmitting(true);

    try {
      await SignIn(form.email, form.password);
      
      router.replace('/home');
    } catch (error: any) {
      Alert.alert('Error', error.message)
    } finally {
      setisSubmitting(false)
    }

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