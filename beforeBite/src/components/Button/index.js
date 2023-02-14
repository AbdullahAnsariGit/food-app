import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Button = props => {
  const {btnTitle, btnStyles, onPress} = props;
  return (
    <TouchableOpacity style={[styles.container, btnStyles]} onPress={onPress}>
      <Text style={styles.buttonText}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffb30f',
    height: responsiveHeight(7),
    width: '100%',
    backgroundColor: '#ffb30f',
    borderRadius: responsiveWidth(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2.2),
    fontWeight: '800',
  },
});
