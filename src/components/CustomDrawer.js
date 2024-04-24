import React from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { StyleSheet, View, Text } from "react-native";
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function CustomDrawer(props) {

    function goToHome(){
        props.navigation.navigate('Home')
    }

    return (
        <DrawerContentScrollView {...props} style={estilo.container}>
            <View style={estilo.content}>
                <Text style={estilo.texto}>usuario@dominio.com</Text>
                <Divider style={{ margin: 20, borderWidth: 0.5, borderColor: 'white' }} />
                <DrawerItem
                    label="Pesquisas"
                    icon={({ color, size }) => <Icon name="description" size={50} color={'white'} />} 
                    labelStyle={estilo.texto}
                    onPress={goToHome}
                />
            </View>
        </DrawerContentScrollView>
    );
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        display: 'flex',
        padding: 10,
        height: '100%',
        fontFamily: 'AveriaLibre-Regular',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        marginTop: 30,
    },
    drw: {
        drawerStyle: {
            backgroundColor: '#2B1F5C',
            color: '#FFFFFF'
        }
    },
    texto: {
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
        alignItems: 'center'
    },
});
