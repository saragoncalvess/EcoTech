import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

// Estilo //
import styles from './style'

// Imagens | Icones //
import landingImage from './../../assets/images/image-landing.png'
import mouseIcon from './../../assets/images/icons/mouse.png'
import { FontAwesome } from '@expo/vector-icons'

// Componentes //
import TopBarHeader from '../../components/TopBarHeader'
import InfoItem from '../../components/InfoItem'

// API e Mapa //
import api from '../../services/api'
import MapView, { Marker } from 'react-native-maps'

// Teste //
import Address from './address'
import { Dimensions } from 'react-native'

function MapPoints() {

    // Config Web Service - Geocoding //
    const googleAPI = 'https://maps.googleapis.com/maps/api/geocode/json?'
    const key = 'AIzaSyBwcEP0TXpwD1E5TYyHApMxfWjkssxoL1E'
    const inputType = 'textquery'

    const [address, setAddress] = useState(Address)
    const [location, setLocation] = useState([]) as any

    useEffect(() => {

        address.map((e, index) => {

            let street = encodeURIComponent(`${e.local.street} - ${e.local.city}`)

            const URL = `${googleAPI}address=${e.local.street}&key=${key}`

            api.get(URL)
                .then(res => {
                    const data = res.data

                    const coordenates = {
                        latitude: data.results[0].geometry.location.lat,
                        longitude: data.results[0].geometry.location.lng
                    }

                    setLocation([...location, coordenates])
                })
        })

    }, [])

    return (
        <View style={styles.container}>

            <TopBarHeader title={'Postos de Coleta'} />

            <MapView
                style={styles.map}
                rotateEnabled={false}
                showsPointsOfInterest={false}
                loadingEnabled={true}
                region={{
                    latitude: -23.609690,
                    longitude: -46.769064,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015
                }}
            >

                <Marker coordinate={{latitude: -23.609690,longitude: -46.769064}} pinColor="green" title='Matriz EcoTech'/>

                {
                    location.map((e: any, index: number) => {

                        return (
                            <Marker
                                coordinate={e}
                                key={index}

                            />
                        )
                    })
                }

            </MapView>


        </View >
    )
}

export default MapPoints;