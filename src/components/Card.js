import React from 'react';
import {View,Image,Text} from 'react-native'
import CardStyle from './CardStyle'


const Card = ({product}) => {
    const isFalse = false
    return(
        <View style={CardStyle.container}>
            <Image style={CardStyle.image} source={{uri:product.imgURL}} resizeMode='contain'/>
            <View style={CardStyle.inner_container}>
                <Text style={CardStyle.title}>{product.title}</Text>
                <Text style={CardStyle.price}>{product.price}</Text>
                <Text style={CardStyle.stock}>{isFalse == product.inStock ? <Text>Stokta Yok</Text> : null}</Text>
            </View>
        </View>
    )
}

export default Card;