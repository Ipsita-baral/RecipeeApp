import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, _View, ScrollView } from 'react-native';
import React from 'react';
// import MasonryList from '@react-native-seoul/masonry-list';

import { useNavigation } from '@react-navigation/native';

const Recipes = ({ data, Category, setCategory, recipe }) => {

    const navigation = useNavigation();
    // console.log("resh", recipe)
    return (
       
        <View>
            <Text style={styles.recipe}>Recipes</Text>
            {/* {data.length === 0 || recipe.length === 0 ? null : ( */}

            <FlatList
               numColumns={2}
            //    keyExtractor={(item)=>item.id}
               data={recipe}
               renderItem={({item,i})=>{

                return (
                    <View style={ {width:'50%', marginHorizontal:4, marginVertical:10}}>

                        <TouchableOpacity key={i} onPress={() => navigation.navigate("description", { ...item })}>

                            <Image source={{ uri: item.strMealThumb }} style={styles.imageurl}/>
                            <Text style={{color:'black', fontWeight:'bold', textAlign:'center', fontSize:15}}>{item.strMeal}</Text>
                        </TouchableOpacity>
                    </View>
                )
               }}
            
            />

        




        </View>
       
    )
}

const styles = StyleSheet.create({
    recipe: {
        color: 'black',
        fontSize: 25,
        fontWeight: '800',
        marginVertical: 15
    },
    imageurl: {
        width: '100%',
        height: 150,
        borderRadius:10
        // marginBottom: 10,
    },

})

export default Recipes;