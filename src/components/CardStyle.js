import { StyleSheet ,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderWidth:0.5,
        borderRadius:10,

    },
    image:{
        backgroundColor:'lightgray',
        height:Dimensions.get("window").height /2,
        width: Dimensions.get("window").width ,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    inner_container:{
        padding:5
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    price:{
        fontSize:18,
        fontWeight:'bold',
        color:'gray',

    },
    stock:{
        fontSize:20,
        color:'red',
        fontStyle:'italic',
        textAlign:'right'
    }
})