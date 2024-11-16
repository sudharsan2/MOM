// import React, { useState, useEffect, useCallback } from 'react';
// import { View, StyleSheet, Text, Alert, ScrollView, RefreshControl,Image,StatusBar } from 'react-native';
// import { Searchbar, DataTable, FAB, Modal, Portal, Button, Provider } from 'react-native-paper';
// import HtmlViewer from './htmlviewer';
// import * as FileSystem from 'expo-file-system';
// import * as Sharing from 'expo-sharing';

// const List = ({ navigation }) => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortColumn, setSortColumn] = useState('');
//   const [sortAscending, setSortAscending] = useState(true);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [htmlModalVisible, setHtmlModalVisible] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);

//   const showModal = (item) => {
//     setSelectedItem(item);
//     setModalVisible(true);
//   };

//   useEffect(() => {
//     const requestPermissions = async () => {
//       if (Platform.OS === 'android') {
//         const { status } = await MediaLibrary.requestPermissionsAsync();
//         if (status !== 'granted') {
//           Alert.alert('Permission Denied', 'Please grant storage permission to save the file.');
//         }
//       }
//     };
  
//     requestPermissions();
//   }, []);

//   useEffect(() => {
//     // Set the status bar color and style
//     StatusBar.setBackgroundColor('#84868a'); // For Android
//     StatusBar.setBarStyle('light-content'); // For iOS and Android
//   }, []);

//   const hideModal = () => setModalVisible(false);

//   const showHtmlModal = () => setHtmlModalVisible(true);
//   const hideHtmlModal = () => setHtmlModalVisible(false);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://rplapi.focusrtech.com:81/rpl/formslist');
//       const result = await response.json();
//       setData(result);
//       setFilteredData(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleRefresh = useCallback(async () => {
//     setRefreshing(true);
//     await fetchData();
//     setRefreshing(false);
//   }, []);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     if (query === '') {
//       setFilteredData(data);
//     } else {
//       const filtered = data.filter((item) =>
//         Object.values(item).some((value) =>
//           typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
//         )
//       );
//       setFilteredData(filtered);
//     }
//   };

//   const handleSort = (column) => {
//     const isAscending = column === sortColumn ? !sortAscending : true;
//     setSortColumn(column);
//     setSortAscending(isAscending);

//     const sortedData = [...filteredData].sort((a, b) => {
//       if (a[column] < b[column]) return isAscending ? -1 : 1;
//       if (a[column] > b[column]) return isAscending ? 1 : -1;
//       return 0;
//     });
//     setFilteredData(sortedData);
//   };

//   const handleDownloadReport = async () => {
//     if (!selectedItem) return;

//     const fileUrl = `https://rplapi.focusrtech.com:81/rpl/downloadreport/${selectedItem.id}`;
//     const fileUri = `${FileSystem.documentDirectory}report_${selectedItem.workOrderNo}.pdf`;

//     try {
//       const { uri } = await FileSystem.downloadAsync(fileUrl, fileUri);

//       if (uri) {
//         Alert.alert('Success', 'Report downloaded successfully.');
//         if (await Sharing.isAvailableAsync()) {
//           await Sharing.shareAsync(uri);
//         } else {
//           Alert.alert('Error', 'Sharing is not available on this device.');
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'An error occurred while downloading the report.');
//     }
//   };

//   const handleDownloadExcelReport = async () => {
//     if (!selectedItem) return;

//     const fileUrl = `https://rplapi.focusrtech.com:81/rpl/downloadexcelreport/${selectedItem.id}`;
//     const fileUri = `${FileSystem.documentDirectory}excel_report_${selectedItem.workOrderNo}.xlsx`;

//     try {
//       const { uri } = await FileSystem.downloadAsync(fileUrl, fileUri);

//       if (uri) {
//         Alert.alert('Success', 'Report downloaded successfully.');
//         if (await Sharing.isAvailableAsync()) {
//           await Sharing.shareAsync(uri);
//         } else {
//           Alert.alert('Error', 'Sharing is not available on this device.');
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'An error occurred while downloading the report.');
//     }
//   };

//   // const handleDownloadReport = async () => {
//   //   if (!selectedItem) return;
  
//   //   const fileUrl = `https://rplapi.focusrtech.com:81/rpl/downloadreport/${selectedItem.id}`;
//   //   const fileUri = `${FileSystem.documentDirectory}report_${selectedItem.workOrderNo}.pdf`;
  
//   //   try {
//   //     const { uri } = await FileSystem.downloadAsync(fileUrl, fileUri);
  
//   //     if (uri) {
//   //       Alert.alert('Success', 'Report downloaded successfully to your device.');
//   //     } else {
//   //       Alert.alert('Error', 'Failed to download the report.');
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     Alert.alert('Error', 'An error occurred while downloading the report.');
//   //   }
//   // };
  
//   // const handleDownloadExcelReport = async () => {
//   //   if (!selectedItem) return;
  
//   //   const fileUrl = `https://rplapi.focusrtech.com:81/rpl/downloadexcelreport/${selectedItem.id}`;
//   //   const fileUri = `${FileSystem.documentDirectory}excel_report_${selectedItem.workOrderNo}.xlsx`;
  
//   //   try {
//   //     const { uri } = await FileSystem.downloadAsync(fileUrl, fileUri);
  
//   //     if (uri) {
//   //       Alert.alert('Success', 'Excel report downloaded successfully to your device.');
//   //     } else {
//   //       Alert.alert('Error', 'Failed to download the Excel report.');
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     Alert.alert('Error', 'An error occurred while downloading the Excel report.');
//   //   }
//   // };
  

//   return (
//     <Provider>
//       <View style={[styles.container, {  }]}>
//         <View style={{width:"100%", flexDirection:"row", justifyContent:"center"}}>
//       <Image
//                 source={require('../../assets/image.png')} 
//                 // style={{}}
//         />
//         </View>
//         <Searchbar
//           placeholder="Search"
//           onChangeText={handleSearch}
//           value={searchQuery}
//           style={styles.searchbar}
//         />
//         <View style={styles.tableContainer}>
//           <ScrollView
//             style={styles.tableContainer}
//             refreshControl={
//               <RefreshControl
//                 refreshing={refreshing}
//                 onRefresh={handleRefresh}
//               />
//             }
//           >
//             <DataTable>
//               <DataTable.Header>
//                 <DataTable.Title
//                   textStyle={styles.tableText}
//                   sortDirection={sortColumn === 'workOrderNo' ? (sortAscending ? 'ascending' : 'descending') : null}
//                   onPress={() => handleSort('workOrderNo')}
//                 >
//                   Work Order No
//                 </DataTable.Title>
//                 <DataTable.Title
//                   textStyle={styles.tableText}
//                   sortDirection={sortColumn === 'customer' ? (sortAscending ? 'ascending' : 'descending') : null}
//                   onPress={() => handleSort('customer')}
//                 >
//                   Customer
//                 </DataTable.Title>
//                 <DataTable.Title
//                   textStyle={styles.tableText}
//                   sortDirection={sortColumn === 'jobName' ? (sortAscending ? 'ascending' : 'descending') : null}
//                   onPress={() => handleSort('jobName')}
//                 >
//                   Job Name
//                 </DataTable.Title>
//                 <DataTable.Title
//                   textStyle={styles.tableText}
//                   sortDirection={sortColumn === 'operatorName' ? (sortAscending ? 'ascending' : 'descending') : null}
//                   onPress={() => handleSort('operatorName')}
//                 >
//                   Operator
//                 </DataTable.Title>
//                 <DataTable.Title
//                   textStyle={styles.tableText}
//                   sortDirection={sortColumn === 'assistantName' ? (sortAscending ? 'ascending' : 'descending') : null}
//                   onPress={() => handleSort('assistantName')}
//                 >
//                   Assistant
//                 </DataTable.Title>
//                 <DataTable.Title
//                   textStyle={styles.tableText}
//                   sortDirection={sortColumn === 'date' ? (sortAscending ? 'ascending' : 'descending') : null}
//                   onPress={() => handleSort('date')}
//                 >
//                   Date
//                 </DataTable.Title>
//               </DataTable.Header>

//               {filteredData.map((item) => (
//                 <DataTable.Row key={item.id} onPress={() => showModal(item)}>
//                   <DataTable.Cell textStyle={styles.tableText}>{item.workOrderNo}</DataTable.Cell>
//                   <DataTable.Cell textStyle={styles.tableText}>{item.customer}</DataTable.Cell>
//                   <DataTable.Cell textStyle={styles.tableText}>{item.jobName}</DataTable.Cell>
//                   <DataTable.Cell textStyle={styles.tableText}>{item.operatorName}</DataTable.Cell>
//                   <DataTable.Cell textStyle={styles.tableText}>{item.assistantName}</DataTable.Cell>
//                   <DataTable.Cell textStyle={styles.tableText}>{item.date}</DataTable.Cell>
//                 </DataTable.Row>
//               ))}
//             </DataTable>
//           </ScrollView>
//         </View>

//         <View style={{width:"100%",flexDirection:"row" ,justifyContent:"center"}}>     
//         <FAB
//           style={styles.fab}
//           small
//           icon="plus"
//           onPress={() => navigation.navigate('InspectionReport')}
//         />
//         </View>   

//         <Portal>
//           <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
//             {selectedItem && (
//               <View>
//                 <Text style={styles.modalTitle}>Work Order Details</Text>
//                 <Text style={{ marginTop: 10 }}>Work Order No: {selectedItem.workOrderNo}</Text>
//                 <Text style={{ marginTop: 10 }}>Customer: {selectedItem.customer}</Text>
//                 <Text style={{ marginTop: 10 }}>Job Name: {selectedItem.jobName}</Text>
//                 <Text style={{ marginTop: 10 }}>Operator: {selectedItem.operatorName}</Text>
//                 <Text style={{ marginTop: 10 }}>Assistant: {selectedItem.assistantName}</Text>
//                 <Text style={{ marginTop: 10 }}>Date: {selectedItem.date}</Text>

//                 <View style={styles.modalButtons}>
//                   <Button mode="contained" onPress={showHtmlModal}>
//                     View Report
//                   </Button>
//                   <Button mode="contained" onPress={handleDownloadReport}>
//                     Download Report
//                   </Button>
//                   <Button mode="contained" onPress={handleDownloadExcelReport}>
//                     Download Report(Excel)
//                   </Button>
//                   <Button mode="contained" onPress={hideModal}>
//                     Close
//                   </Button>
//                 </View>
//               </View>
//             )}
//           </Modal>

//           {htmlModalVisible && (
//             <HtmlViewer url={`https://rplapi.focusrtech.com:81/rpl/formsubmit/${selectedItem.id}`} />
//           )}
//         </Portal>
//       </View>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   searchbar: {
//     marginBottom: 16,
//     borderRadius: 10,
//   },
//   tableContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingVertical: 8,
//   },
//   tableText: {
//     color: 'black', // Set text color to black
//   },
//   fab: {
//     position: 'absolute',
//     bottom: 18,
//     // right: '50%',
//     // transform: [{ translateX: -28 }], // Center horizontally
//     backgroundColor: 'rgb(238,232,244)',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 20,
//     margin: 20,
//     borderRadius: 10,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   closeButton: {
//     marginBottom: 20,
//   },
// });

// export default List;

import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Signature from 'react-native-signature-canvas';

const MeetingDetailScreen = ({ route }) => {
  const { meeting } = route.params;
  const [participants, setParticipants] = useState([]);
  const [showAddParticipant, setShowAddParticipant] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [signature, setSignature] = useState(null);
  const signatureRef = useRef();

  const [newParticipant, setNewParticipant] = useState({
    name: '',
    email: '',
    actionPlan: '',
  });

  const handleSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.readSignature((signature) => {
        if (signature) {
          setSignature(signature);
          console.log(signature);
          setShowSignature(false);
        } else {
          Alert.alert('Error', 'Please add a signature');
        }
      });
    }
  };
  

  const handleClearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clearSignature();
    }
  };

  const handleSaveParticipant = () => {
    if (
      !newParticipant.name.trim() || 
      !newParticipant.email.trim() || 
      !newParticipant.actionPlan.trim() 
      // !signature
    ) {
      Alert.alert('Error', 'Please fill in all fields and provide a signature');
      return;
    }

    const participantData = {
      ...newParticipant,
      signature: signature,
      timestamp: new Date().toISOString(),
    };

    setParticipants([...participants, participantData]);
    setNewParticipant({
      name: '',
      email: '',
      actionPlan: '',
    });
    setSignature(null);
    setShowAddParticipant(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>{meeting.title}</Text>
          <Text style={styles.date}>
            {meeting.date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Participants</Text>
          {participants.map((participant, index) => (
            <View key={index} style={styles.participantCard}>
              <View style={styles.participantHeader}>
                <Text style={styles.participantName}>{participant.name}</Text>
                <Text style={styles.participantEmail}>{participant.email}</Text>
              </View>

              <View style={styles.actionPlanContainer}>
                <Text style={styles.actionPlanTitle}>Action Plan:</Text>
                <Text style={styles.actionPlan}>{participant.actionPlan}</Text>
              </View>

              <View style={styles.signatureContainer}>
                <Text style={styles.signatureLabel}>Signature:</Text>
                <Image
                  source={{ uri: participant.signature }}
                  style={styles.signatureImage}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.timestamp}>
                Signed on: {new Date(participant.timestamp).toLocaleString()}
              </Text>
            </View>
          ))}

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setShowAddParticipant(true)}
          >
            <Text style={styles.addButtonText}>+ Add Participant</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Add Participant Modal */}
      <Modal
        visible={showAddParticipant}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Participant</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={newParticipant.name}
              onChangeText={(text) =>
                setNewParticipant({ ...newParticipant, name: text })
              }
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={newParticipant.email}
              onChangeText={(text) =>
                setNewParticipant({ ...newParticipant, email: text })
              }
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Action Plan"
              multiline
              numberOfLines={4}
              value={newParticipant.actionPlan}
              onChangeText={(text) =>
                setNewParticipant({ ...newParticipant, actionPlan: text })
              }
            />

            <TouchableOpacity
              style={styles.signatureButton}
              onPress={() => setShowSignature(true)}
            >
              <Text style={styles.signatureButtonText}>
                {signature ? 'Change Signature' : 'Add Signature'}
              </Text>
            </TouchableOpacity>

            {signature && (
              <Image
                source={{ uri: signature }}
                style={styles.signaturePreview}
                resizeMode="contain"
              />
            )}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setShowAddParticipant(false);
                  setNewParticipant({
                    name: '',
                    email: '',
                    actionPlan: '',
                  });
                  setSignature(null);
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSaveParticipant}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Signature Modal */}
      <Modal
  visible={showSignature}
  animationType="slide"
  transparent={true}
>
  <View style={styles.signatureModalContainer}>
    <View style={styles.signatureModalContent}>
      <Text style={styles.signatureModalTitle}>Add Your Signature</Text>

      <View style={styles.signaturePadContainer}>
        <Signature
          ref={signatureRef}
          onEmpty={() => Alert.alert('Error', 'Please add a signature')}
          descriptionText="Sign above"
          webStyle={`.m-signature-pad--footer { display: none; margin: 0px; }`}
          style={styles.signaturePad}
        />
      </View>

      <View style={styles.signatureButtons}>
        <TouchableOpacity
          style={[styles.modalButton, styles.saveButton]}
          onPress={handleSignature}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={[styles.modalButton, styles.clearButton]}
            onPress={handleClearSignature}
          >
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalButton, styles.cancelButton]}
            onPress={() => {
              setShowSignature(false);
            }}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
</Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  participantCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  participantHeader: {
    marginBottom: 12,
  },
  participantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  participantEmail: {
    fontSize: 14,
    color: '#666',
  },
  actionPlanContainer: {
    marginBottom: 16,
  },
  actionPlanTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  actionPlan: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  signatureContainer: {
    marginBottom: 12,
  },
  signatureLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
  },
  signatureImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  signatureButton: {
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  signatureButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
  signaturePreview: {
    width: '100%',
    height: 100,
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 12,
  },
  cancelButton: {
    backgroundColor: '#F5F7FA',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#007AFF',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    // fontWeight: '600',
  },
  signatureModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signatureModalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  signatureModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 24,
    textAlign: 'center',
  },
  signaturePadContainer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  signaturePad: {
    width: '100%',
    height: '100%',
  },
  signatureButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    backgroundColor: '#F5F7FA',
    flex: 1,
    marginRight: 8,
  },
  clearButtonText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  signatureButtons: {
    marginTop: 20,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: '#F5F7FA',
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  cancelButton: {
    backgroundColor: '#F5F7FA',
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  clearButtonText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MeetingDetailScreen;

