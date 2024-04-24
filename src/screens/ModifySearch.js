import { View, TouchableOpacity, Text ,StyleSheet, Modal } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { useState } from "react"
import { Button } from "../components/Button"


export function ModifySearch(props) {

    const [nome, setNome] = useState('')
    const [date, setDate] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    
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
                        {/* ENCONTRAR MODULO PARA POR IMAGEM DA GALERIA -> T2*/}
                    </View>


                    <Button action={backToHome} title="SALVAR"/>
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
    deleteWrapper: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:-200,
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