import { StyleSheet,Text,View,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import CartItem from '../Components/List/CartItem'
import { useDispatch,useSelector } from 'react-redux';
import { confirmPurchase,removeItem } from '../Features/cart';
// import { PRODUCTSSELECTED } from '../Data/productsSelected';

const total = 12000;




const CartScreen = () => {

    const renderItem = (data) => (
        <CartItem item={data.item} onDelete={handleDelete} />
    )
    const dispatch = useDispatch()

    const { cart } = useSelector(state => state.cart.value)

    const handleConfirm = () => {
        dispatch(confirmPurchase(cart))
    }
    const handleDelete = (id) => {
        console.log('Se elimina del carrito')
        dispatch(removeItem({ id: id }))
    }

    return (
        <View>
            <View>
                <FlatList
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View>
                <TouchableOpacity onPress={handleConfirm}>
                    <Text>Confirmar compra</Text>
                    <View>
                        <Text>Total</Text>
                        <Text>$ {total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})