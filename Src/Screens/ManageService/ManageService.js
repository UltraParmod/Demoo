// Libray
import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Constants
import Strings from '../../Constants/Strings';
import { hp } from '../../Constants/Responsive';
import Colors from '../../Constants/Colors';

// Components
import TabButton from '../../Components/TabButton';
import Wallet from './smollComponents/Wallet';
import Funnel from './smollComponents/Funnel';


const ManageService = () => {
    const [isTabBution, setIsTabButton] = useState([0]);
    return (
        <View style={styles.container}>

            {/* TabButton */}
            <View style={styles.btnContainer}>
                <TabButton
                    title={Strings.Wallet}
                    onPress={() => {
                        setIsTabButton(0)
                    }}
                    containerStyle={{ borderBottomColor: isTabBution == 0 ? Colors.PrimaryColor : Colors.LightGray }}
                />
                <TabButton
                    title={Strings.Funnel}
                    onPress={() => {
                        setIsTabButton(1)
                    }}
                    containerStyle={{ borderBottomColor: isTabBution == 1 ? Colors.PrimaryColor : Colors.LightGray }}
                />

            </View>

            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <KeyboardAwareScrollView extraHeight={150} showsVerticalScrollIndicator={false}>
                {/* Wallet  */}
                {isTabBution == 0 ? (
                    <Wallet />
                ) : null}
                {/* Funnel */}
                {isTabBution == 1 ? (
                    <Funnel />
                ) : null}
                {/* </ScrollView > */}
            </KeyboardAwareScrollView>
        </View>

    );
};

export default ManageService;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    btnContainer: {
        flexDirection: 'row',
        borderBottomWidth: hp(0.3),
        borderBottomColor: Colors.LightGray,
        justifyContent: 'center',
    },

});
