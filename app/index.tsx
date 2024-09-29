import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import {StatusBar} from "expo-status-bar"

export default function HomeScreen() {
  return (
      <View className='flex items-center justify-center flex-1 min-h-screen'>
        <Text className="text-3xl text-red-500">Hello</Text>
        <StatusBar style='auto' />
        <Link href='/Profile' style={{color: 'blue'}}>Go to Profile</Link>
      </View>
  );
}

