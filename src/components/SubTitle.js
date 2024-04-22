import { Text, StyleSheet } from "react-native"

export function SubTitle({subTitle}) {
    return (
        <Text style={estilo.texto}>{subTitle}</Text>
    )
}

const estilo = StyleSheet.create({
    texto:{
        fontFamily:'AveriaLibre-Regular',
        fontSize:28,
        color:'#FFFFFF',
    }
})