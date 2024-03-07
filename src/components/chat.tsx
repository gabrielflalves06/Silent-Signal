import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Chat = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#FFFFFF', '#1479C3']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.linearGradient}
        >
            <TouchableOpacity
                style={styles.chat}
                onPress={() => navigation.navigate("Chats")}
            >
                <Image
                    source={require("../assets/Amigo.png")}
                    style={styles.amigo}
                />
                <View style={styles.containerMensagem}>
                    <Text style={styles.nome}>
                        Geraldo Luiz
                    </Text>
                    <Text style={styles.mensagem}>
                        Oi, tudo bem? Vi seu projeto e queria dizer que está muito bom
                    </Text>
                </View>
            </TouchableOpacity >
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    chat: {
        borderRadius: 20, // <-- Inner Border Radius
        flex: 1,
        margin: 3, // <-- Border Width
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        flexDirection: "row",
    },

    nome: {
        fontWeight: "600",
        fontSize: 16,
    },

    containerMensagem:{
        padding: 10,
        width: 250,
    },

    amigo: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },

    linearGradient: {
        height: 100,
        marginHorizontal: 20,
        borderRadius: 20, // <-- Outer Border Radius
        marginVertical: 5,
    },

    mensagem:{

    }

}
)


export default Chat;