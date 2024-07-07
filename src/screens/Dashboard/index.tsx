// MyComponent.tsx

import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Multiple } from '../../../utils/multilple';
import { Fun, Personal, Travel, Work } from '../../../images';
import CardItem from './dashboardItem';




const Categories = [
    // "Work", "Travel"
    {
        title: "Personal", img: Personal
    },
    {
        title: "Fun", img: Fun
    },
    {
        title: "Work", img: Work
    },
    {
        title: "Travel", img: Travel
    }
]
const Dashboard: React.FC = () => {

    let count = []
    for (let index = 0; index < 10; index++) {
        count.push(index)
    }
    return (
        <View className="flex flex-col w-full h-full py-4 bg-white  shadow-2xl">
            <View className=" w-full h-full relative z-0">
                {/* <View className='w-full h-full  bg-red-100'></View> */}
                <View className="  h-full flex px-1  ">
                    <View className="flex w-full flex-row  h-full gap-1 px-1 flex-wrap">
                        {Categories.map((cat, i) => (
                            <CardItem key={i} title={cat.title} img={cat.img} navigation={undefined} />
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};


export default Dashboard;
