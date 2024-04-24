import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { SearchActionCard } from '../components/SearchActionCard';


export function SearchActions(props) {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    function goToReport(){
        props.navigation.navigate('Report')
    }

    function goToSearch() {
        props.navigation.navigate('Search')
    }

    function goToModifySearch() {
        props.navigation.navigate('ModifySearch')
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <ScrollView horizontal={true} style={estilo.cardsContainer}>
                    <SearchActionCard iconName="description" title="Modificar" action={goToModifySearch}/>
                    <SearchActionCard iconName="library-add-check" title="Coletar Dados" action={goToSearch}/>
                    <SearchActionCard iconName="donut-large" title="Relatório" action={goToReport}/>
                </ScrollView>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        height: '100%',
        fontFamily: 'AveriaLibre-Regular',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 30,
    },
    cardsContainer: {
        marginTop: 100,
    },
    
    
    buttonContainer: {
        marginTop: 50,
        alignItems: 'center',
        width: '100',
        height: '100'
    },
});
