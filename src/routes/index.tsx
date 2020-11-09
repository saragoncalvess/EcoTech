import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

// Páginas / Componentes //
import Landing from './../pages/Landing'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Landing' component={Landing} />
        </Navigator>
    )
}

export default AppStack;