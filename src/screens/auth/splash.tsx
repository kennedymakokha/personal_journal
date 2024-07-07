// MyComponent.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { Multiple, MultipleBox } from '../../../utils/multilple';
import { back, HW, Logo } from '../../../images';

const Splash = () => {
    const { navigate, goBack, ...rest } = useNavigation();
    let getToken = async () => {
        let v = await AsyncStorage.getItem("token")
        if (v) {
            navigate("journals")
        } else {
            navigate("registrer")
        }
    }
    useEffect(() => {
        getToken()
    }, [])

    useEffect(() => {
        setTimeout(() => getToken, 3000)

    }, [])


    return (
        <View className="bg-g w-full h-full relative z-0">
            <Image source={HW} className='w-full h-full' />
            <View className="absolute  top-2 right-0 bg-blue-300 w-full h-full opacity-90 left-0 flex justify-center items-center z-20">
                <Image source={Logo} />
            </View>
            {/* <View className="absolute bg-blue-900  opacity-50 w-full h-full inset-0 flex justify-center items-center z-10">
            </View> */}
        </View>


    );
};

{/* <MultipleBox count={50} body={<MultipleBox row={true} count={30} body={<View className={`flex h-5 w-5  border-[#666666] border-l border-b `}></View>} />} /> */ }

export default Splash;
