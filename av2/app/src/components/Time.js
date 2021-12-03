import React  from 'react';
import Moment from 'react-moment';
import {View} from "react-native";

export default class Timere extends React.Component {
    render() {
        const sec = new Date().getSeconds();

        return (
            <View>
                <Moment date={sec} />
            </View>
        )
    }
}
