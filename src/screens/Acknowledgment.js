import { View, StyleSheet } from "react-native"
import { Label } from "../components/Label"
import { useEffect } from "react"


export function Acknowledgment(props) {

    useEffect(() => {
        const timer = setTimeout(() => {
            goToSearch()
        },3000)

        return() => clearTimeout(timer)
    },[props.navigation])

    function goToSearch() {
        props.navigation.navigate("Search")
    }

    return (
        <View style={estilo.container}>
            <View>
                <Label text="Obrigado por participar da pesquisa!"/>
                <Label text="Aguardamos você no próximo ano!"/>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor:'#372775',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        height:'100%'
    },
    content:{
        display:'flex',
        flexDirection:'column',
        gap:10
    }
})