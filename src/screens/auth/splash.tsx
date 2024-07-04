// MyComponent.tsx

import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';

const Splash = () => {
    const { navigate, goBack, ...rest } = useNavigation();
    useEffect(() => {
        setTimeout(() => navigate("registrer"), 3000)

    }, [])


    return (
        <View className="flex w-full h-screen items-center justify-center">
            <View className="flex animate-spin h-10 w-20 bg-yellow-300"></View>
        </View>

    );
};


export default Splash;
