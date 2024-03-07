import { Image, StyleSheet, Text, TextInput, View, ScrollView, Touchable, TouchableOpacity } from "react-native";
import Chat from "../components/chat";




const Chats = ({ navigation }) => {

    const renderizarMensagens = () => {
        const mensagem = [];
        for (let index = 0; index < 12; index++) {
            mensagem.push(<Chat key={index} navigation={navigation} />);
        }
        return mensagem;
    };


    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.titulo}>Chat</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil') }>
                    <Image
                        source={require('../assets/Perfil.png')}
                        style={styles.perfil}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.seach}>
                    <Image
                        source={require("../assets/Lupa.png")}
                        style={styles.lupa}
                    />
                    <TextInput placeholder="Seacher" />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {renderizarMensagens()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBlockColor:"#1479C3"
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },

    titulo: {
        fontSize: 56,
        color: "#1479C3",
        fontWeight: "700",
    },

    perfil: {
        width: 62.5,
        height: 62.5,
        borderRadius: 100,
    },

    lupa: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        alignItems: 'center',
    },

    seach: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#D9D9D970",
        height: 40,
        borderRadius: 100,
        margin: 15,
        width: 300,
        padding: 10,
    },

    contentContainer: {
        paddingBottom: 170, // Adicionando um paddingBottom para acomodar a última mensagem
    },
})

export default Chats;