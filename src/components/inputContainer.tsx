import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native"
import { primary, primaryLight } from "../../utils/colors";

import Icon from 'react-native-vector-icons/Feather'
import { useCallback, useState } from "react";
interface Props {


    placeholder: string;
    onChange: any;
    type: any;
    required: boolean;
    secure: boolean;
    label: string;
    showPass: any
    multiline: boolean
    value: any;
    clickable: any
  

}

export const Inputcontainer: React.FC<Props> = (props) => {
    return (

        <View className="flex w-full  px-10  flex-col ">
            <View className="flex flex-row items-center">
                <Text className={`text-xl font-bold my-2 capitalize text-[${primary}]`} style={{ color: primary }}>{props.label}</Text>
                {props.required && <Text className="text-red-900  text-xl"> *</Text>}
            </View>
            <>
                {props.clickable ? <TouchableOpacity activeOpacity={1} onPress={props.onChange} className={`flex w-full h-14 border flex-row items-center justify-center px-2 rounded-md border-slate-400 `}>
                    <Text className={`w-full text-slate-500 px-2`}>
                        {props.placeholder}
                    </Text>
                </TouchableOpacity > :
                    <View className={`flex w-full border flex-row px-2 rounded-md border-slate-400 `}>
                        <TextInput
                            placeholder={props.placeholder}
                            placeholderTextColor={primaryLight}
                            secureTextEntry={props.secure}
                            keyboardType={props.type}
                            multiline={props.multiline}
                            numberOfLines={props.multiline ? 5 : 1}
                            value={props.value}
                            onChangeText={text => props.onChange(text)}
                            className={`${props.type === "password" ? "w-3/4" : "w-full"} ${props.multiline ? "float" : "h-14"} text-slate-500 px-2`} />
                        <View className={`${props.type === "password" ? "flex w-1/4  items-center justify-center " : "hidden"}`}>
                            <Icon onPress={props.showPass} name={`${props.secure ? "eye" : "eye-off"}`} size={20} color={primary} />

                        </View>
                    </View>}
            </>

        </View>

    )
}
export const SelectInputContainer: React.FC<Props> = (props) => {

    const [show, setShow] = useState(false);
    const [userinput, setUserinput] = useState(null);
    const openPicker = useCallback(
        () => {
            Keyboard.dismiss()
            setShow(!show)
        },
        [show]
    );

    const hidePicker = useCallback(
        (item: any) => {
            setShow(false)
            setUserinput(item)
            console.log(item)
        },
        [show, userinput]
    );
    return (

        <View className="flex w-full  px-10  flex-col ">
            <View className="flex flex-row items-center">
                <Text className={`text-xl font-bold my-2 capitalize text-[${primary}]`} style={{ color: primary }}>{props.label}</Text>
                {props.required && <Text className="text-red-900  text-xl"> *</Text>}
            </View>


            <View className={`flex w-full border flex-row ${show ? "rounded-t-md" : "rounded-md"} px-2  border-slate-400 `}>
                <TouchableOpacity className="flex flex-row" activeOpacity={1} onPress={openPicker}>

                    <TextInput
                        placeholder={show ? '' : 'Mr'}
                        placeholderTextColor={primaryLight}
                        readOnly={true}
                        value={"Select a Category "}

                        className={` w-3/4 h-14 text-slate-500 px-2`} />
                    <View className={`flex w-1/4  items-center justify-center`}>
                        <Icon name={`${!show ? "chevron-down" : "chevron-up"}`} size={20} color={primary} />

                    </View>

                </TouchableOpacity>
                {show ?
                    <FlatList
                        className={`bg-blue-300 shadow-md ${show ? "border-l border-r border-b rounded-b-md" : ""}  border-slate-400 z-50 absolute  mt-14 w-[106%] -left-[0.5] right-0`}
                        data={props.array}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => hidePicker(item)}>
                                <Text className="px-4 py-2 text-slate-500">
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.name}
                    />
                    : null}
            </View>
        </View>

    )
}
