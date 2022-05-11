import { useState } from 'react';
import { StyleSheet,Text,View,ActivityIndicator } from 'react-native';
import CategoriesScreens from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';

export default function App() {

  const [categorySelected,setCategorySelected] = useState(null);

  const handleCategory = (category) => {
    console.log(category);
    setCategorySelected(category);
  }

  //FONTS

  const [loaded] = useFonts({
    LatoRegular: require('./assets/Fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }


  return (
    <View style={styles.container}>
      {categorySelected ?
        <ProductsScreen handleCategory={handleCategory} />
        :
        <CategoriesScreens handleCategory={handleCategory} />

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});
