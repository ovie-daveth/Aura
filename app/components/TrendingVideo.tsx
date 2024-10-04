import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { PostInterface } from '@/variables/Post';
import * as Animated from "react-native-animatable"
import { icons } from '@/constants';
import { ViewToken, ViewabilityConfig, FlatListProps } from 'react-native';
import {ResizeMode, Video} from 'expo-av'
interface TrendingItemsProps {
  activeItem: string;
  data: PostInterface;
}

interface TrendingVideoProps {
  posts: PostInterface[];
}

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItems = ({ activeItem, data }: TrendingItemsProps) => {
  const [play, setPlay] = useState(false);

  console.log("data to see", activeItem)
  return (
    <Animated.View
      className='mr-5'
      animation={activeItem === data.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: data?.video }} 
          className='w-52 h-72 rounded-[20px] mt-3 bg-white/10' 
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if(status.isLoaded) {
              setPlay(false)
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className='relative justify-center items-center'
        >
          <ImageBackground
            source={{ uri: data.thumbnail }}
            resizeMode='cover'
            className='w-52 h-72 rounded-[20px] overflow-hidden shadow-lg shadow-black/40'
          />
          <Image
            source={icons.play}
            className='absolute w-12 h-12'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};


const TrendingVideo = ({ posts }: TrendingVideoProps) => {
  const [activeItem, setActiveItem] = useState<string>(posts[0]?.$id);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 70,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key as string);
    }
  };

  return (
    <FlatList
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItems activeItem={activeItem} data={item} />
      )}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      contentOffset={{ x: 170 }} // Adjust if needed
    />
  );
};

export default TrendingVideo;
