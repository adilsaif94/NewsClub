import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Detail = ({ route }) => {
    const { article } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: article.urlToImage }} style={styles.image} />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.author}>{article.author}</Text>
            <Text style={styles.content}>{article.content}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#808080'
    },
    author: {
        fontSize: 18,
        marginTop: 10,
        color: '#555',
    },
    content: {
        fontSize: 16,
        marginTop: 20,
        color: '#808080'
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 5,
      },
});

export default Detail;
