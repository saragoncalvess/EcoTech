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
    address: string,
    from: string,
    to: string
}

const InfoItem: React.FC<InfoItemProp> = ({ name, description, phone, address, from, to }) => {
    return (
        <View style={styles.box}>
            <Text style={styles.titleBox}>Dados do Posto de Coleta</Text>

            <View style={styles.info}>

                <View style={styles.lineData}>
                    <FontAwesome name='building' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>{name}</Text>
                </View>

                <View style={styles.lineData}>
                    <FontAwesome name='building' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>{description}</Text>
                </View>

                <View style={styles.lineData}>
                    <FontAwesome name='building' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>{phone}</Text>
                </View>

                <View style={styles.lineData}>
                    <FontAwesome name='building' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>{address}</Text>
                </View>

                <View style={styles.lineData}>
                    <FontAwesome name='building' size={15} color={"#4D6953"} />
                    <Text style={styles.infoText}>{`Horário: ${from} - ${to}`}</Text>
                </View>

            </View>
        </View>
    )
}

export default InfoItem;