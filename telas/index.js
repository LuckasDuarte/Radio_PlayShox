import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts,
    Ubuntu_400Regular,
    Ubuntu_700Bold
} from "@expo-google-fonts/ubuntu"

import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { styles } from './styles/styles';

// Carrega as Fontes

export default function TelaInicial() {


    let [fontsLoaded] = useFonts({
       Ubuntu_400Regular,
       Ubuntu_700Bold
    });

    
    if (!fontsLoaded) {
        return <AppLoading/>;
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
                
                
            </ImageBackground>
        </View>
        );
    }
}
