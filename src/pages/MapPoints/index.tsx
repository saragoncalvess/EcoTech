import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Estilo //
import styles from './style'

// Imagens | Icones //
import landingImage from './../../assets/images/image-landing.png'
import mouseIcon from './../../assets/images/icons/mouse.png'
import { FontAwesome } from '@expo/vector-icons'

// Componentes //
import TopBarHeader from '../../components/TopBarHeader'

function MapPoints() {

    return (
        <View style={styles.container}>
            <TopBarHeader title={'Postos de Coleta'}/>


        </View>
    )
}

export default MapPoints;