// Library
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

// Constants
import { hp, wp } from '../Constants/Responsive'
import Colors from '../Constants/Colors'

export default function SelectedButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            onPress()
        }}>
            <Text style={styles.title}> {title} {' '}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: hp(.1),
        borderColor: Colors.PrimaryColor,
        borderRadius: wp(5),
        padding: wp(2),
        marginHorizontal: wp(1)
    },
    title: {
        color: Colors.Black,
        textAlign: 'center',
        fontSize: hp(1.6)
    }
})