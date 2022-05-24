import { StyleSheet,Text,View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const CartItem = ({ item,onDelete }) => {
    return (
        <View>
            <View>
                <Text>{item.description}</Text>
            </View>
            <View>
                <View>
                    <Text>Cantidad: {item.quantity}</Text>
                    <Text>$ {item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({})