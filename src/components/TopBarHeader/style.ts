import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: "#7FBA95",
        borderBottomColor: '#6EAB85',
        borderBottomWidth: 1,
    },

    headerText:{
        fontFamily: 'Signika_700Bold',
        color: "#2A6E37",
        fontSize: 18,
        marginLeft: 30
    }
})

export default styles;