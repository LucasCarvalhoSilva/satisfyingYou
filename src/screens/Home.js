import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Searchbar, Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../components/Button';

export function Home(props) {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    function goToNewSearch(){
        props.navigation.navigate('NewSearch')
    }

    function goToModifySearch() {
        props.navigation.navigate('ModifySearch')
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <View>
                    <Searchbar placeholder="Insira o termo de busca..." onChangeText={onChangeSearch} value={searchQuery} />
                </View>

                <ScrollView horizontal={true} style={estilo.cardsContainer}>
                    <Card style={estilo.card} onPress={goToModifySearch}>
                        <Card.Content style={estilo.cardContent}>
                            <Icon name='devices' size={100} color='#704141' />
                            <Title style={estilo.cardTitle}>SECOMP 2023</Title>
                            <Text style={estilo.cardText}>10/10/2023</Text>
                        </Card.Content>
                    </Card>

                    <Card style={estilo.card}>
                        <Card.Content style={estilo.cardContent} onPress={goToModifySearch}>
                            <Icon name='groups' size={100} color='#383838' />
                            <Title style={estilo.cardTitle}>UBUNTU 2022</Title>
                            <Text style={estilo.cardText}>05/06/2022</Text>
                        </Card.Content>
                    </Card>

                    <Card style={estilo.card}>
                        <Card.Content style={estilo.cardContent} onPress={goToModifySearch}>
                            <Icon name='woman' size={100} color='#D71616' />
                            <Title style={estilo.cardTitle}>MENINAS CPU</Title>
                            <Text style={estilo.cardText}>01/04/2022</Text>
                        </Card.Content>
                    </Card>

                    <Card style={estilo.card}>
                        <Card.Content style={estilo.cardContent} onPress={goToModifySearch}>
                            <Icon name='umbrella' size={100} color='#383838' />
                            <Title style={estilo.cardTitle}>COTB</Title>
                            <Text style={estilo.cardText}>01/04/2022</Text>
                        </Card.Content>
                    </Card>

                    <Card style={estilo.card}>
                        <Card.Content style={estilo.cardContent} onPress={goToModifySearch}>
                            <Icon name='groups' size={100} color='#383838' />
                            <Title style={estilo.cardTitle}>CARNAVAL</Title>
                            <Text style={estilo.cardText}>15/02/2020</Text>
                        </Card.Content>
                    </Card>
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
