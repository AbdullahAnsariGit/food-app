import {Image, Text, View} from 'react-native';
import React from 'react';
import {Bbq, Call, Envelope, Eye, Lock, Logo, Pizza} from '../../../assets';
import {InputField, Button} from '../../../components';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.bbq} />
      <Text style={styles.login}>Registration</Text>
      <InputField leftIcon={Envelope} placeholder="Email" />
      <InputField leftIcon={Lock} placeholder="Password" rightIcon={Eye} />
      <InputField
        leftIcon={Lock}
        placeholder="Confirm Password"
        rightIcon={Eye}
      />
      <InputField leftIcon={Call} placeholder="Phone Number" />
      <Button btnTitle="Continue" btnStyles={styles.btnStyles} onPress={()=> navigation.navigate("Explore")}/>
      <Text style={styles.register}>
        Already have an account?{' '}
        <Text style={styles.signUp} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
