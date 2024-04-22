import { View, TouchableOpacity, Text ,StyleSheet } from "react-native"
import { Title } from "../components/Title"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { useState } from "react"
import { Button } from "../components/Button"
import { ErrorMessage } from "../components/ErrorMessage"

export function NewSearch(props) {

    const [nome, setNome] = useState('')
    const [date, setDate] = useState('')
    
    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <View>
                    <View style={estilo.formWrapper}>
                        <Label text='Nome'/>
                        <Input 
                            action={setNome} 
                            text={nome}
                            type="text"
                            />   
                    </View>

                    <View style={estilo.formWrapper}>

                        <Label text='Data'/>
                        <Input 
                            action={setDate} 
                            text={date}
                            type="date"
                        />
                    </View>

                    <View style={estilo.formWrapper}>

                        <Label text='Imagem'/>
                        {/* ENCONTRAR MODULO PARA POR IMAGEM DA GALERIA*/}
                    </View>


                    <Button title="Cadastrar"/>
                    
                </View>
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
    titleWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:15,
        marginBottom:40,
    }, 
    formWrapper: {
        marginBottom:40,
    },
    btnCreateAccount:{
        marginTop:120,
        marginBottom:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#419ED7',
        height:35,
    },
    btnPasswordRecovery:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#B0CCDE',
        height:35,
    },
    btnText: {
        fontFamily:'AveriaLibre-Regular',
        fontSize:24,
        color:'#FFFFFF',
    }
})