import { createDrawerNavigator,DrawerItem,DrawerContentScrollView } from "@react-navigation/drawer";
import { Home } from "./Home";
import {StyleSheet,Text} from "react-native";
import {CustomDrawer} from "../components/CustomDrawer";

const DrawerNavigator = createDrawerNavigator();

export function Drawer(props) {
    return (
        <DrawerNavigator.Navigator screenOptions={estilo.drw} 
        drawerContent={(props)=> <CustomDrawer {...props}/>}>
            <DrawerNavigator.Screen name="Pesquisas" component={Home} />
        </DrawerNavigator.Navigator>
    );
}

const estilo = StyleSheet.create({
    drw:{
        drawerStyle:{
            backgroundColor:'#2B1F5C'
        }

    },
    texto: {
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        color: '#5555FF'
      },
})