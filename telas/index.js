import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts,
    Ubuntu_400Regular,
    Ubuntu_700Bold
} from "@expo-google-fonts/ubuntu"
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Button} from 'react-native';
import { Audio } from 'expo-av';
import { styles } from './styles/styles';
// icones
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TelaInicial() {

    // <Ionicons name="pause" size={24} color="black" />
    // ToDo Criar Pause 


    // Config Audio
    const [sound, setSound] = useState(false);
    const [iconName, setIconName] = useState('play');
    

    

    
    

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
                    <Image
                        source={require('./images/logo-shox.png')}
                        style={styles.logo}
                    />
                </View>
                {/* link radio: http://srv11.ipstm.net:7002/;type=http&nocache=1 */}
                <View style={styles.radioImageContainer}>
                    <Image
                        source={require('./images/radio.png')}
                        style={styles.radioImage}
                    /> 
                </View>
                <View style={styles.titleContainer}>
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
                </View>
            </ImageBackground>
        </View>
    );
    }
    
}

// <FontAwesome5 name="play" style={styles.iconePlay} />
