import React from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, View, Text } from 'react-native';

const HtmlViewer = ({ url }) => {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{ uri: url }}
        startInLoadingState={true}
        renderLoading={() => <Text>Loading...</Text>}
        onError={(error) => console.log('WebView error:', error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  webView: {
    flex: 1,
  },
});

export default HtmlViewer;



// import React, { useRef } from 'react';
// import { WebView } from 'react-native-webview';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const HtmlViewer = ({ url }) => {
//   const navigation = useNavigation();
//   const webViewRef = useRef(null);

//   const handleBackPress = () => {
//     if (webViewRef.current) {
//       webViewRef.current.goBack();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Custom Header with Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           onPress={() => {
//             if (webViewRef.current) {
//               webViewRef.current.goBack();
//             } else {
//               navigation.goBack(); // Navigates back to the previous screen
//             }
//           }}
//           style={styles.backButton}
//         >
//           <Text style={styles.backButtonText}>{'<'} Back</Text>
//         </TouchableOpacity>
//       </View>

//       {/* WebView */}
//       <WebView
//         ref={webViewRef}
//         style={styles.webView}
//         source={{ uri: url }}
//         startInLoadingState={true}
//         renderLoading={() => <Text>Loading...</Text>}
//         onError={(error) => console.log('WebView error:', error)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 50,
//     backgroundColor: '#f8f8f8',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   backButton: {
//     padding: 10,
//   },
//   backButtonText: {
//     fontSize: 18,
//     color: '#007AFF',
//   },
//   webView: {
//     flex: 1,
//   },
// });

// export default HtmlViewer;
