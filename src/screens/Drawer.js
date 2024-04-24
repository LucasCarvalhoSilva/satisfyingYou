import { createDrawerNavigator,DrawerItem,DrawerContentScrollView } from "@react-navigation/drawer";
import { Home } from "./Home";
import {StyleSheet,Text} from "react-native";
import {CustomDrawer} from "../components/CustomDrawer";

const DrawerNavigator = createDrawerNavigator();

export function Drawer(props) {
    
    function goToHome(){
        props.navigation.navigate('Home')
    }

    return (
        <DrawerNavigator.Navigator screenOptions={estilo.drw} 
        drawerContent={(props)=> <CustomDrawer {...props}/>}>
            <DrawerNavigator.Screen name= "Home"component={Home} style={estilo.texto} onPress={goToHome} options={{title:''}}/>
        </DrawerNavigator.Navigator>
    );
}

const estilo = StyleSheet.create({
    drw:{
        drawerStyle:{
            backgroundColor:'#000000',
            color:'#FFFFFF'
        }

    },
    texto: {
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',

      },
})