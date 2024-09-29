import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import {StatusBar} from "expo-status-bar"
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from './components/CustomButton';
import {router, Redirect} from "expo-router"

export default function HomeScreen() {
  return (
     <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full items-center justify-center min-h-[85vh] h-[95vh] px-4'>
            <Image source={images.logo} 
            className='w-[130px] h-[84px]'
            resizeMode='contain'
            />

        <Image source={images.cards} 
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
            />

            <View className='relative mt-5'>
              <Text className='text-3xl text-white font-bold text-center'>Discover Endless Possibilities with {' '}<Text className='text-secondary-200' >Aura</Text></Text>

              <Image source={images.path} 
            className=' w-[136px] h-[15px] absolute -bottom-2 -right-8'
            resizeMode='contain'
            />
            </View>

            <Text className='text-sm text-gray-100 mt-7 text-center font-pregular'>Where Creativity meets innovation: embark on a journey of limitless explorations with Aura</Text>

            <CustomButton title='Continue With Email' handlePress={() => router.push('/sign-in')} constainerStyle='w-full mt-7' />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style="light" />
     </SafeAreaView>
  );
}

