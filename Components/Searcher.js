import { StyleSheet,Text,View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Searcher = ({ children,additionalStyles }) => {
    return (
        <View style={{ ...styles.searcherContainer,...additionalStyles }}>
            {children}
        </View>
    )
}

export default Searcher

const styles = StyleSheet.create({
    searcherContainer: {
        padding: 10,
        width: '90%',
        height: 120,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 10,
    }
})