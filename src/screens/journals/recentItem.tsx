import { Image, Text, View } from "react-native"
import { back } from "../../../images"
import { primary } from "../../../utils/colors"
import { data } from "../../../utils/data"
import moment from "moment"
import { truncate } from "../../../utils/trancateText"

interface Props {
    data: string,
    bg: boolean
    isSuccess: boolean
    // navigation: any
}


export const Recent: React.FC<Props> = ({ data, isSuccess }) => {
    let item: any = data && data[0]
    return (

        <View className={` w-full ${isSuccess ? "relative z-0" : "flex h-40"} `}>
            {/* <Text className="italic text-bold text-red-800 font-serif">Map</Text> */}
            <Image source={back} className={`h-40  ${isSuccess ? "flex" : "hidden"} rounded-[15px] w-full`} />
            <View className={` ${isSuccess ? "absolute z-20" : "hidden"} left-4 right-4 flex  py-2 h-40 rounded-[15px]   `}>
                <View className={`${isSuccess ? "flex" : "hidden"} w-full  h-full`}>
                    <View className="flex w-full flex-row  h-10  justify-between ">
                        <View className="flex">
                            <Text className={`text-[${primary}] font-bold text-[23px] text-white`}>{isSuccess && item?.title && truncate(item?.title, 20)}</Text>
                        </View>
                        <Text className="text-slatet-200">{moment(item?.createdAt).format("Do MMMM YYYY")}</Text>
                    </View>
                    <View className="flex h-[50%]">
                        <Text>{isSuccess && item?.title && truncate(item?.content, 200)}</Text>
                    </View>

                    <Text className="text-right italic mt-2 ">{moment(item?.createdAt).fromNow()}</Text>
                </View>
            </View>
            <View className={`absolute left-0 right-0 flex   h-40 rounded-[15px] ${isSuccess ? "bg-[#1a3e72] opacity-80 " : "bg-slate-300 opacity-40"} shadow-2xl  z-10`}>

            </View>
        </View>



    )
}
