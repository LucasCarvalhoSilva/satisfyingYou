import { Text, StyleSheet } from "react-native"

export function Title({title}) {
    return (
        <Text style={estilo.texto}>{title}</Text>
    )
}

const estilo = StyleSheet.create({
    texto:{
        fontFamily:'AveriaLibre-Regular',
        fontSize:32,
        color:'#FFFFFF',
    }
})