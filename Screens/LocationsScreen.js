import { FlatList,StyleSheet,View } from 'react-native'
import React,{ useEffect } from 'react'
import PlaceItem from '../Components/PlaceItem'
import { useSelector,useDispatch } from 'react-redux'
import { getLocations } from '../Features/locations'

const renderItem = ({ item }) => {

    return (
        <PlaceItem
            onSelect={() => { }}
            title={item.title}
            image={item.picture}
            address={item.address}
            id={item.id}
        />
    )
}

const LocationsScreen = () => {

    const dispatch = useDispatch()

    const { locations } = useSelector(state => state.location.value)

    useEffect(() => {
        dispatch(getLocations())
    },[]);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={locations}
                renderItem={renderItem}
                keyExtractor={location => location.id}
            />
        </View>
    )
}

export default LocationsScreen

const styles = StyleSheet.create({})