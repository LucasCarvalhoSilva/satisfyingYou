import { TextInput, StyleSheet } from "react-native";

export function Input(props) {
    return (
        <TextInput style={estilo.input}
            placeholder={props.placeholder} 
            value={props.text}
            onChangeText={props.action}
            keyboardType={props.type}
            secureTextEntry={props.secure}
        />
    )
}

export const estilo = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor:'#FFFFFF',
        color:'#3F92C5',
        fontFamily:'AveriaLibre-Regular',
        fontSize:28,
        paddingTop:9,
        paddingBottom:9,
        paddingLeft:22,
    }
})