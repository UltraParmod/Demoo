// Library
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

// Constants
import Colors from '../Constants/Colors'
import { hp, wp } from '../Constants/Responsive'

const activeOpacity = .9
const TabButton = ({ title, onPress, containerStyle }) => {
    return (
        <TouchableOpacity style={{ ...styles.btnContainer, ...containerStyle }} activeOpacity={activeOpacity} onPress={() => {
            onPress()
        }}>
            <Text style={styles.btnTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabButton

const styles = StyleSheet.create({
    btnContainer: {
        width: '45%',
        backgroundColor: Colors.White,
        paddingVertical: hp(1),
        paddingHorizontal: wp(4),
        borderBottomWidth: hp(.3),
        position: 'relative',
        bottom: hp(-.3),
        borderBottomColor: Colors.LightGray,
        paddingVertical: wp(5),
    },
    btnTitle: {
        textAlign: 'center',
        fontSize: hp(2.2),
        fontWeight: '400',
        color: Colors.Black
    }
})