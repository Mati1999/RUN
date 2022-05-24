import { StyleSheet,Text,View,FlatList } from 'react-native'
import React from 'react'
import OrderItem from '../Components/OrderItem'
import { ORDERS } from '../Data/Orders'

const renderItem = (data) => (
    <OrderItem item={data.item} />
)

const OrderScreen = () => {
    return (
        <View>
            <FlatList
                data={ORDERS}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})