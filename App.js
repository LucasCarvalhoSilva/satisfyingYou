import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity, Text ,StyleSheet } from "react-native"

import { Login } from "./src/screens/Login";
import { RecoveryPassword } from "./src/screens/RecoveryPassword";
import { CreateAccount } from "./src/screens/CreateAccount";
import { Icon, IconButton } from "react-native-paper";

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={estilos.navegacao}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} options={{ headerTitle: 'Recuperação de Senha'}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerTitle: 'Nova Conta'}} />
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
