import React from "react";
import { Text,StatusBar,View,StyleSheet,FlatList,TextInput, Dimensions } from "react-native";
import Card from "../../src/components/Card";
import Product_data from "../../src/market.json";

function App(){
    const allProducts = ({item}) => <Card product={item}/>
    const [text] = React.useState()
    return(
        <View style = {styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.top_container}>
                <Text style = {styles.title}>LittleStore</Text>
            </View>
            <TextInput
                style={styles.input}   
                value={text}
                placeholder="Ara..."
            />
            <FlatList renderItem={allProducts} data={Product_data}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightgray'
    },
    title:{
        fontSize:35,
        color:'#FF4500',
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign:'center'
    },
    top_container:{
        backgroundColor:'white',
        borderWidth:0.5,
        borderRadius:10,
        borderColor:'black',
        margin:10,
    },
    input: {
        height: Dimensions.get("window").height/15,
        margin: 10,
        borderWidth: 0.5,
        borderRadius:10,
        padding: 10,
      },
})
export default App;