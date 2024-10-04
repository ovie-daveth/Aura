import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { PostInterface } from '@/variables/Post'
import { icons } from '@/constants';
import { ResizeMode, Video } from 'expo-av';

interface PostProp {
    post: PostInterface;
  }
const Posts: React.FC<PostProp> = ({ post: {creator: {username, avatar}, title, thumbnail, video, prompt} }) => {

   const [isPlay, setIsPlay] = useState(false)
  return (
    <View className='flex-col items-center px-4 mb-14'>
        <View className='flex-row gap-3 items-start'>
            <View className=' justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
                    <Image source={{uri: avatar}} className='w-[106%] h-[106%] rounded-md' resizeMode='cover' />
                </View>
                <View className=' justify-center flex-1 ml-3 gap-y-1'>
                    <Text numberOfLines={1} className='text-white text-sm font-psemibold'>{title}</Text>
                    <Text className='text-xs text-gray-100 font-pregular' numberOfLines={1}>
                        {username}
                    </Text>
                </View>
            </View>
            <View className='pt-2'>
                <Image source={icons.menu} className='w-5 h-5' resizeMode='contain' />
            </View>
        </View>
        {
            isPlay ? (
                <Video
          source={{ uri: video }} 
          className='w-full h-60 rounded-[20px] mt-3 bg-white/10' 
          resizeMode={ResizeMode.COVER}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if(status.isLoaded) {
              setIsPlay(false)
            }
          }}
        />
            ) : (
                <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setIsPlay(true)}
                className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
                >
                    <Image source={{uri: thumbnail}} resizeMode='cover' className='w-full h-full rounded-xl mt-3' />
                    <Image source={icons.play} className='absolute  w-12 h-12' resizeMode='contain' />
                </TouchableOpacity>
            )
        }
    </View>
  )
}

export default Posts