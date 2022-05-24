import { StyleSheet,Text,View,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import CartItem from '../Components/List/CartItem'
import { PRODUCTSSELECTED } from '../Data/productsSelected';

const total = 12000;

const handleDelete = () => console.log('Se elimina del carrito');
const handleConfirm = () => console.log('Se confirma la compra');

const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handleDelete} />
)

const CartScreen = () => {
    return (
        <View>
            <View>
                <FlatList
                    data={PRODUCTSSELECTED}
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