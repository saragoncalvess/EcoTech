import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Estilo //
import styles from './style'

// Imagens | Icones //
import landingImage from './../../assets/images/image-landing.png'
import mouseIcon from './../../assets/images/icons/mouse.png'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Landing() {

    const { navigate } = useNavigation()

    // Navegará para a tela de Postos de Coleta //
    function navigateToMap() {
        navigate('MapPoints')
    }

    // Navegará para a tela de Postos de Coleta //
    function navigateToInfo() {
        navigate('Info')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={landingImage} resizeMode='contain' style={styles.image} />

                <View style={styles.logo}>
                    <Text style={{ color: "#3B9945", fontWeight: 'bold', fontSize: 30 }}>ECHO</Text>
                    <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 30 }}>TECH</Text>
                    <Image source={mouseIcon} style={styles.mouseIcon} resizeMode='contain' />
                </View>

                <Text style={styles.slogan}>
                    Coletando soluções para o mundo.
                </Text>
            </View>

            <Text style={styles.title}>{`Seja Bem-vindo.\nO que deseja fazer ?`}</Text>

            <View style={styles.buttonGroup}>

                <TouchableOpacity style={[styles.buttons, styles.buttonInfo]} onPress={navigateToInfo}>
                    <Text style={[styles.buttonText, styles.buttonTextInfo]}>Informações</Text>
                    <FontAwesome name='info-circle' size={45} color={"#A5E198"} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttons, styles.buttonMap]} onPress={navigateToMap}>
                    <Text style={[styles.buttonText, styles.buttonTextMap]} >Postos de Coleta</Text>
                    <FontAwesome name='map' size={45} color={"#FFB8B4"} />
                </TouchableOpacity>

            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {`Copyright © 2020. EcoTech`}
                </Text>
            </View>
        </View>
    )
}

export default Landing;