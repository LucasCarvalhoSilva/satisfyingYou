import { Login } from "./src/screens/Login";
import { RecoveryPassword } from "./src/screens/RecoveryPassword";
import { CreateAccount } from "./src/screens/CreateAccount";
import { Home } from "./src/screens/Home";
import { NewSearch } from "./src/screens/NewSearch";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity, Text ,StyleSheet } from "react-native"
import { ModifySearch } from "./src/screens/ModifySearch";
import { Drawer } from "./src/screens/Drawer";

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={estilos.navegacao}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} options={{ headerTitle: 'Recuperação de Senha'}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerTitle: 'Nova Conta'}} />
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: 'Home'}} />
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
        <Stack.Screen name="NewSearch" component={NewSearch} options={{ headerTitle: 'Nova Pesquisa'}} />
        <Stack.Screen name="ModifySearch" component={ModifySearch} options={{ headerTitle: 'Modificar pesquisa'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const estilos = StyleSheet.create({
  navegacao: {
    headerTintColor: '#FFFFFF',
    headerStyle: { backgroundColor: '#2B1D62'},
    headerTintColor: '#573FBA',
    headerTitleStyle: { fontFamily: 'AveriaLibre-Regular',fontSize: 24, color:'white'},
  }
});
