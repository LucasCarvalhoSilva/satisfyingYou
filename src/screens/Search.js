import { View ,StyleSheet, ScrollView } from "react-native"
import { Title } from "../components/Title"
import { FeedbackOption } from "../components/FeedbackOption"

export function CreateAccount() {
    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <Title title="O que você achou do Carnaval 2024?"/>
                <ScrollView horizontal={true} style>
                    <FeedbackOption name="sentiment-sad" color="#D71616" feedback="Péssimo"/>
                </ScrollView>
                <ScrollView horizontal={true} style>
                    <FeedbackOption name="sentiment-dissatisfied" color="#FF360A" feedback="Péssimo"/>
                </ScrollView>
                <ScrollView horizontal={true} style>
                    <FeedbackOption name="sentiment-neutral" color="#FFC632" feedback="Péssimo"/>
                </ScrollView>
                <ScrollView horizontal={true} style>
                    <FeedbackOption name="sentiment-satisfied" color="#37BD6D" feedback="Péssimo"/>
                </ScrollView>
                <ScrollView horizontal={true} style>
                    <FeedbackOption name="sentiment-very-satisfied" color="#25BC22" feedback="Péssimo"/>
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