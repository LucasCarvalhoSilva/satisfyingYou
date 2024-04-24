import { View ,StyleSheet, ScrollView } from "react-native"
import { Title } from "../components/Title"
import { FeedbackOption } from "../components/FeedbackOption"

export function Search(props) {

    function goToAcknowledgment() {
        props.navigation.navigate("Acknowledgment")
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <Title title="O que você achou do Carnaval 2024?"/>
                <ScrollView horizontal={true} style>
                    <FeedbackOption name="sentiment-very-dissatisfied" color="#D71616" feedback="Péssimo" action={goToAcknowledgment}/>
                    <FeedbackOption name="sentiment-dissatisfied" color="#FF360A" feedback="Péssimo" action={goToAcknowledgment}/>
                    <FeedbackOption name="sentiment-neutral" color="#FFC632" feedback="Péssimo" action={goToAcknowledgment}/>
                    <FeedbackOption name="sentiment-satisfied" color="#37BD6D" feedback="Péssimo" action={goToAcknowledgment}/>
                    <FeedbackOption name="sentiment-very-satisfied" color="#25BC22" feedback="Péssimo" action={goToAcknowledgment}/>
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