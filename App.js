import { useState } from 'react';
import { StyleSheet,Text,View,ActivityIndicator } from 'react-native';
import CategoriesScreens from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';
import DetailScreen from './Screens/DetailScreen';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './Navigation/Shop';

export default function App() {

  // const [categorySelected,setCategorySelected] = useState(null);
  // const [productSelected,setProductSelected] = useState(null);

  // const handleCategory = (category) => {
  //   setCategorySelected(category);
  // }

  // const handleProduct = (product) => {
  //   setProductSelected(product);
  // }

  //FONTS

  const [loaded] = useFonts({
    LatoRegular: require('./assets/Fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}