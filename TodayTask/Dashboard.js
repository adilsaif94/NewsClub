import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Dashboard = ({navigation}) => {
  return (
    <View style={{ height: '100%',flex:1,backgroundColor:"#fff" }}>
      <View style={styles.main}>
        <View style={styles.row}>
          <Text style={styles.toptext}>Invoice</Text>
          <Image style={styles.profileImg} source={require('../assets/images/profile.png')} />
        </View>
      </View>
      <View style={styles.firstCard}>
        <View style={styles.RaisedView1}>
          <Text>Amount Raised</Text>
          <Text style={styles.raisedAmount}>₹10,000</Text>
        </View>
        <View style={styles.RaisedView2}>
          <Text >Amount Paid</Text>
          <Text style={styles.raisedAmount}>₹5,000</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.viewAll}>
          <Text style={{ color: '#808080', fontWeight: '500' }}>Recent</Text>
          <Text style={{ color: 'black' }}>View all</Text>
        </View>

        <View style={styles.cards}>
          <View style={styles.cardsView}>
            <Text style={styles.cardText}>No.#10</Text>
            <Text style={styles.cardText}>Loreum Ipsum</Text>
          </View>
          <View style={styles.cardsView}>
            <Text style={styles.cardText}>Mar 02,2023</Text>
            <Text style={[styles.cardText, { color: 'black', fontWeight: '500' }]}>₹100.0</Text>
          </View>
          <View style={styles.cardsView}>
            <View style={{ borderWidth: .5, borderRadius: 10, alignSelf: 'center' }}><Text style={[styles.cardText, { fontSize: 12, marginHorizontal: 15, }]}>Saved</Text></View>
            <Text style={styles.cardText}>due in 4 days</Text>
          </View>
        </View>



        <View style={styles.cards}>
          <View style={styles.cardsView}>
            <Text style={styles.cardText}>No.#10</Text>
            <Text style={styles.cardText}>Loreum Ipsum</Text>
          </View>
          <View style={styles.cardsView}>
            <Text style={styles.cardText}>Mar 02,2023</Text>
            <Text style={[styles.cardText, { color: 'black', fontWeight: '500' }]}>₹100.0</Text>
          </View>
          <View style={styles.cardsView}>
            <View style={{ borderWidth: .5, borderRadius: 10, alignSelf: 'center' }}><Text style={[styles.cardText, { fontSize: 12, marginHorizontal: 15, }]}>Saved</Text></View>
            <Text style={styles.cardText}>due in 4 days</Text>
          </View>
        </View>


        <View style={styles.cards}>
          <View style={styles.cardsView}>
            <Text style={styles.cardText}>No.#10</Text>
            <Text style={styles.cardText}>Loreum Ipsum</Text>
          </View>
          <View style={styles.cardsView}>
            <Text style={styles.cardText}>Mar 02,2023</Text>
            <Text style={[styles.cardText, { color: 'black', fontWeight: '500' }]}>₹100.0</Text>
          </View>
          <View style={styles.cardsView}>
            <View style={{ borderWidth: .5, borderRadius: 10, alignSelf: 'center' }}><Text style={[styles.cardText, { fontSize: 12, marginHorizontal: 15, }]}>Saved</Text></View>
            <Text style={styles.cardText}>due in 4 days</Text>
          </View>
        </View>


      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('CreateInvoice')}} style={styles.buttonView}>
        <Text style={styles.buttonText}>+ Create new invoice</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Dashboard

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '20%',
    backgroundColor: '#33A5F9',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    
  },
  toptext: {
    color: "#fff",
    fontWeight: '800',
    flex: 1,
    textAlign: 'center',
  },
  profileImg: {
    width: 25,
    height: 25,
  },
  firstCard: {
    width: '90%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
    height: '15%',
    borderRadius: 20,
    flexDirection: 'row',
    shadowColor: '#CFE7F2',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 18,
  },
  RaisedView1: {
    alignItems: 'center',
    alignSelf: "center",
    width: '50%',
    backgroundColor: '#A4D0F1',
    padding: 15,
    borderRadius: 20,
    marginLeft: 10

  },
  RaisedView2: {
    alignItems: 'center',
    alignSelf: "center",
    width: '50%'
  },
  raisedAmount: {
    fontSize: 25,
    fontWeight: '500',
    marginTop: 10,
    color: 'black'
  },
  viewAll: {
    marginTop: '18%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cards: {
    width: '100%',
    marginTop: 17,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 12,
    shadowColor: '#CFE7F2',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, 
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
    position: "absolute",
    bottom: '10%',
    left: 20,
    right: 20,
    backgroundColor: '#33A5F9',
    borderRadius: 10
  },
  buttonText: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 17,
    color: '#fff',
    fontWeight: '800'
  }
})
