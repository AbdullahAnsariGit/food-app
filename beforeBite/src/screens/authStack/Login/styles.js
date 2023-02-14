
import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#cc021a',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: responsiveWidth(5),
      gap:responsiveHeight(1.8)
    },
    bbq: {
      width: responsiveWidth(42),
      height: responsiveWidth(26),
    },
    login: {
      color: '#fff',
      fontSize: responsiveFontSize(2.4),
      fontWeight: '800',
      paddingTop:responsiveHeight(3.6)
    },
    forgetPass: {
      fontSize: responsiveFontSize(2.1),
      color: '#fff',
      width:'100%',
      textAlign:'right'
    },
    register: {
      fontSize: responsiveFontSize(1.8),
      color: '#fff',
    },
    signUp: {
      fontSize: responsiveFontSize(2.1),
      color: '#fff',
      textDecorationLine: 'underline',
    },
    btnStyles:{
        marginTop:responsiveHeight(0.6)
    }
  });