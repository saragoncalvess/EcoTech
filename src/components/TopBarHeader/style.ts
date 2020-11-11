import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        alignItems: "center",
        height: 80
    },

    header: {
        width: width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: "#7FBA95",
        borderBottomColor: '#6EAB85',
        borderBottomWidth: 1,
        flex: 1
    },

    headerText: {
        fontFamily: 'Signika_700Bold',
        color: "#2A6E37",
        fontSize: 18,
        marginLeft: 30
    }
})

export default styles;