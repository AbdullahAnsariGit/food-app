import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Entypo';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Bottom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Icon name="feed" color="#cc021a" size={responsiveScreenWidth(6)} />
        <Text style={styles.bottomTitle}>Feed</Text>
      </View>
      <View style={styles.menu}>
        <Icon2 name="explore" color="#cc021a" size={responsiveScreenWidth(6)} />
        <Text style={styles.bottomTitle}>Explore</Text>
      </View>
      <View style={styles.camera}>
        <Icon4
          name="camera"
          color="#fff"
          size={responsiveScreenWidth(6)}
          style={{
            backgroundColor: '#ffb30f',
            paddingHorizontal: responsiveWidth(2),
            paddingVertical: responsiveWidth(1),
            borderRadius: 20,
            marginTop: responsiveHeight(-1),
          }}
        />
      </View>
      <View style={styles.menu}>
        <Icon2
          name="local-activity"
          color="#cc021a"
          size={responsiveScreenWidth(6)}
        />
        <Text style={styles.bottomTitle}>Activity</Text>
      </View>
      <View style={styles.menu}>
        <Icon3 name="menu" color="#cc021a" size={responsiveScreenWidth(6)} />
        <Text style={styles.bottomTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  bottomTitle: {
    fontSize: responsiveFontSize(1.8),
    color: '#cc021a',
  },
  camera: {
    marginTop: responsiveHeight(-6),
    backgroundColor: '#fff',
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveHeight(10),
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
