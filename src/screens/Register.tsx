import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Button from '../components/button';

const Register = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.inner}>
                    <Image
                        source={require('../assets/Register.png')}
                        style={styles.image}
                    />
                    <Text style={styles.texto}>Register</Text>

                    <View style={styles.inputs}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                        />


                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                        />
                    </View>
                    <Button navigation={navigation} tela={'Login'} />
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

    inputs: {
        margin: 20,
    },

    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },

});

export default Register;