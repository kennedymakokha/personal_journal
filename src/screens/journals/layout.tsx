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


const Journals: React.FC = ({ route, children }: any) => {
    const data = route.params.params
    const [edit, setEdit] = useState(false)
    return (
        <View className="flex w-screen bg-blue-100    ">
            <View className=" w-full h-full  relative z-0">

                {children}


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
