import { StyleSheet } from 'react-native'
import React from 'react'
import AuthScreen from '../../../Screens/AuthScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/Colors';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.darkBlue
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontFamily: 'LatoRegular',
                    fontSize: 26
                },
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={{
                    title: 'Auth'
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthStack

const styles = StyleSheet.create({})