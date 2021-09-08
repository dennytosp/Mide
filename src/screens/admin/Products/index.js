import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import Header from '../../../components/Header';

const Products = () => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Header title="List Products"/>
            <Text>Products</Text>
        </View>
    )
}

export default Products
