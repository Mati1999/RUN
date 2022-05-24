import { StyleSheet,Text,View,TextInput,TouchableOpacity,KeyboardAvoidingView,TouchableWithoutFeedback,Platform,Keyboard } from 'react-native'
import React,{ useState,useEffect } from 'react'
import Searcher from '../Components/Searcher'
import List from '../Components/List';
import { PRODUCTS } from '../Data/products';
import { colors } from '../Styles/Colors';
import { Entypo } from '@expo/vector-icons';

const ProductsScreen = ({ category = { id: 1,category: 'Ropa' },navigation,route }) => {

    const [input,setInput] = useState('');
    const [initialProducts,setInitialProducts] = useState([]);
    const [productsFiltered,setproductsFiltered] = useState([]);


    const { categoryId } = route.params;

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
        const productsByCategory = PRODUCTS.filter(product => product.category === categoryId);
        setInitialProducts(productsByCategory);
    },[categoryId]);

    const handleDetailProduct = (product) => {
        navigation.push('Detail',{
            productId: product.id,
            productTitle: product.description,
        });
    }

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoid}
            keyboardVerticalOffset={10}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                        <List data={productsFiltered} itemType='Producto' onPress={handleDetailProduct} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity style={styles.goBack} onPress={handleBack}>
                <Text style={styles.goBackText}>Volver</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default ProductsScreen

const styles = {
    keyboardAvoid: {
        width: '100%',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputContainer: {
        flexDirection: 'row',
    },
    listContainer: {
        height: '70%',
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
    },
    goBack: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: colors.lightBlue,
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    goBackText: {
        fontSize: 20,
    }
}