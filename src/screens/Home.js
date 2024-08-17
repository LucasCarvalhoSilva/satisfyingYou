import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Button } from '../components/Button';
import { ContentCard } from '../components/ContentCard';
import { useSelector } from 'react-redux'


let conteudoCards = [
    {titulo: 'SECOMP 2023', data: '10/10/2023',icon: 'devices',color: '#704141'},
    {titulo: 'UBUNTU 2022', data: '05/06/2022',icon: 'groups',color:'#383838'},
    {titulo: 'MENINAS CPU', data: '01/04/2022',icon: 'woman',color:'#D71616'},
    {titulo: 'COTB', data: '01/04/2022',icon: 'umbrella',color:'#37BD6D'},
    {titulo: 'CARNAVAL', data: '15/02/2020',icon: 'celebration',color:'#C60EB3'}
]

export function Home(props) {
    const userId = useSelector((state) => state.user.id)
    const userEmail = useSelector((state) => state.user.email)
    
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    function goToNewSearch(){
        console.log(userId)
        console.log(userEmail) 
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
                { conteudoCards.map((card,i) =>(
                        <ContentCard iconName={card.icon} color={card.color} title={card.titulo} text={card.data} action={goToSearchActions} key={i}/>
                    ))
                }        
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
