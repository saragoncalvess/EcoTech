import React from 'react'
import { Text, View } from 'react-native';

// Icones //
import { FontAwesome } from '@expo/vector-icons'

// Estilo //
import styles from './styles'

interface InfoItemProp {
    name: string,
    description: string,
    phone: string,
    address: {
        street: string,
        neighborhood: string,
        number: number,
        city: string
    },
    from: string,
    to: string
}

const InfoItem: React.FC<InfoItemProp> = ({ name, description, phone, address, from, to }) => {
    return (
        <View style={styles.box}>

            <View style={styles.titleBox}>
                <Text style={styles.titleText}>{name}</Text>
                <FontAwesome name="recycle" size={18} color={'#A8D2FF'} />
            </View>

            <View style={styles.info}>

                <View style={styles.lineData}>
                    <FontAwesome name='id-card' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>{description}</Text>
                </View>

                <View style={styles.lineData}>
                    <FontAwesome name='phone' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>{phone}</Text>
                </View>

                <View style={styles.lineData}>
                    <FontAwesome name='map-marker' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>
                        {
                            `${address.street} - ${address.number} - ${address.neighborhood} - ${address.city}`
                        }
                    </Text>
                </View>

                <View style={styles.lineData}>
                    <FontAwesome name='calendar' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>{`Horário: ${from}h - ${to}h`}</Text>
                </View>

            </View>
        </View>
    )
}

export default InfoItem;