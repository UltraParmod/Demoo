// Library
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

// Constants
import { hp, wp } from '../Constants/Responsive';
import Colors from '../Constants/Colors';
import Strings from '../Constants/Strings';

export default function Input({
    placeholder,
    keyboardType,
    value,
    onChangeText,
    maxLength,
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.PriceSymbol}>{Strings.PriceSymbol}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                placeholderTextColor={Colors.Gray}
                keyboardType={keyboardType ? 'phone-pad' : 'default'}
                value={value}
                onChangeText={onChangeText}
                maxLength={maxLength}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: hp(0.2),
        borderColor: Colors.LightGray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(2),
    },
    PriceSymbol: {
        color: Colors.Black,
        fontSize: hp(3),
    },
    input: {
        color: Colors.Black,
        paddingVertical: wp(1.8),
        fontSize: hp(2),
        fontWeight: '500',
    },
});
