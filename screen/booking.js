import React from "react";
import {filter, uniqueId} from 'lodash';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import colors from "../assets/colors";
import FormField from "../components/formField";
import ItemView from "../components/itemTableView";
import Button from "../components/button";

const Booking = ({data, onpress}) => {
    const [filterBy, setFilterBy] = React.useState('==');
    const [label, setLabel] = React.useState('BookingId');
    const [value, setValue] = React.useState(data);
    const filterData = (key, actuallyValue) => {
        console.log(key, actuallyValue);
        if (actuallyValue) {
            switch (filterBy) {
                case "==":
                    setValue(filter(data, (item) => item[key].toLocaleString() === actuallyValue.toLocaleString()));
                    break;
                case ">":
                    setValue(filter(data, (item) => item[key].toLocaleString() > actuallyValue.toLocaleString()));
                    break;
                case "<":
                    setValue(filter(data, (item) => item[key].toLocaleString() < actuallyValue.toLocaleString()));
                    break;
                default:
                    setValue(data);
                    break;
            }
        } else {
            setValue(data);
        }
    };
    const response = value.map(((item, index) => {
        const {bookingId, bookingTime, streetAddress, bookingPrice, client} = item;
        const color = index % 2 !== 0 ? colors.background : colors.fourthColor;
        const backgroundColor = index % 2 === 0 ? colors.background : colors.fourthColor;
        return (<View key={uniqueId()} style={{backgroundColor}}>
            <ItemView label="bookingId" value={bookingId} color={color}/>
            <ItemView label="bookingTime" value={bookingTime} color={color}/>
            <ItemView label="streetAddress" value={streetAddress} color={color}/>
            <ItemView label="bookingPrice" value={bookingPrice} color={color}/>
            <ItemView label="Cliente" value={client} color={color}/>
        </View>);
    }));
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 50}}/>
            <Button pressed={()=>onpress()} children={"Cerrar Sesion"}/>
            <RNPickerSelect
                placeholder={{label: "Seleccione el campo a filtrar"}}
                onValueChange={(value) => setLabel(value)}
                items={[
                    {itemKey:'BookingId' ,label: 'BookingId', value: 'bookingId'},
                    {itemKey: 'bookingPrice',label: 'bookingPrice', value: 'bookingPrice'},
                ]}
            />
            <RNPickerSelect
                placeholder={{label: "Seleccione el tipo de filtrado"}}
                onValueChange={(value) => setFilterBy(value)}
                items={[
                    {itemKey: '1',label: '==', value: '=='},
                    {itemKey: '2', label: '>', value: '>'},
                    {itemKey: '3', label: '<', value: '<'},
                ]}
            />
            <View>
                <FormField
                    label={'Ingrese el valor'}
                    onChangeText={(text) => filterData(label, text)}
                />
            </View>
            <ScrollView style={{backgroundColor: colors.fourthColor, flex: 1}}>
                {response}
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.fourthColor,
        flex: 1
    },
    inputBox: {
        width: 150,
        backgroundColor: colors.background,
        borderRadius: 25,
        paddingHorizontal: 16,
        marginRight: 5,
        marginLeft: 5,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 150,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});

export default Booking;
