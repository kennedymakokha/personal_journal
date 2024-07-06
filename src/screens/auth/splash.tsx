// MyComponent.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Multiple, MultipleBox } from '../../../utils/multilple';

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
        <View className="flex w-full   ">

            <View className="relative z-0 w-full">
                <View className="absolute  w-full bg-blue-200  flex flex-wrap  px-2  z-8">

                    {/* <MultipleBox count={50} body={<MultipleBox row={true} count={30} body={<View className={`flex h-5 w-5  border-[#666666] border-l border-b `}></View>} />} /> */}
                </View>

                <View className="absolute top-0 bg-red-100 flex justify-center  items-center z-10">

                </View>
            </View>

        </View>

    );
};


export default Splash;
