import { Image, Text, View } from "react-native"
import { back } from "../../../images"
import { primary } from "../../../utils/colors"

interface Props {
    title: string,

    // navigation: any
}


export const PriodItem: React.FC<Props> = ({ title }) => {
    return (
        <View className='flex w-1/3 px-2 '>
            <View className={`flex w-full bg-[${primary}] h-full items-center justify-center  rounded-[15px] shadow-2xl`}>
                <Text style={{ color: "white" }} className='text-white font-bold text-blue-500'>{title}</Text>
            </View>
        </View>


    )
}
