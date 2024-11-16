import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  StatusBar
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Signin({ navigation }) {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Set the status bar color and style
    StatusBar.setBackgroundColor('#007ACC'); // For Android
    StatusBar.setBarStyle('light-content'); // For iOS and Android
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSignup = async () => {
    try {
      const response = await fetch('https://rplapi.focusrtech.com:81/rpl/register/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName,
          email: email,
          password: password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful signup, e.g., navigate to another screen
        Alert.alert('Success', `Signup successful: ${JSON.stringify(data)}`);
        console.log('Signup successful:', data);
      } else {
        // Handle errors from the server
        Alert.alert('Error', `Signup error: ${JSON.stringify(data)}`);
        console.error('Signup error:', data);
      }
    } catch (error) {
      // Handle network or other errors
      Alert.alert('Error', `An error occurred. Details: ${error.message}`);
      console.error('Error:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <Image source={require('../../assets/background.png')} style={styles.backgroundImage} />
      <Image source={require('../../assets/light.png')} style={styles.lamp1} />
      <Image source={require('../../assets/light.png')} style={styles.lamp2} />

      <ScrollView 
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
      >
        <View style={[
          styles.contentContainer,
          keyboardVisible ? styles.contentContainerKeyboardVisible : styles.contentContainerKeyboardHidden
        ]}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Sign Up</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assets/image.png')} // Replace with your image path
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor="#c4c4c4"
                value={userName}
                onChangeText={setUserName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#c4c4c4"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#c4c4c4"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.loginButtonContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
                <Text style={styles.loginButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.signupText}>
              Already have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('Signin')}>Sign In</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  lamp1: {
    position: 'absolute',
    top: 0,
    left: '10%',
    width: 80,
    height: 200,
    resizeMode: 'contain',
  },
  lamp2: {
    position: 'absolute',
    top: 0,
    right: '10%',
    width: 40,
    height: 100,
    resizeMode: 'contain',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  contentContainerKeyboardHidden: {
    paddingTop: height * 0.2,  
  },
  contentContainerKeyboardVisible: {
    paddingTop: height * 0.05,
    justifyContent: 'flex-end',
  },
  loginTextContainer: {
    alignItems: 'center',
    marginBottom: height * 0.25,
  },
  loginText: {
    fontSize: height * 0.05,
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: height * 0.03,
  },
  inputIcon: {
    // width: 24,  // Adjust size as needed
    // height: 24, // Adjust size as needed
    marginBottom: 30, // Space between the icon and the input field
  },
  input: {
    width:"80%",
    height: height * 0.06,
    borderRadius: height * 0.03,
    backgroundColor: '#f2f2f2',
    marginBottom: height * 0.02,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  loginButtonContainer: {
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  loginButton: {
    backgroundColor: '#007ACC',
    paddingVertical: height * 0.02,
    width: '60%',
    borderRadius: height * 0.03,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom:20
  },
  signupLink: {
    color: '#007ACC',
    fontWeight: 'bold',
  },
});
