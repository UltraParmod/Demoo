
// Library
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// Constants
import VectorIcon from '../../../Constants/VectorIcon';
import Colors from '../../../Constants/Colors';
import { hp, wp } from '../../../Constants/Responsive';
import Input from '../../../Components/Input';
import PrimaryButton from '../../../Components/PrimaryButton';

// Components
import SelectedButton from '../../../Components/SelectedButton';
import PaidService from './PaidService';

// Data from Api 
const selectedAmt = [
    {
        id: 1,
        title: Strings.addMoney2000,
        price: Strings.addMoneyTitle2000

    },
    {
        id: 2,
        title: Strings.addMoney4000,
        price: Strings.addMoneyTitle4000
    },
    {
        id: 3,
        title: Strings.addMoney6000,
        price: Strings.addMoneyTitle6000

    },
    {
        id: 4,
        title: Strings.addMoney8000,
        price: Strings.addMoneyTitle8000
    },
    {
        id: 5,
        title: Strings.addMoney10000,
        price: Strings.addMoneyTitle2000
    },
    {
        id: 6,
        title: Strings.addMoney12000,
        price: Strings.addMoneyTitle12000
    },
    {
        id: 7,
        title: Strings.addMoney14000,
        price: Strings.addMoneyTitle14000
    }
]
const paidService = [
    {
        id: 1,
        type: 'MaterialCommunityIcons',
        name: 'file-download-outline',
        title: Strings.resumebuilder,
        titlePara: Strings.resumebuilderTitle
    },
    {
        id: 2,
        type: 'Feather',
        name: 'book',
        title: Strings.course,
        titlePara: Strings.courseTile
    },
    {
        id: 3,
        type: 'FontAwesome5',
        name: 'coins',
        title: Strings.hireEarn,
        titlePara: Strings.hireEarnTile
    }
]
const iconSize = hp(3.5);
const Wallet = () => {
    const [isTotalBlance, setIsTotalBlance] = useState(1470);
    const [isAmount, SetISAmount] = useState('1000');
    return (
        <View>

            {/* total WalletBalance */}
            <View style={styles.walletContainer}>
                <VectorIcon
                    type="AntDesign"
                    name={'wallet'}
                    size={iconSize}
                    color={Colors.Gray}
                    style={styles.walletIcon}
                />
                <View>
                    <Text style={styles.walletBalance}>{Strings.walletBalance}</Text>
                    <Text style={styles.totalPrice}>
                        {Strings.PriceSymbol}
                        {isTotalBlance}
                    </Text>
                    <Text
                        onPress={() => {
                            Alert.alert(Strings.transactionHistory);
                        }}
                        style={styles.transactionHistory}>
                        {Strings.transactionHistory}
                    </Text>
                </View>
            </View>

            {/* Add money in Wallet */}
            <View style={styles.moneyWalletContainer}>
                <Text style={styles.addMoneyWallet}>{Strings.addMoneyWallet}</Text>
                <Text style={styles.addMoneyWalletTitle}>
                    {Strings.addMoneyWalletTitle}
                </Text>
            </View>

            {/* Input */}
            <View style={[styles.inputContainer]}>
                <Input
                    placeholder={Strings.placeholderAmount}
                    onChangeText={newText => SetISAmount(newText)}
                    value={isAmount}
                    maxLength={10}
                    keyboardType={'phone-pad'}
                />
            </View>

            {/* selected Amt */}
            <View style={styles.selectedAmtContainer}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={selectedAmt}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item }) => (
                        <SelectedButton title={item.title} onPress={() => {
                            Alert.alert('Alert Title', item.price, [
                                {},
                            ]);
                        }} />
                    )}
                />
            </View>

            {/* PrimaryButton */}
            <View style={styles.PrimaryButtonContainer}>
                <PrimaryButton title={Strings.proceedAmt} onPress={() => {
                    Alert.alert(Strings.proceedAmt)
                }} />
            </View>

            <View style={styles.horizontalStyle}></View>

            {/* paidService */}
            <View style={styles.paidServiceContainer}>
                <Text style={styles.paidServiceTitle}>{Strings.paidService}</Text>
                <Text style={styles.paidServiceTxt}>{Strings.paidServiceTitle}</Text>

                <View style={{ borderWidth: hp(.1), borderColor: Colors.LightGray, marginTop: hp(1) }}>
                    {paidService.map((item, index) => (
                        <View key={index}>
                            <PaidService name={item.name} type={item.type} title={item.title} titlePara={item.titlePara} />
                        </View>
                    ))}


                </View>

            </View>
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    walletContainer: {
        marginVertical: hp(2),
        borderWidth: hp(0.2),
        borderColor: Colors.LightGray,
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        padding: wp(1.5)
    },
    walletIcon: {
        paddingRight: wp(2),
    },
    walletBalance: {
        color: Colors.Black,
        fontSize: hp(1.9)
    },
    totalPrice: {
        color: Colors.PrimaryColor,
        fontWeight: '500',
        fontSize: hp(2.3),
    },
    transactionHistory: {
        fontSize: hp(1.6),
        color: Colors.Gray,
    },
    moneyWalletContainer: {
        marginHorizontal: wp(6),
    },
    addMoneyWallet: {
        fontSize: hp(2),
        fontWeight: '500',
        color: Colors.Black,
    },
    addMoneyWalletTitle: {
        color: Colors.Gray,
        fontSize: hp(1.6),
    },
    inputContainer: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: hp(2),
    },
    selectedAmtContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    PrimaryButtonContainer: {
        marginVertical: hp(3)
    },
    horizontalStyle: {
        borderWidth: hp(.1),
        borderColor: Colors.LightGray
    },
    paidServiceContainer: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: hp(2)
    },
    paidServiceTitle: {
        fontSize: hp(2),
        color: Colors.Black,
        fontWeight: '500'
    },
    paidServiceTxt: {
        fontSize: hp(1.5),
        color: Colors.Gray
    }
})