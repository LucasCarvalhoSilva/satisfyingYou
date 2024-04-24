import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Searchbar, Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../components/Button';

let conteudoCards = [
    {titulo: 'SECOMP 2023', data: '10/10/2023',icon: 'devices',color: '#704141'},
    {titulo: 'UBUNTU 2022', data: '05/06/2022',icon: 'groups',color:'#383838'},
    {titulo: 'MENINAS CPU', data: '01/04/2022',icon: 'woman',color:'#D71616'},
    {titulo: 'COTB', data: '01/04/2022',icon: 'umbrella',color:'#37BD6D'},
    {titulo: 'CARNAVAL', data: '15/02/2020',icon: 'celebration',color:'#C60EB3'}
]
export function Home(props) {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    function goToNewSearch(){
        props.navigation.navigate('NewSearch')
    }

    function goToModifySearch(titulo, data, icon) {
        props.navigation.navigate('ModifySearch', { titulo, data, icon });
    }
    

    return (

        
        <View style={estilo.container}>
            
            <View style={estilo.content}>
                <View>
                    <Searchbar placeholder="Insira o termo de busca..." onChangeText={onChangeSearch} value={searchQuery} />
                </View>

                <ScrollView horizontal={true} style={estilo.cardsContainer}>
                { conteudoCards.map((card,i) =>(
                        <Card style={estilo.card} onPress={() => goToModifySearch(card.titulo,card.data,card.icon)} key={i}>
                            <Card.Content style={estilo.cardContent}>
                                <Icon name={card.icon} size={100} color={card.color} />
                                <Title style={estilo.cardTitle}>{card.titulo}</Title>
                                <Text style={estilo.cardText}>{card.data}</Text>
                            </Card.Content>
                        </Card>
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
    card: {
        display: 'flex',
        height: 200,
        width: 200,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContent: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    cardTitle: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        marginBottom: 5,
        color: '#3F92C5',
    },
    cardText: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 14,
        color: '#8B8B8B',
    },
    buttonContainer: {
        marginTop: 50,
        alignItems: 'center',
        width: '100',
        height: '100'
    },
});
