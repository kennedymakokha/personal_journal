import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { primary, primaryLight } from "../../utils/colors";


interface Props {

    onClick: () => void;
    title: string;

}

export const Button: React.FC<Props> = (props) => {
    return (
        <View className={`flex w-full my-8  px-10   flex-col `}>
            {/* <Text className={`text-xl font-bold my-2 text-[${primary}]`}>{props.label}</Text> */}
            <TouchableOpacity activeOpacity={1} onPress={props.onClick} className={`flex  bg-[#1a3e72] w-full border h-14 items-center justify-center flex-row px-2 rounded-md border-slate-400 `}>
                <Text className="text-blue-800 text-white text-xl font-bold tracking-widest">{props.title}</Text>

            </TouchableOpacity >
        </View>

    )
}
