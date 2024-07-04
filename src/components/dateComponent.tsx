import { Image, Text, TextInput, View } from "react-native"
import { primary, primaryLight } from "../../utils/colors";

import Icon from 'react-native-vector-icons/Feather'
import { Callender } from "../../images";
import moment from "moment";
interface Props {
    date: any

}

export const DateContainer: React.FC<Props> = ({ date }) => {
    return (
        <View className=" w-full h-full relative z-0">
            <Image source={Callender} className="w-full h-full" />
            <View className="absolute top-[22%] left-[25%] right-[25%]  flex justify-center items-center z-10">
                <Text className="text-[10px]  text-white font-[800]">{moment(date).format("MMM")}</Text>
            </View>
            <View className="absolute top-[38%] left-[25%] right-[25%]  flex justify-center items-center z-10">
                <Text className={`text-[20px]  text-blue-500 font-[900]`}>{moment(date).format("DD")}</Text>
            </View>
            <View className="absolute top-[65%] left-[25%] right-[25%]  flex justify-center items-center z-10">
                <Text className={`text-[8px]  text-blue-500 font-[900]`}>{moment(date).format("dddd")}</Text>
            </View>
        </View>


    )
}
