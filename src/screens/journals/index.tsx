// MyComponent.tsx

import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Budge } from './recentItem';
import { Callender } from '../../../images';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { PriodItem } from './priodItem';
import { JournalItem } from './JournalItem';



const Journals: React.FC = () => {

    return (
        <View className="flex w-full  p-4   ">
            <Budge bg={true} title='ken' />
            <View className="flex w-full flex-row h-10 mt-4  ">
                <PriodItem title="Weekly" />
                <PriodItem title="monthly" />
                <PriodItem title="monthly" />
            </View>

            <View className=" w-full h-full relative z-0">
                <ScrollView className="flex w-full gap-y-4 mt-4">
                    <JournalItem title="" />
                    <JournalItem title="" />
                    <JournalItem title="" />
                    <JournalItem title="" />
                    <JournalItem title="" />
                    <JournalItem title="" />
                    <JournalItem title="" />
                    <JournalItem title="" />
                    <JournalItem title="" />
                    <JournalItem title="" />
                </ScrollView>
                <View className="absolute right-0 top-[57%] flex justify-center items-center z-10">
                    <View className="flex w-20 h-20 items-center justify-center rounded-full bg-blue-400 shadow-2xl">
                        <Icon name="note" color="white" size={40} />
                    </View>
                </View>
            </View>


        </View>
    );
};


export default Journals;
