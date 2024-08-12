import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Image, View, TouchableOpacity, Text , ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Icons from 'react-native-vector-icons/dist/Foundation';
import { useNavigation } from '@react-navigation/native';
// import YoutubePlayer from "react-native-youtube-iframe";


const RecipeDes = (props) => {
    const navigation = useNavigation();
    const [active, setActive] = useState(false);
    const [fetchdata, setFetchData] = useState("");
    const [loading, setLoading] = useState(false);
    const item = props.route.params;

    useEffect(() => {
        getDataDes(item.idMeal);
    }, [])


    const getDataDes = async (id) => {
        try {

            const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            setLoading(true);
            const data = await response.json();
            setFetchData(data.meals[0]);
            setLoading(false)
            console.log("dataaart", data.meals);
        }
        catch (error) {
            console.log("error", error)
        }
    }



    return (


        <ScrollView contentContainerStyle={{ paddingBottom: 40, marginHorizontal: 2 }}>
            <StatusBar barStyle={"light-content"} />

            <View style={{ position: 'relative' }}>
                <Image source={{ uri: item.strMealThumb }}
                    style={{ width: '100%', height: 340, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                    resizeMode={'cover'}
                />
            </View>
            <View style={{ position: 'absolute', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10, paddingTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-circle-left" size={30} color={"white"} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActive(!active)} >
                    <Icons name="heart" size={35} color={active ? "darkorange" : "white"} />
                </TouchableOpacity>
            </View>

            {loading ? (<ActivityIndicator size={"large"} color={"green"} />) :
                (

                    <View style={{ marginHorizontal: 10 }}>


                        <Text style={{ color: 'black', marginTop: 10, fontWeight: '800', fontSize: 30 }}>{fetchdata.strMeal}</Text>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '800', }}>{fetchdata.strArea}</Text>

                        <Text style={{ color: 'black', fontSize: 30, fontWeight: '800', marginTop: 30, color: 'darkorange' }}>Instructions:</Text>
                        <Text style={{ color: 'black', fontSize: 17, fontWeight: '', }}>{fetchdata.strInstructions}</Text>

                    </View>



                )}

        </ScrollView>

    )
}

export default RecipeDes;