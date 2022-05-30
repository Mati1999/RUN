// import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
// import CategoriesScreens from './Screens/CategoriesScreen';
// import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';
// import DetailScreen from './Screens/DetailScreen';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';
import Store from './Store';
import { Provider } from 'react-redux'

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
    <Provider store={Store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <MainNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}