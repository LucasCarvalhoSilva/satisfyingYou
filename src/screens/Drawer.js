import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login } from "./Login";
import { CreateAccount } from "./CreateAccount";

const DrawerNavigator = createDrawerNavigator();

export function Drawer() {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Login" component={Login} />
            <DrawerNavigator.Screen name="Criar Conta" component={CreateAccount} />
        </DrawerNavigator.Navigator>
    );
}