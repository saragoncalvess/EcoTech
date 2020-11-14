import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({

    box: {
        width: Dimensions.get('window').width - 40,
        height: 175,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        paddingBottom: 10
    },

    titleBox: {
        backgroundColor: '#4A89CC',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },

    titleText: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: 'Signika_700Bold',
        color: '#A8D2FF',
        marginRight: 15,
    },

    info: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: "center"
    },

    lineData: {
        marginVertical: 5,
        marginHorizontal: 5,
        height: 25,
        flexDirection: 'row',
    },

    infoText: {
        fontSize: 11,
        fontFamily: 'Signika_400Regular',
        marginLeft: 10,
        color: '#4D6953'
    },
})

export default styles;