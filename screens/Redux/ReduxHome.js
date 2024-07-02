import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import Product from '../../Components/Product'

const ReduxHome = () => {

    const products = [
        {
            name: 'Samsung Mobile',
            color: 'white',
            price: 30000,
            image: 'https://m.media-amazon.com/images/I/61SEbQm6zUL.jpg'
        },
        {
            name: 'Apple',
            color: 'black',
            price: 50000,
            image: 'https://m.media-amazon.com/images/I/61SEbQm6zUL.jpg'
        },
        {
            name: 'Lava Mobile',
            color: 'green',
            price: 10000,
            image: 'https://m.media-amazon.com/images/I/61SEbQm6zUL.jpg'
        },
    ]

    return (
        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
            <Header />
            <ScrollView>
                {
                    products.map((item) => <View>
                        <Text style={{ fontSize: 24 }}>{item.name}</Text>
                        <Text style={{ fontSize: 24 }}>{item.color}</Text>
                        <Text style={{ fontSize: 24 }}>{item.price}</Text>
                        <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
                    </View>)
                }
            </ScrollView>
            <Product />
        </View>
    )
}

export default ReduxHome

const styles = StyleSheet.create({})