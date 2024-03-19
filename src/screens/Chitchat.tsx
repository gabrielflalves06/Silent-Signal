import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet, ScrollView } from 'react-native';
import MessageBubble from '../components/mensagem';

const Chat = () => {
    const [mensagem, setMensagem] = useState([]);
    const [digitando, setDigitando] = useState(false);
    const [texto, setTexto] = useState('');


    /* função para testar o envio de mensagem */
    const Enviar = () => {
        if (texto !== null) {
            setMensagem([...mensagem, texto]),
            setTexto('');
            setDigitando(false)
        }
    }

    return (
        <>
            <View style={styles.header}>
                <Text>PERFIL</Text>
            </View>
            <ScrollView style={styles.messageContainer}>
                {mensagem.map((texto) => (
                    <MessageBubble message={texto} isMyMessage={true} />
                ))}
            </ScrollView>
            <View style={styles.messageInput}>
                <TextInput placeholder="Mensagem" style={styles.input} value={texto} onChangeText={(text) => {
                    setTexto(text)
                    setDigitando(text.length > 0)
                }} />
                <TouchableOpacity style={styles.button} onPress={Enviar}>
                    <Image source={digitando ? require("../assets/Enviar.png") : require('../assets/microfone.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    messageInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#1479C3',
        borderRadius: 25,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 24,
        height: 24,
    },
});

export default Chat;
