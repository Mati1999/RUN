import { StyleSheet,Text,View,TextInput,TouchableOpacity } from 'react-native'
import React,{ useState,useEffect } from 'react'
import Searcher from '../Components/Searcher';
import { colors } from '../Styles/Colors';
import List from '../Components/List';
import { Entypo } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';
import { selectCategory } from '../Features/categories';
import { setProductsByCategory } from '../Features/products';
const CategoriesScreen = ({ navigation }) => {

    const [input,setInput] = useState('');
    const [categoriesFilter,setCategoriesFilter] = useState();
    const { categories } = useSelector(state => state.categories.value);
    const dispatch = useDispatch()

    useEffect(() => {
        if (input === '') setCategoriesFilter(categories);
        else {
            let categorySelected = categoriesFilter.filter(category => category.category.toLowerCase().includes(input.toLowerCase()));
            setCategoriesFilter(categorySelected);
        }
    },[input]);

    const handleErase = () => {
        setInput('');
    }

    const handleSelectedCategory = (category) => {
        // handleCategory(category);
        dispatch(setProductsByCategory(category.id))
        dispatch(selectCategory(category.id));
        navigation.push('Products',{
            categoryId: category.id,
            categoryTitle: category.category,
        });
    }

    return (
        <>
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
                            placeholder='Ingrese la categoría a buscar'
                        />
                        <TouchableOpacity onPress={() => { handleErase() }} style={styles.iconContainer}>
                            <Entypo name="erase" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.searchTypeText}>Buscar Categoría</Text>
                </Searcher>
                <View style={styles.listContainer}>
                    <List data={categoriesFilter} onPress={handleSelectedCategory} />
                </View>
            </View>
        </>
    )
}

export default CategoriesScreen

const styles = {
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
}