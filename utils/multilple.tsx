import { Text, View } from "react-native";


type Props = {
    count: number;
    row: boolean
    col: boolean;
    wrap: boolean;
    body: any;


}

export const Multiple: React.FC<Props> = (props) => {

    let count = []
    for (let index = 0; index < props.count; index++) {
        count.push(index)
    }
    return (
        <View className={`${props.row ? "flex-row gap-x-2" : "flex-col"} ${props.col ? "flex-col":"flex-row"}  }  ${props.wrap && "flex-wrap"} w-full flex transition duration-50 fade-in`} >
            {count.map((user, i) => (
                <View className={`${i === 10 - 1 && "border-r border-[#666666]"} `} key={i}>
                    {props.body}
                </View>
            ))}
        </View>
    )
    // let count = []
    // for (let index = 0; index < props.count; index++) {
    //     count.push(index)
    // }
    // return (
    //     <View className={`flex ${props.col ? "flex-col" : "flex-row"} w-full h-full py-4 bg-blue-100  shadow-2xl `} >

    //         {count.map((user, i) => (
    //             <View className={`${i === 9 - 1 && "border-r border-[#666666]"} `} key={i}>
    //                 {props.body}
    //             </View>
    //         ))}
    //     </View>
    // )
}

