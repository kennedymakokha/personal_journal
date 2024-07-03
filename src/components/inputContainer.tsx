import { Text, TextInput, View } from "react-native"
import { primary, primaryLight } from "../../utils/colors";

import Icon from 'react-native-vector-icons/Feather'
interface Props {

 
    placeholder: string;
    onChange: any;
    type: any;
    required: boolean;
    secure: boolean;
    label: string;
    showPass: any

}

export const Inputcontainer: React.FC<Props> = (props) => {
    return (

        <View className="flex w-full  px-10  flex-col ">
            <Text className={`text-xl font-bold my-2 capitalize text-[${primary}]`} style={{ color: primary }}>{props.label}</Text>
            <View className={`flex w-full border flex-row px-2 rounded-md border-slate-400 `}>
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={primaryLight}
                    secureTextEntry={props.secure}
                    keyboardType={props.type}
                    onChangeText={text => props.onChange(text)}
                    className={`${props.type === "password" ? "w-3/4" : "w-full"} h-14  px-2`} />
                <View className={`${props.type === "password" ? "flex w-1/4 items-center justify-center " : "hidden"}`}>
                    <Icon onPress={props.showPass} name={`${props.secure ? "eye" : "eye-off"}`} size={20} color={primary} />

                </View>
            </View>
        </View>

    )
}
