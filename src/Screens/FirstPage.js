import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';



const FirstPage = (props) => {
  // const navigation = useNavigation();


  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('home')
  //   }, 2500)
  // }, [])

  return (
    <View style={styles.image}>
      <ImageBackground source={require('../Assets/foosem.jpg')}
        style={styles.imagebg} resizeMode='cover' blurRadius={3}
      >
      </ImageBackground>
      <View style={{ position: 'absolute', flex:1, gap:80}}>
        <View>

        <View style={{ flexDirection: 'row', justifyContent:'center'}}>

          <Text style={[styles.recipe, styles.textcolor]}>F</Text>
          <Text style={styles.recipe}>ood</Text>
        </View>

        <Text style={styles.recipes}>Recipes</Text>
        <Text style={styles.cook}>Find best recipes for cooking</Text>
        </View>
        <View >
          <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('home')}>
            <Text style={{ padding: 10, fontSize: 20, textAlign: 'center', color:'white' }}>Get started</Text>
            <Icon name="arrow-right" size={20} color={'white'} style={{marginTop:3}}/>
          </TouchableOpacity>
        </View>
      </View>



    </View>
  )
}

styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagebg: {
    height: '100%',
    width: '100%',
    position: 'relative'


  },
  textcolor: {
    color: 'red'
  },
  recipe: {
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: .6,
    fontSize: 55,
    fontWeight: "800",
    color: '#ede7d8',
    textShadowColor: 'black',
    textShadowOffset: { width: -6, height: 4 },
    textShadowRadius: 10,
  },
  recipes: {
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: .6,
    fontSize: 60,
    fontWeight: "800",
    color: '#ede7d8',
    textShadowColor: 'black',
    textShadowOffset: { width: -11, height: 0 },
    marginLeft: 8,
    textShadowRadius: 10,
  },
  cook: {
    fontWeight: "800",
    letterSpacing: .6,
    // marginLeft: 4,
    fontSize:17
    // color:'#e0e0bc'


  }, button: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'orange',
    borderRadius: 8,
    flexDirection:'row',
   
    // gap:35



  }


})

export default FirstPage;