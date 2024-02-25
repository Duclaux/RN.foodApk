import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'

const ResturantCard = ({item}) => {
  return (
    <TouchableNativeFeedback>
      <View
        style={{
            shadowColor: themeColors.bgColor(0.2),
            borderRadius:7
        }} 
        className='shadow-lg bg-white rounded-3xl mr-3'
      >
        <Image className='h-36 w-64 rounded-t-3xl' source={item.image}/>
        <View className='px-3 pb-4 space-y-4'>
            <Text className='text-lg font-bold pt-2'>{item.name}</Text>
            <View className='flex-row items-center space-x-1'>
                <Image source={require('../assets/yellowStar.png')} className='h-4 w-4'/>
                <Text className='text-sm'>
                    <Text className='text-green-700'>{item.start}</Text>
                    <Text className='text-gray-700'>
                        ({item.reviews}) . <Text className='font-semibold'>{item.categories}</Text>
                    </Text>
                </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
                <Icon.MapPin color='gray' height={15} width={15}/>
                <Text className='text-gray-700'>Nearby. {item.address} </Text>
            </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default ResturantCard