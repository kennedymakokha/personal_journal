import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            displayedDate: moment(),
        };
    }

    setDates = (dates) => {
        this.setState({
            ...dates,
        });
    };

    render() {
        const { startDate, endDate, displayedDate } = this.state;
        return (
            <DateRangePicker
                onChange={this.setDates}
                endDate={endDate}
                startDate={startDate}
                displayedDate={displayedDate}
                range
            >
                <View className="flex w-full flex-row justify-right ">
                    <View className="flex  w-10 flex-row h-10  rounded-full  shadow-2xl items-center justify-center  bg-blue-900 ">
                        <Icon name="date-range" color="white" size={20} />
                        {/* <Text className="font-bold ">Date Range</Text> */}
                    </View>
                </View>


            </DateRangePicker>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
});