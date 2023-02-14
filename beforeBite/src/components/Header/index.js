import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Pic } from '../../assets'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';

const Header = (props) => {
    const {Explore} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Explore}</Text>
      <Image source={Pic} style={styles.profile}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
    },
    profile:{
        height:responsiveWidth(12),
        width:responsiveWidth(12),
        borderRadius:responsiveHeight(50),
        borderWidth:1,
        borderColor:'#cc021a',
        resizeMode:'contain'
    },
    title:{
        fontSize:responsiveFontSize(2.4),
        fontWeight:'800',
        color:'#000'
    }
})