import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Pizza, Star} from '../../assets';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProductCard = (props) => {
    const {Name, Item, Rating, Reviews} = props
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{Name}</Text>
      <View></View>
      <Image source={Item} style={styles.productImg} />
      <View style={styles.ratingContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.rating}>{Rating}</Text>
          <Image source={Star} style={styles.star} />
        </View>
        <Text style={styles.reviews}>({Reviews})</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Open</Text>
        <Text style={styles.distance}>0.2 mi Away</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(42),
    paddingHorizontal: responsiveWidth(3.9),
    paddingVertical: responsiveHeight(1.5),
    backgroundColor: '#fff',
    marginBottom:responsiveHeight(2.5),
    borderRadius: responsiveWidth(3),
    gap:responsiveWidth(1.2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  name:{
    fontSize: responsiveFontSize(2),
    fontWeight:'800',
    textAlign:'center'
  },
  productImg: {
    height: responsiveHeight(14),
    width: responsiveWidth(34),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cc021a',
    resizeMode: 'contain',
    borderRadius: responsiveHeight(1.5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
    alignItems: 'center',
  },
  rating: {
    color: '#cc021a',
    fontSize: responsiveFontSize(2),
    fontWeight: '800',
  },
  star: {
    height: responsiveHeight(2.2),
    width: responsiveWidth(4.4),
    resizeMode: 'contain',
  },
  reviews: {
    color: '#000',
    fontSize: responsiveFontSize(2),
  },
  status:{
    color:'#fff',
    backgroundColor:'#00cc3d',
    fontSize:responsiveFontSize(1.2),
    textAlign:'center',
    paddingHorizontal:responsiveWidth(1.4),
    paddingVertical:responsiveHeight(0.2),
    borderRadius:responsiveWidth(2)
  },
  statusContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  distance:{
    fontSize:responsiveFontSize(1.5),
  }
});
