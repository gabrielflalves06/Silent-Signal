import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MessageBubble = ({ message, isMyMessage }) => {
    return (
        <View style={styles.container}>
            
            <View style={[styles.messageContainer, isMyMessage && styles.myMessageContainer]}>
                <Text style={styles.messageText}>{message}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10
    },
    messageContainer: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
        alignSelf: 'flex-start',
    },
    myMessageContainer: {
        alignSelf: 'flex-end',
        backgroundColor: '#2892df',
    },
    messageText: {
        fontSize: 16,
    },
});

export default MessageBubble;
