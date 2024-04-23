import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Label } from "./Label";

export function FeedbackOption(props) {
    return (
        <TouchableOpacity style={estilo.fundo} onPress={props.action}>
            <Icon name={props.name} size={32} color={props.color} />
            <Label text={props.feedback}/>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    fundo: {
        height:50,
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#49B976',
        border:'none',
    },
    texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize:28,
        color:'#FFFFFF',
    }
})