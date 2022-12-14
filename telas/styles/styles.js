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
        opacity: 0.9,
        backgroundColor: '#a60899'
    },
    LogoContainer: {
        width:'100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    logo: {
        width:200,
        height: 200,
        borderRadius: 500
    },
    titleContainer:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70
    },
    title:{
        color: "#fff",
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },
    iconePlay:{
        color: '#a60899',
        fontSize: 45,
        left: 1
    },
    pressablePlay: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        width: 90,
        height: 90,
        borderRadius: 100
    },
    redesContainer:{
        width: '100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    btnRedes: {
        margin: 20,
        marginTop: 80,
    }


})