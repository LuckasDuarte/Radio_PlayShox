import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts,
    Ubuntu_400Regular,
    Ubuntu_700Bold
} from "@expo-google-fonts/ubuntu"
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { Audio } from 'expo-av';
import { styles } from './styles/styles';
// icones
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function TelaInicial() {

    // <Ionicons name="pause" size={24} color="black" />
    // ToDo Criar Pause 


    // Config Audio
    const [sound, setSound] = useState(false);
    const [iconName, setIconName] = useState('play');

    // Estado de Animação Logo
    
    

    

    
    

    async function TocarRadio(){
        console.log("Sintonizando a Rádio");

        const {sound} = await Audio.Sound.createAsync({uri:("http://srv11.ipstm.net:7002/;type=http&nocache=1")});
        setSound(sound);

        console.log("Rádio Sintonizada, Tocando...")
    
        if (iconName == "play"){
            sound.pauseAsync()
        } else {
            sound.playAsync()
        }
    }

    useEffect (() => {
        
        return sound
        ? () => {
            console.log("Pausando Rádio...");
            
            sound.unloadAsync();

        }
        : undefined;
    }, [sound])

    console.disableYellowBox = true;

    const [fontsLoaded] = useFonts({
       Ubuntu_400Regular,
       Ubuntu_700Bold
    });

    if (!fontsLoaded){
        return <AppLoading/>
    } else {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ImageBackground
                source={require('./images/los-santos.jpg')}
                style={styles.ImagemFundo}
            >
                <View style={styles.LogoContainer}>
                    <Animatable.Image
                        animation="fadeInDown"
                        source={require('./images/logo-shox.png')}
                        style={styles.logo}
                    />
                </View>
                {/* link radio: http://srv11.ipstm.net:7002/;type=http&nocache=1 */}
                <Animatable.View style={styles.titleContainer}
                    animation="fadeInUp"
                    delay={500}

                >
                    <Text style={styles.title}>RÁDIO BPS</Text>
                        <TouchableOpacity
                            style={styles.pressablePlay}
                            onPressIn={() => {
                                if (iconName == "play"){
                                    setIconName("pause")
                                } else {
                                    setIconName("play")
                                }
                            }}
                            onPress={TocarRadio}
                        >
                            <FontAwesome5 name={iconName} style={styles.iconePlay} />
                        </TouchableOpacity>
                </Animatable.View>
                {/* Redes */}
                <Animatable.View
                    style={styles.redesContainer}
                    animation="fadeInUp"
                >
                    <Animatable.View
                        animation="fadeInRight"
                        delay={600}
                    >
                        <TouchableOpacity 
                        style={styles.btnRedes}
                        >
                            <AntDesign name="youtube" size={50} color="#f00" />
                        </TouchableOpacity>
                    </Animatable.View>
                    
                    
                    <TouchableOpacity 
                    style={styles.btnRedes}
                    >
                        <Foundation name="web" size={50} color="#41729F" />
                    </TouchableOpacity>
                    
                    <Animatable.View
                        animation="fadeInLeft"
                        delay={600}
                    >
                        <TouchableOpacity 
                            style={styles.btnRedes}
                        >
                            <FontAwesome5 name="discord" size={50} color="#993399" />
                        </TouchableOpacity>
                    </Animatable.View>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
    }
    
}
// ToDo:
// Navegar as paginas play shox: https://docs.expo.dev/versions/latest/sdk/webbrowser/
// Discord: https://discord.com/invite/T9khBcu
// Site: https://www.brasilplayshox.com.br/
// Youtube: https://www.youtube.com/@BrasilPlayShox



// <FontAwesome5 name="play" style={styles.iconePlay} />
// Pacote Animações prontas https://github.com/oblador/react-native-animatable