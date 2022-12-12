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
        opacity: 0.7,
        backgroundColor: '#a60899'
    },
    LogoContainer: {
        width:'100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55
    },
    logo: {
        width:200,
        height: 200,
        borderRadius: 500
    },
    radioImageContainer: {
        width: '100%',
        // backgroundColor: "#069",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioImage: {
        width:130,
        height: 130,
        borderRadius: 100,
    }


})