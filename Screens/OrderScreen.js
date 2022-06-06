import { StyleSheet,Text,View,FlatList } from 'react-native'
import React,{ useEffect } from 'react'
import OrderItem from '../Components/OrderItem'
import { ORDERS } from '../Data/Orders'
import { useDispatch,useSelector } from 'react-redux'
import { getOrders } from '../Features/orders'

const renderItem = (data) => (
    <OrderItem item={data.item} />
)


const OrderScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    },[])

    const { orders } = useSelector(state => state.orders.value)


    return (
        <View>
            <FlatList
                data={orders}
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