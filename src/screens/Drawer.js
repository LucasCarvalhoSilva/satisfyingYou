import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./Home";

const DrawerNavigator = createDrawerNavigator();

export function Drawer() {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Home" component={Home} />
        </DrawerNavigator.Navigator>
    );
}