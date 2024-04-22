import { useState } from 'react'
import { View, Text, Image, StyleSheet  } from 'react-native'
import { Button } from './src/components/Button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PaperProvider } from 'react-native-paper'
import {TextInput} from 'react-native-paper'

const theme = {
  color: {
    primary: '#372775',
    secondary: 'blue'
  }
}

export function Example() {
  const[txtPeso, setPeso] = useState('')
  const[txtAltura, setAltura] = useState('')
  const[imc, setIMC] = useState('')
  
  const calcularIMC = () => {
    let peso = parseFloat(txtPeso)
    let altura = parseFloat(txtAltura)

    let imcCalculado = peso / (altura * altura)
    setIMC(imcCalculado.toFixed(2)) 
  }

  return (
    <PaperProvider theme={theme}>
      <View>
        <Icon name='mood' size={60} color='#000000' />
        <Image style={{width:30, height:30}} source={{uri: 'https://github.com/LucasCarvalhoSilva.png'}}/>
        <Text style={estilo.texto}>Peso:</Text>
        <TextInput label='Peso' value={txtPeso} onChangeText={setPeso}/>
        <Text style={estilo.texto}>Altura:</Text>
        <TextInput label='Altura' value={txtAltura} onChangeText={setAltura}/>
        <Button title='CALCULAR' action={calcularIMC}/>
        <Text style={estilo.texto}>{imc}</Text>
      </View>
    </PaperProvider>
  )
}

const estilo = StyleSheet.create({
  texto: {
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular',
    color: '#5555FF'
  },
  textInput: {
    fontSize: 24,
  }
})