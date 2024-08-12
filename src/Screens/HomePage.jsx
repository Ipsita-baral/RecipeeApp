import { useEffect, useState } from 'react';
import {ScrollView,StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Recipes from './Recipe';

const Home = () => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("chicken");
    const [recipe, setRecipe] = useState([]);

    const handleChangecat = (categorys) => {
        setCategory(categorys);
        getRecipes(categorys);
        setRecipe([]);
    }


    


    useEffect(() => {
        getData();
        getRecipes();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php');
            const dataa = await response.json();
            setData(dataa.categories)
            // console.log("data : ", dataa.categories);

        }
        catch (error) {
            console.log("error:", error);
        }
    }
    const getRecipes = async () => {
        try {
            const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const dataaa = await response.json();
            setRecipe(dataaa.meals)
          

        }
        catch (error) {
            console.log("error:", error);
        }
    }




    // const handleChange = (dataaa) => {
    // setSearch(dataaa);











    return (
        <ScrollView>
        <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
            <View>
                <Text style={{ color: "black", fontSize: 38, fontWeight: "bold", letterSpacing: .4, lineHeight: 40 }}>Find best recipes</Text>
                <Text style={{ color: "black", fontSize: 38, fontWeight: "bold", letterSpacing: .4, lineHeight: 40 }}>for cooking</Text>
            </View>
            <View style={{ flexDirection: 'row', borderWidth: 1,  borderColor: 'gray', borderRadius: 10, marginVertical: 20,}}>
                <Icon name="search" size={20} color={'gray'} style={{ marginTop: 14, marginLeft: 8, marginRight: 8 }} />
                <TextInput placeholder='Search recipes'
                    placeholderTextColor={'gray'}
                    style={{ fontSize: 18, color: 'black' }}

                />

            </View>
            <View>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: '800' }}>Category</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    {data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => handleChangecat(item.strCategory)}>
                                <View >
                                    <Image source={{ uri: item.strCategoryThumb }} style={{
                                        height: 50, width: 80, borderRadius: 45,



                                    }} resizeMode='contain' />
                                    <Text style={{ color: 'black', textAlign: 'center', fontWeight: '800' }}>{item.strCategory}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
          
                <Recipes data={data} Category={category} setCategory={setCategory} recipe={recipe} />
         
        </View>
        </ScrollView>
    )
}

styles = StyleSheet.create({


   
})

export default Home;