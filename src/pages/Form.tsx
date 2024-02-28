import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native'
import { MaskedTextInput } from "react-native-mask-text";
import ButtonX from '../components/Button';
import Logo from '../../assets/logo.png';

const Form = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [observacao, setObservacao] = useState("");

  const handleSubmit = () => {
    console.log("Nome: ", nome);
    console.log("Telefone: ", telefone);
    console.log("Localização: ", localizacao);
    console.log("Observação: ", observacao);
    console.log("Enviado com sucesso!");
  }
  return (
    <ScrollView style={{backgroundColor:"#000000", margin:0}}>
      <View style={styles.container}>
        <View style={styles.containerCenter}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <Text style={styles.text}> Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo" onChangeText={text => setNome(text)} value={nome} />
        <Text style={styles.text}> Telefone: </Text>
        <MaskedTextInput
          style={styles.input} placeholder='(11)99999-9999' mask="(99)99999-9999" onChangeText={(text, rawText) => {
            setTelefone(text);
          }}
          keyboardType="numeric" />
        <Text style={styles.text}> Descreva sua Localização: </Text>
        <TextInput
          style={styles.inputArea} multiline numberOfLines={4}
          placeholder="Descreva sua localização."
          onChangeText={text => setLocalizacao(text)}
          value={localizacao} />
        <Text style={styles.text}> Observação: </Text>
        <TextInput
          style={styles.inputArea} multiline numberOfLines={4}
          placeholder="Descreva alguma observaç'ao se for necessario."
          onChangeText={text => setObservacao(text)} 
          value={observacao} />
        <View style={styles.containerCenter}>
          <ButtonX title="Pedir ajuda agora!" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    width: '100%', // Aqui está a mudança
    height: '100%', // Aqui está a mudança
  },
  containerCenter: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderColor: "rgba(238, 203, 0, 0.991)",
    borderWidth: 3,
    backgroundColor: "rgba(238, 203, 0, 0.991)",
    borderRadius: 10,
    padding: 10,
    width: '100%',

  },
  inputArea: {
    height: 100,
    borderColor: "rgba(238, 203, 0, 0.991)",
    borderWidth: 3,
    backgroundColor: "rgba(238, 203, 0, 0.991)",
    borderRadius: 10,
    padding: 10,
    width: '100%',

  },
  text: {
    paddingTop: 10,
    paddingBottom: 5,
    color: "rgba(238, 203, 0, 0.991)",
  },
  logo: {
    width: 300,
    height: 150,
  }

});
export default Form;
