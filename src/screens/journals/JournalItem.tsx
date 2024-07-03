import { Image, Text, View } from "react-native"
import { Callender, back } from "../../../images"
import { primary } from "../../../utils/colors"

interface Props {
    title: string,

    // navigation: any
}


export const JournalItem: React.FC<Props> = ({ title }) => {
    return (
        <View className="flex w-full h-20 my-2 rounded-[15px] shadow-2xl flex-row bg-white px-2">
            <View className="w-[25%] h-full flex justify-center items-center ">
                <Image source={Callender} className='h-full w-full' />
            </View>

            <View className="flex w-[75%] justify-center  ">
                <Text className='text-slate-500'>Kennesy Makokha</Text>
                <Text className='text-slate-300 text-[10px]'>Kennesy Makokha Kennesy Makokha Kennesy Makokha Kennesy Makokha</Text>
            </View>

        </View>


    )
}
