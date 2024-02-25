import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

const Categories = () => {

    const [ activeCategory, setActiveCategory ] = useState(null)

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        >
            {
                categories.map((categories, index) => {{
                    let isActive = categories.id == activeCategory
                    let btnClass = isActive ? ' bg-gray-600' : ' bg-gray-200'
                    let textClass = isActive ? ' font-semiBold text-gray-800' : ' text-gray-500'


                    return(
                        <View key={index} className='flex justify-center items-center mr-6'>
                            <TouchableOpacity
                                onPress={ () => setActiveCategory(categories.id)}
                                className={'p-1 rounded-full shadow bg-gray-200 ' + btnClass}
                            >
                                <Image style={{width: 45, height: 45}} source={categories.image} />
                            </TouchableOpacity>
                            <Text className={'text-sm ' + textClass}>{categories.name}</Text>

                        </View>
                    )
                }})
            }
        </ScrollView>
    </View>
  )
}

export default Categories