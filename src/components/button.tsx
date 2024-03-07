import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({navigation , tela}) => {
    return (
        <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate(tela)}
        >
            <Text style={styles.texto}>Let’s Start</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#1479C3',
        borderRadius: 200,
        paddingHorizontal: 57,
        paddingVertical: 18,
    },
    texto: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Botao;
