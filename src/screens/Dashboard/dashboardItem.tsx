// MyComponent.tsx

import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Multiple } from '../../../utils/multilple';
import { Fun, Personal, Travel, Work } from '../../../images';

interface Props {
    title: string,
    img: any
    navigation: any
}


const CardItem: React.FC<Props> = ({ title, navigation }) => {
    return (
        <View className="flex w-1/2 h-1/4  rounded-lg shadow-2xl  p-1 ">
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Auth")} className="flex w-full rounded-lg h-full  bg-blue-100 px-2 items-center justify-center  ">
                <Image source={
                    title === "Personal" ? Personal
                        : title === "Fun" ? Fun : title === "Travel" ? Travel : Work
                } className='h-20 w-20 object-fit mb-4 ' />
                <Text className='text-black font-bold'>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}




export default CardItem;
