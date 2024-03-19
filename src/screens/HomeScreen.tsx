import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../components/button';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.sky} />
            <Image
                source={require('../assets/Home.png')}
                style={styles.image}
            />
            <View style={styles.textos}>
                <Text style={styles.titulo}>Vamos nos conectar</Text>
                <Text style={styles.slogan}>Silent Signal a plataforma de texto mais anônima que existe</Text>
            </View>

            <Button navigation={navigation} tela={'Login'} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    sky: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 350,
        backgroundColor: '#1479C3',
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
    textos: {
        alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    slogan: {
        fontSize: 20,
        marginBottom: 70,
        textAlign: 'center',
    },
});



export default Home;
