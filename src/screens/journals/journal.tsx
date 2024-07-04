// MyComponent.tsx

import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Callender, back } from '../../../images';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { DateContainer } from '../../components/dateComponent';
import moment from 'moment'
import { Inputcontainer } from '../../components/inputContainer';
import Create from './create';
import { primary } from '../../../utils/colors';


const Journals: React.FC = ({ route }: any) => {
    const data = route.params.params
    const [edit, setEdit] = useState(false)
    return (
        <View className="flex w-screen bg-blue-100    ">
            <View className=" w-full h-full  relative z-0">
                <ScrollView className="flex w-full p-4 ">
                    <TouchableOpacity activeOpacity={1} onPress={() => setEdit(false)} className="flex flex-row justify-between">
                        <View className='flex items-center h-20 justify-center flex-col'>
                            <Text className='text-slate-800'>{moment(data.createdAt).format("dddd DD MMMM YYYY")}</Text>
                        </View>
                        <View className="w-[35%] h-28 flex flex-col justify-center items-center ">
                            <DateContainer date={data.createdAt} />
                        </View>
                    </TouchableOpacity>
                    <Text className='text-4xl text-blue-400 pb-2 font-bold capitalize'>{data.title}</Text>
                    <Text className='text-slate-500 text-[18px] text-[20px] text-justify'>{data.content}</Text>
                    <View className="flex p-2 h-14 justify-center">
                        <View className='flex  h-full flex-row items-center px-2 rounded-md bg-blue-100'>
                            <Icon name="calendar" color={primary} className='text-blue-400' size={20} />
                            <Text className='text-slate-400'> {moment(data.createdAt).format("dddd DD MMMM YYYY")}</Text>
                        </View>
                    </View>

                </ScrollView>
                <TouchableOpacity activeOpacity={1} onPress={() => setEdit(true)} className="absolute p-4 right-0 top-[85%] flex justify-center items-center z-10">
                    <View className="flex w-14 h-14 items-center justify-center rounded-full bg-blue-400 shadow-2xl">
                        <Icon name="note" color="white" size={20} />
                    </View>
                </TouchableOpacity>
                {edit && <>
                    <View className="absolute w-full h-full right-0 top-[15%] flex justify-center items-center z-10">
                        <View className="flex w-full h-full items-center  justify-center  rounded-[10px] bg-blue-300 shadow-2xl">

                        </View>
                    </View>
                    <View className="absolute w-full h-full right-0 top-[15%] flex justify-center items-center z-20">

                        <View className="flex w-full h-full items-center justify-center rounded-[10px] shadow-2xl">
                            <Create data={data} />
                        </View>
                    </View>
                </>}
            </View>
        </View>
    );
};


export default Journals;
