import { StyleSheet,Text,View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from '../../../Screens/OrderScreen';

const Stack = createNativeStackNavigator();

function OrdersStack() {
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
                name="Orders"
                component={OrderScreen}
                options={{
                    title: 'Ordenes'
                }}
            />
        </Stack.Navigator>
    );
}

export default OrdersStack

const styles = StyleSheet.create({})