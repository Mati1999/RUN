import { StyleSheet,Text,View,TextInput,TouchableOpacity } from 'react-native'
import React,{ useState,useEffect } from 'react'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import List from '../Components/List';
import { PRODUCTS } from '../Data/products';
import { colors } from '../Styles/Colors';
import { Entypo } from '@expo/vector-icons';

const ProductsScreen = ({ category = { id: 1,category: 'Ropa' },handleCategory }) => {

    const [input,setInput] = useState('');
    const [initialProducts,setInitialProducts] = useState([]);
    const [productsFiltered,setproductsFiltered] = useState([]);

    const handleErase = () => {
        setInput('');
    }

    useEffect(() => {
        if (initialProducts.length !== 0) {
            if (input === '') setproductsFiltered(initialProducts);
            else {
                let productSelected = initialProducts.filter(product => product.description.toLowerCase().includes(input.toLowerCase()));
                setproductsFiltered(productSelected);
            }
        }
    },[input,initialProducts]);

    useEffect(() => {
        const productsByCategory = PRODUCTS.filter(product => product.category === category.id);
        setInitialProducts(productsByCategory);
    },[]);

    return (
        <>
            <Header title={category.category} />
            <TouchableOpacity onPress={() => { handleCategory(null) }}>
                <Text>Volver</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    backgroundColor: colors.lightBlue,
                }}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={input}
                            onChangeText={setInput}
                            keyboardType='default'
                            style={styles.input}
                            placeholder='Ingrese el producto a buscar'
                        />
                        <TouchableOpacity onPress={() => { handleErase() }} style={styles.iconContainer}>
                            <Entypo name="erase" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.searchTypeText}>Buscar Categoría</Text>
                </Searcher>
                <View style={styles.listContainer}>
                    <List data={productsFiltered} itemType='Producto' />
                </View>
            </View>
        </>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        width: '78%',
        height: 50,
        padding: 10,
        backgroundColor: colors.regularBlue,
        borderRadius: 10,
        color: 'white',
    },
    iconContainer: {
        marginLeft: '2%',
        width: '20%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    icon: {
        fontSize: 30,
        color: colors.regularBlue,
    },
    searchTypeText: {
        width: '100%',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 20,
    }
})