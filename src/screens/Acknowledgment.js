import { View, StyleSheet } from "react-native"
import { Label } from "../components/Label"


export function CreateAccount() {


    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <Label>Obrigado por participar da pesquisa!</Label>
                <Label>Aguardamos você no próximo ano!</Label>
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
    }
})