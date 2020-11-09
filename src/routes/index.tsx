import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

// Páginas / Componentes //
import Landing from './../pages/Landing'
import MapPoints from './../pages/MapPoints'
import Info from './../pages/Info'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Landing' component={Landing} />
            <Screen name='Info' component={Info} />
            <Screen name='MapPoints' component={MapPoints} />
        </Navigator>
    )
}

export default AppStack;