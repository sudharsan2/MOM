

// import React, { useState, useEffect, } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Dimensions,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   ActivityIndicator,
//   StatusBar 
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// export default function Signin({ navigation }) {
//   const [keyboardVisible, setKeyboardVisible] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false); // New loading state

//   useEffect(() => {
//     // Set the status bar color and style
//     StatusBar.setBackgroundColor('#007ACC'); // For Android
//     StatusBar.setBarStyle('light-content'); // For iOS and Android
//   }, []);

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       () => setKeyboardVisible(true)
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       () => setKeyboardVisible(false)
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   const handleLogin = async () => {
//     setLoading(true); // Start loading

//     try {
//       const response = await fetch('https://rplapi.focusrtech.com:81/rpl/signin/', { // Replace with your API endpoint
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Login error:', errorData);
//         setLoading(false); // Stop loading on error
//         return;
//       }

//       const data = await response.json();
//       console.log('Login successful:', data);
//       setLoading(false); // Stop loading on success
//       navigation.navigate('ReportList');
//     } catch (error) {
//       console.error('Error:', error.message);
//       setLoading(false); // Stop loading on error
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
//     >
//       <Image source={require('../../assets/background.png')} style={styles.backgroundImage} />
//       <Image source={require('../../assets/light.png')} style={styles.lamp1} />
//       <Image source={require('../../assets/light.png')} style={styles.lamp2} />

//       <ScrollView 
//         contentContainerStyle={styles.scrollViewContent}
//         bounces={false}
//       >
//         <View style={[
//           styles.contentContainer,
//           keyboardVisible ? styles.contentContainerKeyboardVisible : styles.contentContainerKeyboardHidden
//         ]}>
//           <View style={styles.loginTextContainer}>
//             <Text style={styles.loginText}>Login</Text>
//           </View>

//           <View style={styles.formContainer}>
//             <View style={styles.inputContainer}>
//               <Image
//                 source={require('../../assets/image.png')} // Add your image here
//                 style={styles.inputIcon}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Username"
//                 placeholderTextColor="#c4c4c4"
//                 value={username}
//                 onChangeText={setUsername}
//                 editable={!loading} // Disable input when loading
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 placeholderTextColor="#c4c4c4"
//                 secureTextEntry
//                 value={password}
//                 onChangeText={setPassword}
//                 editable={!loading} // Disable input when loading
//               />
//             </View>

//             <View style={styles.loginButtonContainer}>
//               {loading ? (
//                 <ActivityIndicator size="large" color="#007ACC" /> // Show loading spinner
//               ) : (
//                 <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
//                   <Text style={styles.loginButtonText}>Login</Text>
//                 </TouchableOpacity>
//               )}
//             </View>

//             <Text style={styles.signupText}>
//               Don't have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>SignUp</Text>
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     resizeMode: 'cover',
//   },
//   lamp1: {
//     position: 'absolute',
//     top: 0,
//     left: '10%',
//     width: 80,
//     height: 200,
//     resizeMode: 'contain',
//   },
//   lamp2: {
//     position: 'absolute',
//     top: 0,
//     right: '10%',
//     width: 40,
//     height: 100,
//     resizeMode: 'contain',
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 30,
//   },
//   contentContainerKeyboardHidden: {
//     paddingTop: height * 0.2,  // Increase this value to move content further down
//   },
//   contentContainerKeyboardVisible: {
//     paddingTop: height * 0.05,
//     justifyContent: 'flex-end',
//   },
//   loginTextContainer: {
//     alignItems: 'center',
//     marginBottom: height * 0.25,
//   },
//   loginText: {
//     fontSize: height * 0.05,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   formContainer: {
//     width: '100%',
//   },
//   inputContainer: {
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: height * 0.03,
//   },
//   inputIcon: {
//     marginBottom: 30, // Space between the icon and the input field
//   },
//   input: {
//     width: "80%",
//     height: height * 0.06,
//     borderRadius: height * 0.03,
//     backgroundColor: '#f2f2f2',
//     marginBottom: height * 0.02,
//     paddingHorizontal: 20,
//     fontSize: 16,
//   },
//   loginButtonContainer: {
//     alignItems: 'center',
//     marginBottom: height * 0.03,
//   },
//   loginButton: {
//     backgroundColor: '#007ACC',
//     paddingVertical: height * 0.02,
//     width: '60%',
//     borderRadius: height * 0.03,
//     alignItems: 'center',
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   signupText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#666',
//   },
//   signupLink: {
//     color: '#007ACC',
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  
  // Animations
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(50);

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      // navigation.navigate('InspectionReport');
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch('https://precotmeetingapp.focusrtech.com:67/rpl/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email, // Use "username" instead of "email"
        password:password,       // Keep the password key the same
      }),
    });
      const data = await response.json();

      console.log(data)
  
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
        // navigation.navigate('InspectionReport');
      }
  
      console.log('Login successful:', data);
      
      // Navigate to the Home screen after successful login
      navigation.navigate('InspectionReport');
    } catch (error) {
      Alert.alert(
        'Login Failed',
        error.message || 'Please check your credentials and try again'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
  <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.keyboardAvoid}
  >
    <Animated.View 
      style={[
        styles.contentContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {/* Add the image here */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/login.jpg')} // Replace with your image path
          style={styles.logo}
          resizeMode="contain" // Optional, ensures the image maintains aspect ratio
        />
      </View>

      <View style={[styles.headerContainer,{marginTop:20}]}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Sign In</Text>
          )}
        </TouchableOpacity>
      </View>
    </Animated.View>
  </KeyboardAvoidingView>
</SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoid: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;


