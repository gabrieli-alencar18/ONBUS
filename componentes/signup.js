import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Signup = () => {
  return (
    <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <View style={styles.blueBackground}></View>
          <View style={styles.circle}></View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter your e-mail here</Text>
          <TextInput
            placeholder="Enter your e-mail here"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Choose account type</Text>
          <TextInput
            placeholder="Choose account type"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Choose a password</Text>
          <TextInput
            placeholder="Choose a password"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm password</Text>
          <TextInput
            placeholder="Confirm password"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Type your name</Text>
          <TextInput
            placeholder="Type your name"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Course name</Text>
          <TextInput
            placeholder="Course name"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>CPF...</Text>
          <TextInput
            placeholder="CPF..."
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>+55 (Phone number)</Text>
          <TextInput
            placeholder="+55 (Phone number)"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Your address</Text>
          <TextInput
            placeholder="Your address"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Emergency phone number</Text>
          <TextInput
            placeholder="Emergency phone number"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0', 
    padding: 16,
  },
  backgroundContainer: {
    position: 'absolute',
    left: 15,
    top: 309,
  },
  blueBackground: {
    width: 329,
    height: 861,
    borderRadius: 48,
    backgroundColor: '#3549FF', 
  },
  circle: {
    width: 53,
    height: 42,
    backgroundColor: 'white',
    opacity: 0.01,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 20,
    fontFamily: 'Arsenal',
    color: 'black',
    marginBottom: 8,
  },
  input: {
    fontSize: 20,
    fontFamily: 'Arsenal',
    height: 44,
    borderRadius: 40,
    backgroundColor: 'white',
    paddingLeft: 16,
  },
  signUpButton: {
    width: 128,
    height: 36,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'center',
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Arsenal',
    fontWeight: '400',
    letterSpacing: -0.40,
  },
});

export default Signup;
