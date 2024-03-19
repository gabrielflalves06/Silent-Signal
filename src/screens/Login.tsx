import { Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Button from '../components/button';

const Login = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.inner}>
                    <Image
                        source={require('../assets/Register.png')}
                        style={styles.image}
                    />
                    <Text style={styles.texto}>Sing Up</Text>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                        />
                        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
                            <Text>Clique aqui para se Cadastrar</Text>
                        </TouchableOpacity>
                    </View>

                    <Button navigation={navigation} tela={'Chats'} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inner: {
        flex: 1,
        alignItems: "center",
        marginBottom: 15,
    },
    image: {
        width: 450,
        height: 300,
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

    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },

    register: {
        marginBottom: 30,
        alignItems: "center",
    }

});

export default Login;