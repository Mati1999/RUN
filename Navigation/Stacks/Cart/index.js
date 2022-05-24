import { StyleSheet,Text,View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../../../Screens/CategoriesScreen';
import ProductsScreen from '../../../Screens/ProductsScreen';
import DetailScreen from '../../../Screens/DetailScreen';
import { colors } from '../../../Styles/Colors';

const Stack = createNativeStackNavigator();

function CartStack() {
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
                name="Cart"
                component={CartStack}
                options={{
                    title: 'Cart'
                }}
            />
        </Stack.Navigator>
    );
}

export default CartStack

const styles = {}