import { createDrawerNavigator,DrawerItem,DrawerContentScrollView } from "@react-navigation/drawer";
import { Home } from "./Home";
import {StyleSheet,Text} from "react-native";
import {CustomDrawer} from "../components/CustomDrawer";

const DrawerNavigator = createDrawerNavigator();

export function Drawer() {

    return (
        <DrawerNavigator.Navigator 
            drawerContent={(props)=> <CustomDrawer {...props}/>}
        >
            <DrawerNavigator.Screen 
                name="Home"
                component={Home} 
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#2B1D62', // Cor de fundo da aba superior
                    },
                    headerTintColor: '#FFFFFF', // Cor do ícone da aba do drawer
                }}
            />
        </DrawerNavigator.Navigator>
    );
}