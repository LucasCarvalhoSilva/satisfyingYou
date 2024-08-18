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
        let imageUrl;
    
        if (!urlPhoto) {
            // URL da foto está vazia, usamos a imagem padrão
            const defaultImageRef = ref(storage, 'default.jpeg');
            imageUrl = await getDownloadURL(defaultImageRef);
        } else {
            // URL da foto está presente, fazer o upload da imagem
            const id = uuid.v4();
            const imageRef = ref(storage, `${id}.jpeg`);
            
            try {
                const response = await fetch(urlPhoto);
                const blob = await response.blob();
                
                await uploadBytes(imageRef, blob, { contentType: 'image/jpeg' });
                console.log("Arquivo enviado com sucesso");
                
                imageUrl = await getDownloadURL(imageRef);
            } catch (error) {
                console.error("Erro ao enviar arquivo ou obter URL:", error);
                // Em caso de erro, podemos usar a imagem padrão
                const defaultImageRef = ref(storage, 'default.jpeg');
                imageUrl = await getDownloadURL(defaultImageRef);
            }
        }
    
        // Adiciona o documento ao Firestore com a URL da imagem
        const searchDoc = {
            name: nome,
            date: date,
            imageUrl: imageUrl,
            userId: userId
        };
    
        try {
            const docRef = await addDoc(searchCollection, searchDoc);
            console.log("Documento salvo com sucesso ==> ", docRef);
            props.navigation.navigate('Home');
        } catch (error) {
            console.error("Erro ao salvar documento:", error);
        }
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