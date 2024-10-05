import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { icons } from '@/constants'
import { useGlobalContext } from '@/context/globalProvider'
import EmptyState from '../components/EmptyState'
import Posts from '../components/Posts'
import useAppwrite from '@/lib/useApprite'
import { getLatestPost, getPostByAuthor, getPosts, SignOut } from '@/lib/apprite'
import { router } from 'expo-router'

 const Profile = () => {

  const {user, setUser, isLoggdedIn, setIsLoggdedIn} = useGlobalContext();

  
  const { posts, refetch } = useAppwrite(() => getPostByAuthor(user));

  const Logout = async() => {
    if(isLoggdedIn){
      await SignOut();
      setUser(null);
      setIsLoggdedIn(false)
      router.replace("/sign-in");
    }
  }
  
  console.log(user?.avatar?? "")
    return (
      <SafeAreaView className='bg-primary h-full'>
          <StatusBar style='light' />
           <View className=''>
                  <FlatList 
                      data={posts}
                        // data={[]}
                        keyExtractor={(item) => item?.$id}
                        renderItem={({ item }) => <Posts post={item} />}
                        ListHeaderComponent={() => (
                          <View className='mt-14 mb-24 relative w-full'>
                          <View>
                           <TouchableOpacity
                           className=' absolute right-8 top-9'
                           onPress={Logout}
                           >
                              <Image source={icons.logout} className='w-5 h-5' resizeMode='contain' />
                           </TouchableOpacity>
                            <View className='mt-24 items-center'>
                               <View className='w-28 h-28 '>
                                <View className='border border-secondary w-full items-center justify-between'>
                                    <Image 
                                      source={{uri: user?.avatar}} 
                                      resizeMode='contain'
                                      className='w-20 h-20'
                                      />
                                      <Text className='text-white text-lg leading-6 tracking-widest capitalize mt-3'>{user?.username}</Text>
                                    </View>
                                    <View className='flex-row justify-between mt-5 items-center'>
                                      <View className='justify-between items-center'>
                                        <Text className='text-white font-psemibold text-lg'>10</Text>
                                        <Text className='text-gray-100 font-psemibold text-xs'>Posts</Text>
                                      </View>
                                      <View className='justify-between items-center'>
                                        <Text className='text-white font-psemibold text-lg'>1.2K</Text>
                                        <Text className='text-gray-100 font-psemibold text-xs'>Views</Text>
                                      </View>
                                    </View>
                               </View>
                            </View>
                          
                          </View>
                       </View>
                        )}
                        ListEmptyComponent={() => (
                        <EmptyState
                        title="No Video found"
                        subTitle="You have not uploaded a video yet"
                        />
                      )}
                  />
               </View>
      </SafeAreaView>
    )
  }


export default Profile