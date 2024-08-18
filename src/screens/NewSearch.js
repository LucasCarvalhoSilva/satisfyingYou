import { View, TouchableOpacity, Text ,StyleSheet,Image } from "react-native"
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { useState } from "react"
import { Button } from "../components/Button"
import { conteudoCards } from "./Home"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { getDownloadURL, ref, uploadBytes} from "firebase/storage"

import { initializeFirestore, collection, addDoc } from "firebase/firestore"
import { app, storage } from "../firebase/config"
import { useSelector } from 'react-redux'
import uuid from 'react-native-uuid';

const db = initializeFirestore(app, {experimentalForceLongPolling: true})
const searchCollection = collection(db, "search")

export function NewSearch(props) {
    const userId = useSelector((state) => state.user.id)

    const [nome, setNome] = useState('')
    const [date, setDate] = useState('')
    const [urlPhoto, setUrlPhoto] = useState('')
    const [photo, setPhoto] = useState()

    
    async function addNewSearch() {
        
        const id = uuid.v4();
        const imageRef = ref(storage, `${id}.jpeg`); // Nome do arquivo com o UUID gerado
        const file = await fetch(urlPhoto)
        const blob = await file.blob()
        

        uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
        .then((result)=>{
            console.log("Arquivo enviado com sucesso")
            getDownloadURL(imageRef).then(
                (url)=>{
                    const searchDoc = {
                    name: nome,
                    date: date,
                    imageUrl: url,
                    userId: userId
                }
                addDoc(searchCollection, searchDoc)
                .then((docRef) => {
                    console.log("Documento Salvo com sucesso ==> ", docRef)
                    props.navigation.navigate('Home'); 
                })
                .catch((error) => {
                    console.error("Erro ao salvar documento", error)
                })
            })
            .catch((error)=>console.log("Falha na url:")+JSON.stringify(error))
            }
        )
        .catch((error)=>{console.log("Falha ao enviar arquivo"+JSON.stringify(error))})
    }

    function captureImage(){
        launchCamera({mediaType:'photo',cameraType:'back',quality:1})
        .then((result)=>{
            setUrlPhoto(result.assets[0].uri)
            setPhoto(result.assets[0])
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    function captureImageLibrary(){
        launchImageLibrary({mediaType:'photo',cameraType:'back',quality:1})
        .then((result)=>{
            setUrlPhoto(result.assets[0].uri)
            setPhoto(result.assets[0])
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.content}>
                <View>
                    <View style={estilo.formWrapper}>
                        <Label text='Nome'/>
                        <Input 
                            action={setNome} 
                            text={nome}
                            type="default"
                        />   
                    </View>
    
                    <View style={estilo.formWrapper}>
                        <Label text='Data'/>
                        <Input 
                            action={setDate} 
                            text={date}
                            type="default"
                        />
                    </View>
    
                    <View style={estilo.formWrapper}>

                        <Label text='Imagem'/>
                        {  
                        urlPhoto ? 
                            <TouchableOpacity onPress={captureImageLibrary}>
                                <Image source={{uri: urlPhoto}} style={{width: 120, height: 120}}/>
                            </TouchableOpacity>
                            :
                            null
                        }
                    </View>

    
                 
                    

                        
                    <View style={estilo.botoes}>
                        <Button action={captureImage} title="Camera"/>
                        <Button title="Cadastrar" action={addNewSearch}/>
                    </View>
                   
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
    botoes:{
        gap:5
    },
    btnText: {
        fontFamily:'AveriaLibre-Regular',
        fontSize:24,
        color:'#FFFFFF',
    }
})