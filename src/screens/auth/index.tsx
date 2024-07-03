// MyComponent.tsx

import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Logo } from '../../../images';
import { primary } from '../../../utils/colors';

import Login from './login'
import { Multiple } from '../../../utils/multilple';
interface Props {
   
}

const Auth: React.FC<Props> = () => {

    // const [login, { isLoading, isError, error }] = useLoginMutation();
    const [isForget, setForgetPass] = React.useState(true);
    const [item, onChangeText] = React.useState({
        name: '123456789', password: '123456789',
        email: "",
        pass_confirm: ""
    });


  
    return (
        <View className='w-full h-full flex bg-blue-200 items-center justify-center'>
            <View className="relative z-0 w-full h-1/3">
                {/* <View className="absolute sm:top-24  flex flex-wrap   z-8">
                    <Multiple count={7} body={<View className={`flex h-10 w-10  border-[#666666] border-l border-b border-t`}></View>} />
                    <Multiple count={7} col body={<Multiple count={7} body={<View className={`flex h-10 w-10  border-[#666666] border-l border-b `}></View>} />} />
                </View> */}
                <View className="flex  items-center justify-center">
                    <Image source={Logo} className='rounded-md  ' />
                    <Text className='text-red-600'>Put it in writting</Text>
                </View>

            </View>

            <View className="flex w-full h-2/3 py-4 bg-blue-100 rounded-t-[30px] shadow-2xl">
                <Login  />
            </View>
        </View>
    );
};


export default Auth;
