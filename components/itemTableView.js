import React from 'react';
import { Text, View } from 'react-native';
import colors from '../assets/colors'

const ItemView = ({ label, value, color }) => (
            <View style={{borderBottomWidth: 1,
                borderBottomColor: color,
                borderStyle: 'dashed',}}>
                <Text style={{borderColor:colors.firstColor }}>{label}: {value}</Text>
            </View>
        );
export default ItemView;
