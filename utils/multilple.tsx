import { View } from "react-native";


interface Props {
    count: number;
    row: boolean;
    col: any;
    wrap: boolean;
    body: any;

    onPress: () => void;
}

export const Multiple: React.FC<Props> = (props) => {

    let count = []
    for (let index = 0; index < props.count; index++) {
        count.push(index)
    }
    return (
        <View className={`${props.row && "flex-row gap-x-2"} ${props.col && "flex-col "}  }  ${props.wrap && "flex-wrap"} w-full flex transition duration-50 fade-in`} >
            {count.map((user, i) => (
                <View className={`${i === 375 - 1 && "border-r border-[#666666]"} `} i={i} key={i}>
                    {props.body}
                </View>
            ))}
        </View>
    )
}
