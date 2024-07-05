import { Image, Text, View } from "react-native"
import { back } from "../../../images"
import { primary } from "../../../utils/colors"

interface Props {
    title: string,
    isSuccess: boolean
    // navigation: any
}


export const PriodItem: React.FC<Props> = ({ title, isSuccess }) => {
    return (
        <View className='flex w-1/3 px-2 '>
            <View className={`flex w-full  h-full ${!isSuccess ? "bg-slate-300 opacity-40" : `bg-[#1a3e72]`} items-center justify-center  rounded-[15px] shadow-2xl`}>
                <Text style={{ color: "white" }} className={`text-white ${!isSuccess && "hidden"} font-bold text-blue-500`}>{title}</Text>
            </View>
        </View>


    )
}
