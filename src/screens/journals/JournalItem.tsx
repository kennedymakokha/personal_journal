import { Image, Text, TouchableOpacity, View } from "react-native"
import { Callender, back } from "../../../images"
import { primary } from "../../../utils/colors"
import { useNavigation } from "@react-navigation/native";
import { DateContainer } from "../../components/dateComponent";
import { truncate } from "../../../utils/trancateText";
import moment from "moment";

interface Props {
    data: any,


}


export const JournalItem: React.FC<Props> = ({ data }) => {

    const { navigate, goBack, ...rest } = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigate("Journal", { name: data.title, params: data })} activeOpacity={1} className="flex w-full h-20 my-2 rounded-[15px] shadow-2xl flex-row bg-white px-2">
            <View className="w-[25%] h-full flex flex-col justify-center items-center ">
                <DateContainer close={console.log()} date={data.date} show={false} onConfirm={undefined} />
            </View>
            <View className="flex w-[75%] justify-center  ">
                <Text className='text-slate-500 font-bold'>{data.title}</Text>
                <Text className='text-slate-400 text-[10px]'>{truncate(data.content, 46)}</Text>
                <Text className='text-slate-300 text-right'>{moment(data?.date).format(" DD MMM YYYY")}</Text>  
            </View>
        </TouchableOpacity>
    )
}
export const JournalItemLoader: React.FC = () => {

    return (
        <View className="flex w-full h-20 my-2 animate-pulse rounded-[15px] shadow-2xl flex-row bg-slate-300 opacity-40 px-2">

        </View>
    )
}
