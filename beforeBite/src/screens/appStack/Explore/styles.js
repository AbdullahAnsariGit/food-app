
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: responsiveWidth(5),
    },
    header: {
      gap: responsiveHeight(1.5),
      paddingVertical: responsiveHeight(2.5),
    },
    seperate: {
      height: responsiveHeight(2.4),
    },
   
  });