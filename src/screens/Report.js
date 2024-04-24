import { View, StyleSheet, Image } from "react-native"



export function Report(props) {

    return (
        <View style={estilo.container}>
            <Image style={{width:200, height:200}} source={{uri: 'https://w7.pngwing.com/pngs/743/758/png-transparent-pie-chart-circle-angle-sugar-others-angle-orange-logo.png'}}/>
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