import { Text, StyleSheet } from "react-native"

export function ErrorMessage({text}) {
    return (
        <Text style={estilo.texto}>{text}</Text>
    )
}

const estilo = StyleSheet.create({
    texto:{
        fontFamily:'AveriaLibre-Regular',
        fontSize:24,
        color:'#FD7979'
    }
})