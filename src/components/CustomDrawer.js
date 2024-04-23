import { DrawerContentScrollView, DrawerItemList,DrawerItem } from "@react-navigation/drawer";

export function CustomDrawer(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help"/>
      </DrawerContentScrollView>
    );
}