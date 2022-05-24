import { StyleSheet,Text,View,Image,useWindowDimensions,TouchableOpacity } from 'react-native'
import React,{ useState,useEffect } from 'react'
import { colors } from '../Styles/Colors';
import { PRODUCTS } from '../Data/products';

const DetailScreen = ({ route,navigation }) => {

    const { width,height } = useWindowDimensions();
    const [product,setProduct] = useState(null);
    const [orientation,setOrientation] = useState('');

    const { productId } = route.params;


    useEffect(() => {
        setOrientation(width > height ? 'landscape' : 'portrait')
    },[width,height]);

    useEffect(() => {
        const productSelected = PRODUCTS.filter(product => product.id === productId);
        setProduct(productSelected[0]);
    },[productId]);

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        product && (
            <View style={orientation === 'portrait' ? styles.containerVertical : styles.containerHorizontal}>
                <Image
                    source={{ uri: product.img }}
                    style={{
                        ...styles.image,
                        maxWidth: width * 0.8,
                        maxHeight: height * 0.5,
                        resizeMode: 'cover',
                    }}
                />
                <Text>{product.description}</Text>
                <Text>$ {product.price}</Text>

                <TouchableOpacity style={styles.goBack} onPress={handleBack}>
                    <Text style={styles.goBackText}>Volver</Text>
                </TouchableOpacity>
            </View>
        )

    )
}

export default DetailScreen

const styles = {
    containerVertical: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerHorizontal: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 300,
        marginTop: 20,
        marginBottom: 10,
    },
    goBack: {
        marginTop: 20,
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