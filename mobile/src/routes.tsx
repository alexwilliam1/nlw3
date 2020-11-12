import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator()

import OrphanagesMap from './pages/Orphanagesmap'
import OrphanageDetails from './pages/OrphanageDetails'

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'

import Header from './components/Header'

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'}}}> 
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap}
          // options= {{ headerShown: false }} // Desabilitar header em apenas uma pagina 
        />
        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails}
          options= {{ 
            headerShown: true, 
            header: () => <Header showCancel={false} title='Orfanato'/> 
          }} // Desabilitar header em apenas uma pagina 
        />

        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}
          options= {{ 
            headerShown: true, 
            header: () => <Header title='Selecione no mapa'/> 
          }}
        />

        <Screen 
          name="OrphanageData" 
          component={OrphanageData}
          options= {{ 
            headerShown: true, 
            header: () => <Header title='Informe os dados'/> 
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}