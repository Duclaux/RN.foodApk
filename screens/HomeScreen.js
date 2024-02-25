import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { featured } from '../constants'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"/>

      {/* search bar */}
      <View className='flex-row items-center space-x-1 px-4 pb-2'>
        <View className='flex-row items-center flex-1 p-3 rounded-full border border-gray-300'>
            {/* search icon */}
            <Icon.Search height="25" width="25" stroke="gray"/>
            <TextInput placeholder='Restaurants' className='ml-2 flex-1'/>
            <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
                {/* icon position */}
                <Icon.MapPin height={20} width={20} color='gray'/>
                <Text className='text-gray-600'>Douala, Dla-CMR</Text>
            </View>
        </View>

        <View style={{backgroundColor: themeColors.bgColor(1)}} className='p-3 rounded-full'>
            <Icon.Sliders width={20} height={20} strokeWidth={2.5} stroke='white'/>
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:20
        }}
        >
            {/* catgories */}
            <Categories />

            {/* featured */}
            <View className='mt-5'>
                {
                    [featured, featured, featured].map((item, index) => {
                      return(
                        <FeaturedRow
                          key={index}
                          title={item.title}
                          restaurants={item.restaurants}
                          description={item.description}
                        />
                      )
                    })
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen