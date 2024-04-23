import { View, TouchableOpacity, Text ,StyleSheet } from "react-native"
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { useState } from "react"
import { Button } from "../components/Button"
import { ErrorMessage } from "../components/ErrorMessage"

export function CreateAccount() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [retryPassword, setRetryPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')

    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <View>
                    <View style={estilo.formWrapper}>
                        <Label text='E-mail'/>
                        <Input 
                            action={setEmail} 
                            text={email}
                            placeholder='jurandir.pereira@hotmail.com'
                            type="email-address"
                            />
                        
                    </View>
                    <View style={estilo.formWrapper}>

                        <Label text='Senha'/>
                        <Input 
                            action={setPassword} 
                            text={password}
                            placeholder='**********'
                            type="default"
                            secure
                            />
                    </View>
                    
                    <View style={estilo.formWrapper}>

                        <Label text='Repetir senha'/>
                        <Input 
                            action={setRetryPassword} 
                            text={retryPassword}
                            placeholder='**********'
                            type="default"
                            secure
                            />
                    <ErrorMessage text={errMessage}/>
                    </View>
                    <Button title="CADASTRAR"/>
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