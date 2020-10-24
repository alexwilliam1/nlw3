import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator()

import OrphanagesMap from './pages/Orphanagesmap'
import OrphanageDetails from './pages/OrphanageDetails'

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}> 
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap}
          // options= {{ headerShown: false }} // Desabilitar header em apenas uma pagina 
        />
        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails}
          // options= {{ headerShown: false }} // Desabilitar header em apenas uma pagina 
        />
      </Navigator>
    </NavigationContainer>
  )
}