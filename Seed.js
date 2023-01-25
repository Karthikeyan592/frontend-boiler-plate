import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const bip39 = require('bip39')
const mnemonic = bip39.entropyToMnemonic('00000000000000000000000000000000')
const Seed = ({navigation}) => {
  
    return (
    
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.helpText}>Your Seed Phrase makes it easy to back up and restore to your account</Text>
            <Text style={styles.mainText}>Warning: Never Disclose your secret Recovery Phrase. Anyone with this phrase can take your assets forever</Text>
            <Text style={styles.mainText}>The 12 words:</Text>
            <Text style={styles.helpText}>{mnemonic}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('Address')}>
            <Text>
              CONFIRM {' > '}
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Seed

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
      width: 400,
      // justifyContent: 'center',
    //   backgroundColor: 'red',
      alignItems: 'center',
      // alignSelf: 'center'
    },
    mainText: {
      marginTop: 10,  
      fontSize: 16,
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