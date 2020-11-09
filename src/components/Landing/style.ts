import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#96DCB2',
        alignItems: "center",
    },

    header: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50
    },

    image: {
        width: 300,
        height: 300,
    },

    logo: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: -2,
        marginTop: 5 
    },

    mouseIcon: {
        width: 25,
        height: 25,
        marginLeft: 5
    },

    slogan:{
        fontFamily: "BalsamiqSans_400Regular",
        fontSize: 11
    },

    title: {
        marginTop: 75,
        marginLeft: 25,
        alignSelf: "flex-start",
        fontSize: 25,
        fontFamily: 'Signika_700Bold',
        color: "#2A6E45"
    },

    buttonGroup:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        padding: 12,
        marginTop: 40
    },

    buttons: {
        marginHorizontal: 20,
        height: 150,
        width: 150,
        borderRadius: 8,
        justifyContent: "space-around",
        alignItems: "center"
    },

    buttonInfo:{
        backgroundColor: '#2A6E45',
        borderColor: "#245437",
        borderWidth: 1
    },

    buttonMap:{
        backgroundColor: '#A1524D',
        borderColor: "#8C4843",
        borderWidth: 1
    },

    buttonText: {
        fontFamily: "BalsamiqSans_700Bold",
        fontSize: 20,
        textAlign: "center",
    },

    buttonTextInfo: {
        color: "#A5E198"
    },
    buttonTextMap: {
        color: "#FFB8B4"
    },

    footer:{
        backgroundColor: "#7FBA95",
        marginTop: 40,
        width: "100%",
        padding: 7,
        justifyContent: "center",
        alignItems: "center"
    },

    footerText:{
        fontFamily: "BalsamiqSans_400Regular",
        fontSize: 10
    }
})

export default styles;