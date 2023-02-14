import {FlatList, View} from 'react-native';
import React from 'react';
import {
  Bottom,
  Header,
  ProductCard,
  SearchBar,
} from '../../../components';
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Data} from './data';
import {Settings} from '../../../assets';
import { styles } from './styles';

const Explore = () => {
  const renderItem = ({item}) => {
    return (
      <ProductCard
        Name={item?.Name}
        Item={item?.Item}
        Rating={item?.Rating}
        Reviews={item?.Reviews}
      />
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header Explore="Explore" />
          <SearchBar placeholder="Search" rightIcon={Settings} />
        </View>
        <View style={{height:responsiveHeight(68), }}>
        <FlatList
          numColumns={2}
          data={Data}
          renderItem={renderItem}
        //   ItemSeparatorComponent={() => <View style={styles.seperate} />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        </View>
      </View>
      <Bottom />
    </>
  );
};

export default Explore;


