import { StyleSheet,Text,View,useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/Colors'

const CategoryItem = ({ category }) => {

    const { width,height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.container,
            maxWidth: width * 0.4,
            maxHeight: height * 0.3,
        }}>
            <Text style={styles.text}>{category.category}</Text>
        </View>
    )
}

export default CategoryItem

const styles = {
    container: {
        width: 150,
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
        backgroundColor: colors.regularBlue,
        margin: 15,
        borderRadius: 10,
    },
    text: {
        fontSize: 18
    }
}