import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { styles } from './styles/styles';

export default function TelaInicial() {
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
            
            
        </ImageBackground>
    </View>
  );
}
