import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Calculator({ navigation }) {

    const [result, setResult] = useState('');
    const [calc1, setCalc1] = useState('');
    const [calc2, setCalc2] = useState('');
    
    const [data, setData] = useState([]);

    const doAddition = () => {
        let res = parseInt(calc1) + parseInt(calc2);
        setResult(res);

        setData([...data, { key: calc1 + ' + ' + calc2 + ' = ' + res }]);
        setCalc1('');
        setCalc2('');
    }
    const doSubstraction = () => {
        let res = parseInt(calc1) - parseInt(calc2);
        setResult(res);

        setData([...data, { key: calc1 + ' - ' + calc2 + ' = ' + res }]);
        setCalc1('');
        setCalc2('');
    }

    return (
        <View style={styles.container} >
            <Text style={[styles.margins, styles.textTop]} >Result: {result} </Text>
            <TextInput style={[styles.textinputs, styles.margins]}
                keyboardType='numeric'
                onChangeText={calc1 => setCalc1(calc1)}
                value={calc1} />
            <TextInput style={[styles.textinputs, styles.margins]}
                keyboardType='numeric'
                onChangeText={calc2 => setCalc2(calc2)}
                value={calc2} />
            <View style={styles.buttons} >
                <Button onPress={doAddition} title=" + " />
                <Button onPress={doSubstraction} title=" - " />
                <Button onPress={() => navigation.navigate('History', { list: data })} title=" HISTORY " />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textinputs: {
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
    },
    buttons: {
        flexDirection: 'row',
    },
    margins: {
        margin: '3%',
    },
    textTop: {
        marginTop: 100,
    },
});
