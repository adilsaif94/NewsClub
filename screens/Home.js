import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const Home = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=3490840b4cee4b1fbe232cf350324280')
      .then(response => {
        // console.log("API Response:", response.data.articles);
        setArticles(response.data.articles);
      })
      .catch(error => console.error("API Error:", error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { article: item })}>
      <View style={styles.articleContainer}>
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  articleContainer: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#808080',
    marginTop: 10,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
});

export default Home;
