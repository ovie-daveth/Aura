import { Slot, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {


  return (
   <Stack>
      <Stack.Screen name="index"
      options={{headerShown: false}}
      />
       <Stack.Screen name="Profile"
      options={{headerShown: false}}
      />
   </Stack>
  );
}


 {/* <Text>Header</Text>
    <Slot />
    <Text>Footer</Text> */}
