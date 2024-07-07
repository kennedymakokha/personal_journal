// MyComponent.tsx

import React, { } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Logo } from '../../../images';

import { useNavigation } from '@react-navigation/native';
interface Props {
    body: any
}

const Auth: React.FC<Props> = ({ body }) => {
    const { navigate, goBack, ...rest } = useNavigation();


    return (
        <View className='w-full h-full flex bg-blue-400 items-center justify-center'>
            <View className="relative z-0 w-full h-1/3">
                <View className="flex  items-center justify-center">
                    <Image source={Logo}  className='rounded-md h-48   ' />
                    <Text className='text-red-600'>Put it in writting</Text>
                </View>
            </View>
            <ScrollView className="flex w-full h-2/3 py-4 bg-blue-100 rounded-t-[30px] shadow-2xl">
                {body}
            </ScrollView>
        </View>
    );
};


export default Auth;
