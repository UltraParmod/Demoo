// Library
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';

// Constants
import VectorIcon from '../../../Constants/VectorIcon';
import { hp, wp } from '../../../Constants/Responsive';
import Colors from '../../../Constants/Colors';
import ImagePath from '../../../Constants/ImagePath';

const iconSize = hp(2.5);
const PaidService = ({ title, titlePara, type, name }) => {
    return (
        <View style={styles.container}>
            <VectorIcon
                type={type}
                name={name}
                size={iconSize}
                color={Colors.PrimaryColor}
                style={styles.iconStyle}
            />
            <View>
                <Text style={styles.resumebuilder}>{title}</Text>
                <View style={styles.titlesContainer}>
                    <Text style={styles.titlePara}>{titlePara}</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.arrowLeft}
                        onPress={() => {
                            Alert.alert('RightArrow');
                        }}>
                        <Image source={ImagePath.arrowLeft} style={styles.arrowIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PaidService;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: wp(2),
        paddingVertical: hp(0.5),
        borderWidth: hp(0.1),
        borderColor: Colors.LightGray,
    },
    iconStyle: {
        marginRight: wp(1),
    },
    titlesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resumebuilder: {
        fontWeight: '700',
        color: Colors.Black,
        fontSize: hp(1.8),
    },
    titlePara: {
        width: '87%',
        fontSize: hp(1.7),
        color: Colors.Gray
    },
    arrowIcon: {
        justifyContent: 'flex-end',
        width: hp(2.5),
        height: hp(2.5),
        marginRight: wp(3),
    },
});
