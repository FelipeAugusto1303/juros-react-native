import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';


const JurosScreen = () => {
    const [value, setValue] = React.useState(null);
    const [multa, setMulta] = React.useState(null);
    const [juros, setJuros] = React.useState(null);
    const [dias, setDias] = React.useState(null);
    const [result, setResult] = React.useState(null);

    const calculaJuros = () => {
        if(value !== null && value !== "" ){
            setResult(((Number(juros)/3000)*Number(dias)*Number(value) + Number(value) + Number(multa)).toFixed(2))
        }
        else{
            Alert.alert("!!! Atenção !!!", "Coloque o valor do produto")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.appTitle}>Cálculo de Juros</Text>
            <View style={styles.inputs}>
                <TextInput
                    value={value} 
                    onChangeText={text => setValue(text)} 
                    style={styles.inputValor}
                    placeholder="Valor do produto"
                    keyboardType="number-pad"/>
                <TextInput
                    value={multa} 
                    onChangeText={text => setMulta(text)} 
                    style={styles.inputValor}
                    placeholder="Valor da multa"
                    keyboardType="number-pad"/>
                <TextInput
                    value={juros} 
                    onChangeText={text => setJuros(text)} 
                    style={styles.inputValor}
                    placeholder="Valor do juros %/mês"
                    keyboardType="number-pad"/>
                <TextInput
                    value={dias} 
                    onChangeText={text => setDias(text)} 
                    style={styles.inputValor}
                    placeholder="Dias de atraso"
                    keyboardType="number-pad"/>
            </View>
            

            <TouchableOpacity 
                style={styles.button}
                onPress={() => calculaJuros()}>
                <Text style={styles.buttonText}>calcular juros</Text>
            </TouchableOpacity>

            <View style={styles.resultContainer}>
                {result !== null ?
                <View> 
                    <Text style={styles.resultText}>Juros aplicado: {(Number(juros)/3000).toFixed(4)} %/dia</Text>
                    <Text style={styles.resultText}>Multa: R$ {Number(multa)}</Text>
                    <Text style={styles.resultText}>Valor com o juros aplicado: R${result}</Text> 
                </View>
                : null}
                
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    appTitle: {
        fontSize: 40,
        marginTop: 15,
        fontWeight: "bold",
        textAlign: "center" 
    },
    inputValor: {
        marginVertical: 10,
        paddingHorizontal: 10, 
        width: 300,
        height:50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10
    },
    inputs:{
        marginTop:30
    },
    button: {
        marginTop: 20,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#fff",
        backgroundColor: "#4CAF50"
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#FFF"
    },
    resultContainer: {
        flex: 2,
        marginTop: 30,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    resultText: {
        fontSize: 20,
        fontWeight: "bold",

    }
})

export default JurosScreen;