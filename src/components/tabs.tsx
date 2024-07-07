import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"



export default function Tab(props: any) {
    return (
        <>
            {props.data.map((menu: any, i: number) => (
                <View key={i} className="flex h-full w-1/3 p-1 bg-blue-400  shadow-2xl ">
                    <TouchableOpacity activeOpacity={1} onPress={() => props.onChange(menu.title)} className={`flex h-full w-full px-1 ${menu.state === true ? "bg-blue-500" : "border-blue-300 border bg-blue-400"} items-center justify-center shadow-2xl rounded-md `}>
                        <Text className={`font-bold capitalize ${menu.state === true ? "" : "text-blue-900"}`}>{menu.title}</Text>
                    </TouchableOpacity>
                </View>

            ))}
        </>
    )
}

export const TabContainer = (props: any) => {
    return (<>
        {props.tab.title === props.tab1 && props.tab.state && <>
            <View className=' p-1 py-3'>
                {/* <TitleContainer title={props.title} /> */}
                {props.body}
            </View>
        </>}
    </>
    )

}