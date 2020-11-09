import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Estilo //
import styles from './style'

// Imagens | Icones //
import landingImage from './../../assets/images/image-landing.png'
import mouseIcon from './../../assets/images/icons/mouse.png'
import { FontAwesome } from '@expo/vector-icons'
import TopBarHeader from '../../components/TopBarHeader'

function Info() {

    return (
        <View style={styles.container}>

            <TopBarHeader title={'Informações'}/>

        </View>
    )
}

export default Info;