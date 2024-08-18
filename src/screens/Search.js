import { View ,StyleSheet, ScrollView } from "react-native"
import { Title } from "../components/Title"
import { FeedbackOption } from "../components/FeedbackOption"

import { initializeFirestore, collection, addDoc } from "firebase/firestore"
import { app } from "../firebase/config"

import { useSelector } from 'react-redux'

export function Search(props) {
    const db = initializeFirestore(app, {experimentalForceLongPolling: true})
    const answerCollection = collection(db, "answer")

    const searchID = useSelector((state) => state.search.id)

    function answerSearch(answer) {
        const answerDoc = {
            searchID: searchID,
            answer: answer
        }
        
        addDoc(answerCollection, answerDoc)
        .then((docRef) => {
            console.log("Resposta Salva com sucesso ==> ", docRef)
            props.navigation.navigate('Acknowledgment'); 
        })
        .catch((error) => {
            console.error("Erro ao salvar documento", error)
        })

    }
    

    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <Title title="O que você achou do Carnaval 2024?"/>
                <ScrollView horizontal={true} style>
                    <FeedbackOption name="sentiment-very-dissatisfied" color="#D71616" feedback="Péssimo" action={() => answerSearch(1)}/>
                    <FeedbackOption name="sentiment-dissatisfied" color="#FF360A" feedback="Péssimo" action={() => answerSearch(2)}/>
                    <FeedbackOption name="sentiment-neutral" color="#FFC632" feedback="Péssimo" action={() => answerSearch(3)}/>
                    <FeedbackOption name="sentiment-satisfied" color="#37BD6D" feedback="Péssimo" action={() => answerSearch(4)}/>
                    <FeedbackOption name="sentiment-very-satisfied" color="#25BC22" feedback="Péssimo" action={() => answerSearch(5)}/>
                </ScrollView>
            </View>      
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor:'#372775',
        display:'flex',
        padding:20,
        height:'100%'
    },
    content:{
        display:'flex',
        flexDirection:'column',
        gap:10
    },
    optionsContainer:{
        display:'flex',
        gap:15,
        flexDirection:'row'
    }
})