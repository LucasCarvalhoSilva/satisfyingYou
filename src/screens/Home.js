import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Button } from '../components/Button';
import { ContentCard } from '../components/ContentCard';
import { useSelector } from 'react-redux'
import { initializeFirestore, collection, query, onSnapshot } from "firebase/firestore"
import { app } from "../firebase/config"
import { useDispatch } from "react-redux"
import { reducerSetSearch } from '../../redux/searchSlice';

let conteudoCards = [
    {titulo: 'SECOMP 2023', data: '10/10/2023',icon: 'devices',color: '#704141'},
    {titulo: 'UBUNTU 2022', data: '05/06/2022',icon: 'groups',color:'#383838'},
    {titulo: 'MENINAS CPU', data: '01/04/2022',icon: 'woman',color:'#D71616'},
    {titulo: 'COTB', data: '01/04/2022',icon: 'umbrella',color:'#37BD6D'},
    {titulo: 'CARNAVAL', data: '15/02/2020',icon: 'celebration',color:'#C60EB3'}
]

export function Home(props) {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.user.id)
    const userEmail = useSelector((state) => state.user.email)
    const db = initializeFirestore(app, {experimentalForceLongPolling: true})
    const searchCollection = collection(db, "search")
    const [searchList, setSearchList] = useState()

    useEffect(() => {
        const q = query(searchCollection)
        const unsubscribe = onSnapshot(q,(snapShot) => {
            const searchs = []
            snapShot.forEach((doc) => {
                if(doc.data().userId == userId) {
                    searchs.push({
                        id: doc.id,
                        ...doc.data()
                    })
                }
            })
            setSearchList(searchs)
        })
    },[])

    
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    function goToNewSearch(){
        console.log(userId)
        console.log(userEmail) 
        props.navigation.navigate('NewSearch')
    }

    function goToSearchActions(id, name, date) {
        console.log("ID DO ITEM QUE CLIQUEI ==>", id)
        dispatch(reducerSetSearch({id: id, date: date, name: name}))
        props.navigation.navigate('SearchActions')
    }

    const renderCard = ({item}) => {
        console.log(item)
        
        return (
            <ContentCard
                iconName={"devices"}
                color={"#704141"}
                title={item.name}
                text={item.date}
                action = {() => goToSearchActions(item.id, item.name, item.date)}
            />
        )
    }

    return (  
        <View style={estilo.container}>
            <View style={estilo.content}>
                <View>
                    <Searchbar placeholder="Insira o termo de busca..." onChangeText={onChangeSearch} value={searchQuery} />
                </View>
                <FlatList 
                    data={searchList} 
                    renderItem={renderCard}
                    horizontal={true}
                    keyExtractor={search => search.id}
                    style={estilo.cardsContainer}
                />



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
