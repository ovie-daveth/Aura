import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '@/constants'

type Prop = {
    icon: any,
    color: string,
    name: string,
    focussed: any
}
const TabIcon = ({icon, color, name, focussed} : Prop) => {
    return (
        <View className='items-center justify-center gap-1'>
            <Image
            source={icon}
            resizeMode='contain'
            tintColor={color}
            className='w-6 h-6'
            />
            <Text className={`${focussed ? "font-psemibold" : "font-pregular"} text-xs`} style={{color: color}}>{name}</Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
        <Tabs 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#cdcde0',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84
            }
        }}
        >
            <Tabs.Screen 
            name="home"
            options={{
                title:"Home",
                headerShown: false,
                tabBarIcon: ({color, focused}) => {
                    return <TabIcon
                        icon={icons.home}
                        color={color}
                        name="Home"
                        focussed={focused} />
                }
            }}
            />
             <Tabs.Screen 
            name="bookmark"
            options={{
                title:"Bookmark",
                headerShown: false,
                tabBarIcon: ({color, focused}) => {
                    return <TabIcon
                        icon={icons.bookmark}
                        color={color}
                        name="Bookmark"
                        focussed={focused} />
                }
            }}
            />
             <Tabs.Screen 
            name="create"
            options={{
                title:"Create",
                headerShown: false,
                tabBarIcon: ({color, focused}) => {
                    return <TabIcon
                        icon={icons.plus}
                        color={color}
                        name="Create"
                        focussed={focused} />
                }
            }}
            />
             <Tabs.Screen 
            name="Profile"
            options={{
                title:"Profile",
                headerShown: false,
                tabBarIcon: ({color, focused}) => {
                    return <TabIcon
                        icon={icons.profile}
                        color={color}
                        name="Home"
                        focussed={focused} />
                }
            }}
            />
            
        </Tabs>
    </>
  )
}

export default TabsLayout