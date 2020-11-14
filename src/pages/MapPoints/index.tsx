import React, { useEffect, useRef, useState, version } from 'react'
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
import { timing } from 'react-native-reanimated'

function MapPoints() {

    const mapView = useRef(null) as any

    // Config Web Service - Geocoding //
    const googleAPI = 'https://maps.googleapis.com/maps/api/geocode/json?'
    const key = 'AIzaSyBwcEP0TXpwD1E5TYyHApMxfWjkssxoL1E'
    const inputType = 'textquery'

    const [location, setLocation] = useState([]) as any
    const [showMatrizInfo, setShowMatrizInfo] = useState(true)

    useEffect(() => {

        async function loadLocation() {
            Address.map((e: any, index: number) => {

                let street = encodeURIComponent(`${e.local.street} - ${e.local.city}`)

                const URL = `${googleAPI}address=${e.local.street}&key=${key}`

                api.get(URL)
                    .then(res => {
                        const data = res.data

                        setLocation((oldLocation: any) => [...oldLocation, {
                            latitude: data.results[0].geometry.location.lat,
                            longitude: data.results[0].geometry.location.lng,
                            id: e.id
                        }])
                    })
            })
        }

        loadLocation()
    }, [])

    return (
        <View style={styles.container}>

            <TopBarHeader title={'Postos de Coleta'} />

            <MapView
                style={styles.map}
                rotateEnabled={false}
                showsPointsOfInterest={false}
                showsTraffic={false}
                loadingEnabled={true}
                ref={mapView}
                region={{
                    latitude: -23.609690,
                    longitude: -46.769064,
                    latitudeDelta: 0.099,
                    longitudeDelta: 0.099
                }}
            >

                {// Carrega os marcadores no mapa //
                    location.map((place: any, index: number) => {
                        return <Marker
                            coordinate={place}
                            key={index}
                            title={Address[place.id].name}
                        />
                    })
                }
            </MapView>

            <ScrollView
                horizontal={true}
                style={styles.scrollViewContainer}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onMomentumScrollEnd={(e) => {

                    // Quando o scroll acabar, o mapa irá atualizar para o novo endereço //
                    const qtdScroll = e.nativeEvent.contentOffset.x

                    const place = (qtdScroll > 0) ?
                        qtdScroll / Dimensions.get('window').width
                        : 0

                    const indexScroll = Math.round(place)

                    const { latitude, longitude } = location[indexScroll]

                    mapView.current.animateCamera({ center: { latitude, longitude }, zoom: 15 })
                }}
            >

                {
                    // Carrega os dados do posto de coleta //
                    location.map((place : any) =>{
                        return (
                            <InfoItem
                                key={place.id}
                                name={Address[place.id].name}
                                description={Address[place.id].description}
                                phone={Address[place.id].phone}
                                address={{
                                    street: Address[place.id].local.street,
                                    number: Address[place.id].local.number,
                                    neighborhood: Address[place.id].local.neighborhood,
                                    city: Address[place.id].local.city
                                }}
                                from={Address[place.id].from.toString()}
                                to={Address[place.id].to.toString()}
                            />
                        )
                    })
                }

            </ScrollView>

            <View style={styles.toScroll}>
                <Text style={styles.scrollText}>{`<<  Deslizar  >>`}</Text>
            </View>
            
        </View >
    )
}

export default MapPoints;