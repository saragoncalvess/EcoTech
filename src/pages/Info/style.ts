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

    recycleIcon: {
        width: 175,
        height: 175,
        marginLeft: 5,
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
        marginTop: 30
    },

    buttons: {
        marginHorizontal: 10,
        padding: 4,
        height: 150,
        width: 150,
        borderRadius: 8,
        justifyContent: "space-around",
        alignItems: "center"
    },

    buttonTrash:{
        backgroundColor: '#2A6E45',
        borderColor: "#245437",
        borderWidth: 1
    },

    buttonContact:{
        backgroundColor: '#5390d9',
        borderColor: "#245437",
        borderWidth: 1
    },

    buttonStore:{
        backgroundColor: '#87b198',
        borderColor: "#245437",
        borderWidth: 1
    },

    buttonAbout:{
        backgroundColor: '#A1524D',
        borderColor: "#8C4843",
        borderWidth: 1
    },

    buttonText: {
        fontFamily: "BalsamiqSans_700Bold",
        fontSize: 22,
        textAlign: "center",
    },

    buttonTextTrash: {
        color: "#A5E198"
    },
    buttonTextAbout: {
        color: "#FFB8B4"
    },
    buttonTextContact:{
        color:"#a2d2ff"
    },
    buttonTextStore:{
        color:"#658b74"
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