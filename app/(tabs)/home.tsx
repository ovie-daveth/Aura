import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '@/constants'
import SearchInput from '../components/SearchInput'
import TrendingVideo from '../components/TrendingVideo'
import EmptyState from '../components/EmptyState'
import Posts from '../components/Posts'
import useAppwrite from '@/lib/useApprite'
import { getLatestPost, getPosts } from '@/lib/apprite'
import { useGlobalContext } from '@/context/globalProvider'


const home = () => {

  const { posts, isLoading, refetch } = useAppwrite(getPosts);
  const { posts: latest } = useAppwrite(getLatestPost);
  const [refreshing, setRefreshing] = useState(false);
  
  const {user, setUser, isLoggdedIn, setIsLoggdedIn} = useGlobalContext();
 

  const onRefresh = async() => {
    setRefreshing(true)
    await refetch();
    setRefreshing(false)
}

  return (
    <SafeAreaView className='bg-primary pb-10 h-full'>
      <StatusBar style='light' />
      <FlatList 
        data={posts}
        // data={[]}
        keyExtractor={(item) => item?.$id}
        renderItem={({ item }) => <Posts post={item} />}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
              <View className='justify-between flex-row mb-6 items-start'>
                <View>
                  <Text className='font-pmedium text-sm  text-gray-100'>Welcome Back</Text>
                  <Text className='text-2xl font-psemibold text-white'>{user?.username}</Text>
                </View>
                <View className='mt-1.5'>
                  <Image source={images.logoSmall} className='w-9 h-10' resizeMode='contain' />
                </View>
              </View>

              <SearchInput  placeHolder='Search for a video topic'  value="" />

                <View className='w-full flex-1 pt-1 pb-5'>
                  <Text className='text-gray-100 text-lg font-pregular mb-3'>Latest Videos</Text>
                  <TrendingVideo posts={latest} />
                </View>
          </View>
        )}
        ListEmptyComponent={() => (
         <EmptyState
         title="No Video found"
         subTitle="Be the first to upload a video"
         />
        )}
        refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}

      />
    </SafeAreaView>
  )
}

export default home



// [
//   { 
//     "$collectionId": "66fb9f34001e9046c61d", 
//     "$createdAt": "2024-10-01T15:50:16.469+00:00", 
//     "$databaseId": "66fb9ec9002dd435a064", 
//     "$id": "66fc1a38000b88b81286", 
//     "$permissions": [], 
//     "$updatedAt": "2024-10-01T15:50:16.469+00:00", 
//     "creator": 
//         { 
//           "$collectionId": "66fb9efb00264d4a6f73", 
//           "$createdAt": "2024-10-01T07:59:50.854+00:00", 
//           "$databaseId": "66fb9ec9002dd435a064", 
//           "$id": "66fbabf60006186e0399", 
//           "$permissions": [Array], 
//           "$updatedAt": "2024-10-01T07:59:50.854+00:00", 
//           "accountId": "66fbabf4001827c3d63d", 
//           "avatar": "https://cloud.appwrite.io/v1/avatars/initials?name=rusti+&project=66fb9c6a0002736bfcd1", 
//           "email": "oviedavid77@gmail.com", 
//           "username": "rusti " 
//         }, 
//     "prompt": "Picture the future of coding with AI. Show AR VR",
//     "thumbnail": "https://i.ibb.co/Xkgk7DY/Video.png", 
//     "title": "How AI Shapes Coding Future", 
//     "video": "https://player.vimeo.com/video/949581999?h=4672125b31" 
//   }
// ]