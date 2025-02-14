import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: any, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log(e)
        // saving error
    }
};
export const getData = async (key: any) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value
            // value previously stored
        }
        else {
            return undefined
        }
    } catch (e) {
        console.log(e)
        // error reading value
    }
};

