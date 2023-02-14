import {Image, Text, View} from 'react-native';
import React from 'react';
import {Bbq, Envelope, Eye, Lock, Logo, Pizza} from '../../../assets';
import {InputField, Button} from '../../../components';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.bbq} />
      <Text style={styles.login}>Login</Text>
      <InputField leftIcon={Envelope} placeholder="Email" />
      <InputField leftIcon={Lock} placeholder="Password" rightIcon={Eye} />
      <Text style={styles.forgetPass}>Forget Password?</Text>
      <Button btnTitle="Login" btnStyles={styles.btnStyles} onPress={()=> navigation.navigate("Explore")}/>
      <Text style={styles.register}>
        Want to register? <Text style={styles.signUp} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default Login;
