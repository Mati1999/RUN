import { StyleSheet,Text,View } from 'react-native'
import React,{ useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigatorLogged from './Tabs/UserLogged'
import AuthStack from './Stacks/Auth'
import { useSelector } from 'react-redux'

const MainNavigator = () => {

    const { user } = useSelector(state => state.auth.value)

    return (
        <NavigationContainer>
            {/* Sacá el ! de usar.email */}
            {!user.email === '' ?
                <AuthStack />
                :
                <TabNavigatorLogged />
            }
        </NavigationContainer>
    )
}

export default MainNavigator
