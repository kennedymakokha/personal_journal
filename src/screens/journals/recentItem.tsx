import { Image, Text, View } from "react-native"
import { back } from "../../../images"
import { primary } from "../../../utils/colors"

interface Props {
    title: string,
    bg: boolean
    // navigation: any
}


export const Budge: React.FC<Props> = ({ title, bg }) => {
    return (

        <View className={` w-full  relative z-0`}>
            {/* <Text className="italic text-bold text-red-800 font-serif">Map</Text> */}
            <Image source={back} className="h-28   rounded-[15px] w-full " />
            <View className={`absolute left-4 right-4 flex  py-2 h-28 rounded-[15px]   z-20`}>
                <View className="flex w-full  h-full ">
                    <View className="flex w-full flex-row  h-10  justify-between ">
                        <View className="flex">
                            <Text className={`text-[${primary}] font-bold text-[23px] text-white`}>Aluta Contin...</Text>
                        </View>
                        <Text className="text-slatet-200">Sat 17th 2024</Text>
                    </View>
                    <Text>Lorem ipsum...</Text>
                    <Text className="text-left italic ">3 Days ago</Text>
                </View>
            </View>
            <View className={`absolute left-4 right-0 flex border p-2 h-28 rounded-[15px] bg-black opacity-40 shadow-2xl  z-10`}>

            </View>
        </View>



    )
}
