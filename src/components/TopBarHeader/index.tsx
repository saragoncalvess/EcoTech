import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

// Estilo //
import styles from './style'

// Imagens | Icones //
import { FontAwesome } from '@expo/vector-icons'

interface TopBarHeaderProps {
    title: string
}

const TopBarHeader: React.FC<TopBarHeaderProps> = ({ title }) => {

    const { goBack } = useNavigation()

    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity onPress={() => { goBack() }}>
                    <FontAwesome name='arrow-left' size={22} color={"#2A6E37"} />
                </TouchableOpacity>

                <Text style={styles.headerText}>{title}</Text>

                <Text>ECOTECH</Text>

            </View>

        </View>

    )
}

export default TopBarHeader;