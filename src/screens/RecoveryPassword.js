import { View, TouchableOpacity, Text ,StyleSheet } from "react-native"
import { Title } from "../components/Title"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { useState } from "react"
import { Button } from "../components/Button"
import { ErrorMessage } from "../components/ErrorMessage"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth_mod } from "../firebase/config"

export function RecoveryPassword(props) {

    const [email, setEmail] = useState('')
    const [errMessage, setErrMessage] = useState('')

    const regex = /^[^@]+@[^@]+\.com$/

    function checkEmail(props) {
        return regex.test(email)
    }

    function sendMailToRecoveryPassword(){

        console.log(email)
        sendPasswordResetEmail(auth_mod,email)
        .then(()=>{
            console.log("Email redefinição enviado com sucesso"+JSON.stringify(email))
            props.navigation.navigate("Login")
        })
        .catch((error)=>{
            console.log("Falha ao enviar email:"+JSON.stringify(error))
            setErrMessage('E-mail parece ser inválido')
        })
    }
    

    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <View style={estilo.titleWrapper}>
                    <Title title='Satisfaying.you' />
                    <Icon name="sentiment-satisfied" size={48} color="#FFFFFF" />
                </View>
                <View>
                    <View style={estilo.formWrapper}>
                        <Label text='E-mail'/>
                        <Input 
                            action={setEmail} 
                            text={email}
                            placeholder='jurandir.pereira@hotmail.com'
                            type="email-address"
                            />
                        <ErrorMessage text={errMessage}/>
                    </View>
                    <Button title="RECUPERAR" action={sendMailToRecoveryPassword}/>
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