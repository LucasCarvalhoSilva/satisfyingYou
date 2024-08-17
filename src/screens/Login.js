import { View, TouchableOpacity, Text ,StyleSheet } from "react-native"
import { Title } from "../components/Title"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { useState } from "react"
import { Button } from "../components/Button"
import { ErrorMessage } from "../components/ErrorMessage"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth_mod } from "../firebase/config"

export function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')

    const regex = /^[^@]+@[^@]+\.com$/

    function checkEmail() {
        return regex.test(email)
    }

    function goToRecovery(){
        props.navigation.navigate('RecoveryPassword')
    }

    function goToCreate(){
        props.navigation.navigate('CreateAccount')
    }

    function goToHome(){
        if(checkEmail()) {
            autentication();
        } else {
            setErrMessage('Email e/ou senha inválidos')
        }
    }

    function autentication(){
        signInWithEmailAndPassword(auth_mod,email,password)
        .then((userLogged)=>{
            console.log("Usuario autenticado!"+JSON.stringify(userLogged))
            props.navigation.navigate('Drawer')
        })
        .catch((error)=>{
            console.log("Falha ao autenticar:"+JSON.stringify(error))
        });
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
                        <ErrorMessage text={errMessage}/>
                    </View>
                    <Button title="Entrar" action={goToHome}/>
                    <TouchableOpacity style={estilo.btnCreateAccount} onPress={goToCreate}>
                        <Text style={estilo.btnText}>Criar minha conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.btnPasswordRecovery} onPress={goToRecovery}>
                        <Text style={estilo.btnText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
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