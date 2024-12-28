import { StyleSheet, Dimensions, } from "react-native";

export default StyleSheet.create({
    header_text:{
        marginTop:10,
        fontWeight:"bold",
        fontSize:30,
        color:'#8b008b',
    },
    search_text:{
        borderRadius:10,
        backgroundColor:'#dcdcdc',
        height:Dimensions.get('window').height/18,
    },
    Product_container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#eceff1',
        borderRadius: 5,
        alignContent:'center',
        alignItems:'center',
        height:'95%',	
        width:'50%',
    },
      Product_image: {
        marginTop: 3,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'stretch',
        width:Dimensions.get('window').width / 2.5,
        borderRadius: 5,
        alignContent:'center',
        alignItems:'center',
      },
      Product_TextContainer: {
        paddingBottom: 10,
      },
      Product_title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
      },
      Product_price: {
        fontWeight: 'bold',
        color: 'darkgray',
        fontSize: 16,
        marginTop: 5,
      },
      Product_inStock: {
        fontSize: 14,
        color: 'red',
        marginTop: 5,
      },
})