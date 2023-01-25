import { StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'

const Initial = ({navigation}) => {
  return (
    <View style={styles.container}>   
      <View style={styles.content}>
        <Text style={styles.mainText}>Get the world's First non-custodial cypher card</Text>
        <Text style={styles.helpText}>Explore all the web3 in one place</Text>
        <View style={styles.icon}>
          <Image source={require('./assets/swap.png')} style={styles.tinylogo} ></Image>
          <Text style={styles.icontext}>Swap to get instant USD</Text>
        </View>
        <View style={styles.icon}>
          <Image source={require('./assets/buy.png')} style={styles.tinylogo} ></Image>
          <Text style={styles.icontext}>Buy at an affordable price</Text>
        </View>
        <View style={styles.icon}>
          <Image source={require('./assets/chain.png')} style={styles.tinylogo} ></Image>
          <Text style={styles.icontext}>9 Chains Supported more coming soon</Text>
        </View>
        <View style={styles.icon}>
          <Image source={require('./assets/browser.png')} style={styles.tinylogo} ></Image>
          <Text style={styles.icontext}>Accepted all over the world</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('Seed')}>
            <Text>
              CREATE NEW WALLET {' > '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Initial

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  icontext: {
    justifyContent: 'flex-end',
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginLeft: 30
  },
  icon: {
    alignContent: 'center',
    width: 250 ,
    padding: 0,
    height: 90,
    // backgroundColor: 'green',
    flexDirection: 'row' 
  },
  tinylogo: {
    justifyContent: 'flex-start',
    marginTop: 15,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '20%',
    resizeMode: 'contain'
  },
  content: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    // alignSelf: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  helpText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10
  },
  hintText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15
  }
});