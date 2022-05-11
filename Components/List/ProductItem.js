import { StyleSheet,Text,View,Image } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/Colors'

const ProductItem = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.img }} style={styles.img} />
            <Text style={styles.text}>{product.description}</Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.lightBlue,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    img: {
        width: 200,
        height: 100,
        borderRadius: 10,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: colors.darkBlue
    }
})