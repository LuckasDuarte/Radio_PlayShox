import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImagemFundo: {
        width: "100%",
        height: '100%',
        resizeMode: 'contain',
        opacity: 0.8,
        backgroundColor: '#a60899'
    },
    LogoContainer: {
        width:'100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 280
    },
    logo: {
        width:200,
        height: 200
    }

})