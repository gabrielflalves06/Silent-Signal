import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Perfil = () => {
    const screenHeight = Dimensions.get('window').height;
    const halfScreenHeight = screenHeight / 2;

    return (
        <View >
            <Image
                source={require("../assets/Perfil.png")}
                style={[Styles.Foto, { height: halfScreenHeight }]}
            />

            <View style={Styles.Conteiner}>
                <Text>
                    About: Sou casado e tenho filhos..
                </Text>

                <TouchableOpacity style={Styles.ChangerPhoto}>
                    <Image
                        source={require("../assets/camera.png")}
                        style={Styles.Camera}
                    />
                    <Text>
                        Change Photo Profile
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.ChangerPhoto}>
                    <Image
                        source={require("../assets/Caneta.png")}
                        style={Styles.Caneta}
                    />
                    <Text>
                        Change Photo Profile
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const Styles = StyleSheet.create({
    Conteiner: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    Foto: {
        width: "auto",
        resizeMode: 'cover',
    },

    ChangerPhoto: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#61646966",
        borderRadius: 10,
        width: 323,
        height: 37,
        margin: 10,
    },

    Camera: {
        margin: 20,
        alignItems: 'center',
    },
    Caneta: {
        margin: 20,
        alignItems: "center",
        width: 21,
        height: 20
    }
})
export default Perfil;