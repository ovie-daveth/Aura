import { View, Text } from 'react-native'
import React from 'react'
import { PostInterface } from '@/variables/Post'

interface PostProp {
    post: PostInterface;
  }
const Posts: React.FC<PostProp> = ({ post }) => {

  return (
    <View className=''>
      <Text className='text-white'>{post?.creator?.username}</Text>
    </View>
  )
}

export default Posts