import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CreateInvoice = ({navigation}) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.harderTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back-circle-outline' size={25} color='#fff' />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontWeight: '800', fontSize: 17 }}>Invoice</Text>
                <Image style={styles.profileImg} source={require('../assets/images/profile.png')} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.poitnsText}>Details</Text>
                <View style={styles.cards}>
                    <Text style={styles.cardText}>No.#10</Text>
                    <Text style={[styles.cardText, { color: 'black', fontWeight: '800' }]}>Mar 02,2023</Text>
                    <Text style={styles.cardText}>Due on Mar 09,2023</Text>
                </View>
                <Text style={styles.poitnsText}>Clients</Text>
                <View style={[styles.cards, { flexDirection: 'row' }]}>
                    <View style={{ backgroundColor: '#C6E0F5', borderRadius: 50 }}>
                        <FontAwesome name='user-o' size={20} color='#33A5F9' style={{ padding: 8 }} />
                    </View>
                    <Text style={[styles.cardText, { color: 'black', fontWeight: '700', alignSelf: 'center', marginLeft: 10, fontSize: 16 }]}>+ Add client details</Text>
                </View>

                <Text style={styles.poitnsText}>Items</Text>
                <View style={[styles.cards, { flexDirection: 'row' }]}>
                    <View style={{ backgroundColor: '#C6E0F5', borderRadius: 50 }}>
                        <Fontisto name='shopping-bag-1' size={20} color='#33A5F9' style={{ padding: 8 }} />
                    </View>
                    <Text style={[styles.cardText, { color: 'black', fontWeight: '700', alignSelf: 'center', marginLeft: 10, fontSize: 16 }]}>+ Add items</Text>
                </View>

                <Text style={styles.poitnsText}>Total</Text>
                <View style={styles.cards}>
                    <View style={styles.cardsView}>
                        <Text style={styles.cardText}>Subtotal</Text>
                        <Text style={styles.cardText}>₹0.0</Text>
                    </View>
                    <View style={styles.cardsView}>
                        <Text style={styles.cardText}>Tax</Text>
                        <Text style={styles.cardText}>₹0.0</Text>
                    </View>
                    <View style={{ borderWidth: .2, marginVertical: 7, borderColor: '#E5EAEE' }}></View>
                    <View style={styles.cardsView}>
                        <Text style={[styles.cardText, { color: 'black' }]}>Total</Text>
                        <Text style={[styles.cardText, { color: 'black' }]}>₹0.0</Text>
                    </View>
                </View>

                <Text style={styles.poitnsText}>Note</Text>
                <View style={[styles.cards, { flexDirection: 'row' }]}>
                    <View style={{ backgroundColor: '#C6E0F5', borderRadius: 20 }}>
                        <Foundation name='clipboard-notes' size={20} color='#33A5F9' style={{ padding: 8, paddingHorizontal: 12 }} />
                    </View>
                    <Text style={[styles.cardText, { color: 'black', fontWeight: '700', alignSelf: 'center', marginLeft: 10, fontSize: 16 }]}>+ Add Note</Text>
                </View>

                <Text style={styles.poitnsText}>Signature</Text>
                <View style={[styles.cards, { flexDirection: 'row' }]}>
                    <View style={{ backgroundColor: '#C6E0F5', borderRadius: 20 }}>
                        <FontAwesome6 name='pen-clip' size={20} color='#33A5F9' style={{ padding: 8, paddingHorizontal: 8 }} />
                    </View>
                    <Text style={[styles.cardText, { color: 'black', fontWeight: '700', alignSelf: 'center', marginLeft: 10, fontSize: 16 }]}>+ Add Signature</Text>
                </View>

                <Text style={styles.poitnsText}>Photo</Text>
                <View style={[styles.cards, { flexDirection: 'row' }]}>
                    <View style={{ backgroundColor: '#C6E0F5', borderRadius: 20 }}>
                        <MaterialIcons name='add-a-photo' size={20} color='#33A5F9' style={{ padding: 8, paddingHorizontal: 8 }} />
                    </View>
                    <Text style={[styles.cardText, { color: 'black', fontWeight: '700', alignSelf: 'center', marginLeft: 10, fontSize: 16 }]}>+ Add Photo</Text>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.saveTouch1}>
                        <Text style={styles.textButton1}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveTouch2}>
                        <Text style={styles.textButton2}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default CreateInvoice

const styles = StyleSheet.create({
    harderTop: {
        width: '100%',
        backgroundColor: '#33A5F9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    profileImg: {
        width: 28,
        height: 28,
    },
    poitnsText: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: '800',
        color: '#9AA0A5'
    },
    cards: {
        width: '100%',
        marginTop: 17,
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 12,
        shadowColor: '#87C1F1',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 4,
    },
    cardsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardText: {
        color: '#B6B8B9',
        fontWeight: '400',
        lineHeight: 22
    },
    buttonView: {
        marginBottom: 50,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    saveTouch1: {
        width: '46%',
        backgroundColor: '#33A5F9',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderRadius: 12
    },
    saveTouch2: {
        width: '46%',
        borderColor: '#33A5F9',
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 12
    },
    textButton1: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: '800',
        fontSize: 16
    },
    textButton2: {
        alignSelf: 'center',
        color: '#33A5F9',
        fontWeight: '800',
        fontSize: 16
    }
})