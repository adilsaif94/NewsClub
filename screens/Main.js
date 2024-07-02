import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Main = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <ScrollView >
                <View style={styles.cardView}>
                    {/* <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={styles.card}>
                        <LinearGradient
                            colors={['#008080', '#4B0082']}
                            style={styles.gradient}
                        >
                            <Text style={styles.gradientText}>News Club</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('ReduxHome') }} style={styles.card}>
                        <LinearGradient
                            colors={['#008080', '#4B0082']}
                            style={styles.gradient}
                        >
                            <Text style={styles.gradientText}>Redux</Text>
                        </LinearGradient>
                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={() => { navigation.navigate('Dashboard') }} style={styles.card}>
                        <LinearGradient
                            colors={['#008080', '#4B0082']}
                            style={styles.gradient}
                        >
                            <Text style={styles.gradientText}>Invoice</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                   
                    
                </View>
            </ScrollView>
        </View>
    );
}

export default Main;

const styles = StyleSheet.create({

    cardView: {
        flexDirection: 'row',
        flexWrap:'wrap',
        margin:10,
        marginTop:25
    },
    card: {
        width: '45%',
        height: 120,
        margin:8
     
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    gradientText: {
        color: 'white',
        fontSize: 20,
    },
});
