import { View, TouchableOpacity, Text ,StyleSheet, Modal } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { useState, useEffect } from "react"
import { Button } from "../components/Button"
import { Image } from "react-native"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { useSelector } from 'react-redux'

export function ModifySearch(props) {
    const searchID = useSelector((state) => state.search.id)

    useEffect(() => {
        console.log(searchID)
    },[]) 


    const [nome, setNome] = useState('')
    const [date, setDate] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [urlPhoto, setUrlPhoto] = useState('')
    const [photo, setPhoto] = useState()

    const backToHome = () => {
        props.navigation.navigate('Home')
    }

    function closeModal() {
        setModalVisible(false)
    }

    function openModal() {
        setModalVisible(true)
    }

    function deleteSearch() {
        props.navigation.navigate("Home")
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
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={estilo.modalWrapper}>
                    <Label text="Tem certeza de apagar essa pesquisa?"/>
                    <View style={estilo.optionsWrapper}>
                        <TouchableOpacity style={estilo.btnConfirmr} onPress={deleteSearch}>
                            <Label text="SIM" />
                        </TouchableOpacity>
                        <TouchableOpacity style={estilo.btnCancel}  onPress={closeModal}>
                            <Label text="CANCELAR" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={estilo.content}>
                <View>
                    <View style={estilo.formWrapper}>
                        <Label text='Nome'/>
                        <Input 
                            value={nome}
                            action={setNome} 
                            text={nome}
                            type="default"
                            />   
                    </View>

                    <View style={estilo.formWrapper}>

                        <Label text='Data'/>
                        <Input 
                            value={date}
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
                        <Button action={backToHome} title="SALVAR"/>
                    </View>
                    <TouchableOpacity style={estilo.deleteWrapper} onPress={openModal}>
                        <Icon name="delete-outline" size={48} color="#FFFFFF" />
                        <Label text='Apagar'/>
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
    btnText: {
        fontFamily:'AveriaLibre-Regular',
        fontSize:24,
        color:'#FFFFFF',
    },
    botoes:{
        gap:5
    },
    deleteWrapper: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:-100,
        right:20
    },
    modalWrapper: {
        position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:30,
        backgroundColor:'#372775',
        height:200,
        top:250,
        margin:5,
        zIndex:-1,
        borderColor:'#000000',
        borderStyle:'solid',
        borderWidth:1,
    },
    optionsWrapper: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10,
    },
    btnConfirmr: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FF8383',
        width:150,
    },
    btnCancel: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3F92C5',
        width:150,
    },
})