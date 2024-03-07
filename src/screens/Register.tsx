import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Button from '../components/button';

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Register.png')}
                style={styles.image}
            />
            <Text style={styles.texto}>Sing Up</Text>

            <View style={styles.inputs}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
            </View>




            <Button navigation={navigation} tela={'Chats'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    image: {
        width: 450,
        height: 350,
        resizeMode: 'contain',
        marginBottom: 20,
        backgroundColor: '#1479C3',
    },

    texto: {
        color: "#004DFF",
        fontSize: 36,
        fontWeight: '700',
    },

    input: {
        backgroundColor: "#B3C0DE",
        margin: 20,
        padding: 20,
        width: 300,
        borderRadius: 100,
    },

    inputs:{
        margin: 20,
    }
    
    
});

export default Register;