import { View, Text, FlatList } from 'react-native'
import React from 'react'

type Prop = {
    posts: any[]
}
const TrendingVideo = ({posts}: Prop) => {
  return (
    <FlatList
        horizontal
        
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
            <Text className='text-white'>{item.id}</Text>
        )}
    />
  )
}

export default TrendingVideo