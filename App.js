import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen01 from "./Screen01"
import Screen02 from "./Screen02"



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name = "ProductDetail" component = {Screen01}/>
        <Stack.Screen name = "ProductColorList" component = {Screen02}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App;
