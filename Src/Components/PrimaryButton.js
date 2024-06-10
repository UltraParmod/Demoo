// Library
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

// Constants
import Colors from '../Constants/Colors';
import { hp, wp } from '../Constants/Responsive';

const activeOpacity = 0.8;
export default function PrimaryButton({ title, onPress }) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={activeOpacity}
            onPress={() => {
                onPress();
            }}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.PrimaryColor,
        padding: wp(3),
        borderRadius: wp(5),
        borderWidth: hp(0.2),
        borderColor: Colors.WhiteSmoke,
    },
    title: {
        color: Colors.Black,
        textAlign: 'center',
        fontSize: hp(2),
        fontWeight: '500',
        color: Colors.White,
    },
});
