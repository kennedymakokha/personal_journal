import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { primary, primaryLight } from "../../utils/colors";


interface Props {

    msg: string;

}

export const Error: React.FC<Props> = (props) => {
    return (
        <View className="flex w-full px-10  items-center justify-center">
            <View className="flex w-full p-2 bg-red-200 rounded-md">
                <Text className='text-red-600 text-center'>{props.msg}</Text>
            </View>
        </View>
    )
}
