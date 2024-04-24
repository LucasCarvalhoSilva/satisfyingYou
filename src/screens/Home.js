import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Button } from '../components/Button';
import { ContentCard } from '../components/ContentCard';

export function Home(props) {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    function goToNewSearch(){
        props.navigation.navigate('NewSearch')
    }

    function goToSearchActions() {
        props.navigation.navigate('SearchActions')
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <View>
                    <Searchbar placeholder="Insira o termo de busca..." onChangeText={onChangeSearch} value={searchQuery} />
                </View>

                <ScrollView horizontal={true} style={estilo.cardsContainer}>
                    <ContentCard iconName="devices" color='#704141' title="SECOMP 2023" text="10/10/2023" action={goToSearchActions}/>
                    <ContentCard iconName="groups" color='#383838' title="UBUNTU 2022" text="05/06/2022" action={goToSearchActions}/>
                    <ContentCard iconName="woman" color='#D71616' title="MENINAS CPU" text="01/04/2022"action={goToSearchActions}/>
                    <ContentCard iconName="umbrella" color='#383838' title="COTB" text="01/04/2022" action={goToSearchActions}/>
                    <ContentCard iconName="devices" color='#704141' title="SECOMP 2023" text="10/10/2023" action={goToSearchActions}/>
                    <ContentCard iconName="groups" color='#383838' title="CARNAVAL" text="15/02/2020" action={goToSearchActions}/>              
                </ScrollView>

                <View style={estilo.buttonContainer}>
                    <Button title="Nova Pesquisa" action={goToNewSearch}/>
                </View>
            </View>
        </View>
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
