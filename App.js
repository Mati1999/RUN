import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';
import Store from './Store';
import { Provider } from 'react-redux'
import { init } from './db';

export default function App() {

  const [loaded] = useFonts({
    LatoRegular: require('./assets/Fonts/Roboto-Regular.ttf'),
  });

  init()
    .then(() => { console.log('DB initialized') })
    .catch(error => { console.log(error.message) })

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