import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/Screens/HomePage';
import FirstPage from './src/Screens/FirstPage';
import RecipeDes from './src/Screens/RecipeDes';



const Stack = createNativeStackNavigator();




const App = () =>{


  return(
   <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="firstPage"  component={FirstPage} options={{headerShown:false}}/>
  <Stack.Screen name="home"  component={HomePage} options={{headerShown:false}}/>
  <Stack.Screen name="description" component={RecipeDes} options={{headerShown:false}}/>

</Stack.Navigator>
   </NavigationContainer>
  )
}


export default App;