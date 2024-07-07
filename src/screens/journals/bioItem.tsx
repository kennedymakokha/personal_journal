import { Image, Text, View } from "react-native"
import { back } from "../../../images"
import { useEffect, useState } from "react"
import { getGreatings } from "../../components/greetings"
import { useFetchuserQuery } from "../../../features/slices/userSlice"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from "react-native-gesture-handler"
interface Props {
    setShow: any
    isSuccess: any

}


export const Bio: React.FC<Props> = ({ setShow, isSuccess }) => {
    const [time, setTime] = useState("")
    const { data: userInfo } = useFetchuserQuery({})
    useEffect(() => {
        setTime(getGreatings())
    })

    return (
        <View className=" px-4  w-full my-2">
            <View className={` w-full ${isSuccess ? "relative z-0" : "flex h-20"} `}>
                {/* <Text className="italic text-bold text-red-800 font-serif">Map</Text> */}
                <Image source={back} className={`h-20  ${isSuccess ? "flex" : "hidden"} rounded-[15px] w-full`} />
                <View className={` ${isSuccess ? "absolute z-20" : "hidden"} left-4 right-4 flex  py-2 h-20 rounded-[15px]   `}>
                    <View className={`${isSuccess ? "flex" : "hidden"} w-full  h-full`}>
                        <View className="flex   flex-row  h-full items-center  justify-between ">
                            <Text className={` font-bold text-[23px] text-white capitalize`}>{time} {isSuccess && userInfo?.name}</Text>
                            <TouchableOpacity activeOpacity={1} onPress={() => setShow(true)}>
                                <Icon name="date-range" color="white" size={20} />
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
                <View className={`absolute left-0 right-0 flex   h-20 rounded-[15px] ${isSuccess ? "bg-[#1a3e72] opacity-80 " : "bg-slate-300 opacity-40"} shadow-2xl  z-10`}>

                </View>
            </View>
        </View>


    )
}
