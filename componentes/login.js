import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.androidLarge2}>
        {/* Conteúdo da sua tela */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter your e-mail..."
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12202F', 
  },
  androidLarge2: {
    width: 360,
    height: 800,
    backgroundColor: '#E5E4F4', 
    borderRadius: 10,
    margin: 16,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputWrapper: {
    width: '100%',
    height: 44,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  input: {
    fontSize: 20,
    fontFamily: 'Arsenal',
  },
  inputLabel: {
    fontSize: 20,
    fontFamily: 'Arsenal',
    marginBottom: 8,
    color: '#4A4A4A',
  },
  loginButton: {
    width: 127,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#3549FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Arsenal',
    fontWeight: '400',
    letterSpacing: -0.40,
  },
});

export default Login;
