import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button(props) {
    return (
        <TouchableOpacity style={estilo.fundo} onPress={props.action}>
            <Text style={estilo.texto}>{props.title}</Text>
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