import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const InputField = props => {
  const {placeholder, leftIcon, rightIcon} = props;
  return (
    <View style={styles.container}>
      {leftIcon && <Image source={leftIcon} style={styles.envelope} />}
      <TextInput style={styles.input} placeholder={placeholder}></TextInput>
      {rightIcon && <Image source={rightIcon} style={styles.envelope} />}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(7),
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },
  envelope: {
    width: '5%',
    height: '34%',
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: responsiveFontSize(1.8),
  },
});
