import {StyleSheet, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const SearchBar = props => {
  const {leftIcon, rightIcon, placeholder} = props;
  return (
    <View style={styles.container}>
      {leftIcon && <Image source={leftIcon} style={styles.envelope} />}
      <TextInput style={styles.input} placeholder={placeholder}></TextInput>
      {rightIcon && <Image source={rightIcon} style={styles.envelope} />}
    </View>
  );
};

export default SearchBar;

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
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  envelope: {
    width: '10%',
    height: '50%',
    resizeMode: 'contain',
    marginRight: responsiveWidth(-1.8),
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: responsiveFontSize(1.8),
  },
});
