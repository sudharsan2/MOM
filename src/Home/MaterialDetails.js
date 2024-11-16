



// import React, { useState } from 'react';
// import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const MaterialDetails = ({ form, setForm }) => {
//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);

//   const handleInputChange = (section, key, value, index) => {
//     const updatedDetails = [...form.materialDetails];
    
//     // Check if key is for a nested object
//     if (key.includes('.')) {
//         const [parentKey, childKey, grandChildKey] = key.split('.');
    
//         // Handle three levels of nesting
//         if (grandChildKey) {
//           updatedDetails[index][parentKey][childKey][grandChildKey] = value;
//         } else {
//           updatedDetails[index][parentKey][childKey] = value;
//         }
//       } else {
//         updatedDetails[index][key] = value;
//       }
    
//       setForm({ ...form, materialDetails: updatedDetails });
//     };

//   const addNewRow = () => {
//     const newRow = {
//       slNo: '',
//       rawMaterial:
//         {
//         details:'',    
//         nco:{
//         supplier: '',
//         grade: '',
//         bathNo: '',
//         },
//         oh:{
//         supplier: '',
//         grade: '',
//         bathNo: '',
//         }
//         },
//       size: '',
//       mc: '',
//       input: '',
//       returnMaterial: '',
//       used: '',
//     //   lineClearance: '',
//       ratio: '',
//       inputQty: '',
//     };
//     setForm({
//       ...form,
//       materialDetails: [...form.materialDetails, newRow],
//     });
//   };

//   const removeSelectedRow = () => {
//     if (selectedRowIndex !== null) {
//       const updatedDetails = [...form.materialDetails];
//       updatedDetails.splice(selectedRowIndex, 1);
//       setForm({ ...form, materialDetails: updatedDetails });
//       setSelectedRowIndex(null); 
//     }
//   };

//   return (
//     <View style={styles.tableContainer}>
//       <Text style={styles.sections}>Material Details</Text>
//       <ScrollView horizontal={true} style={styles.horizontalScroll}>
//         <View>
          
//           <View style={styles.tableHeader}>
//             {["slNo", "rawMaterial", "size", "mc", "input", "returnMaterial", "used", "ratio", "inputQty"].map((header, index) => (
//               <Text key={index} style={[styles.tableHeaderText, header === 'rawMaterial' && styles.rawMaterialInput]}>{header}</Text>
//             ))}
//           </View>

          
//           {form.materialDetails.map((row, rowIndex) => (
//             <View style={styles.tableRow} key={rowIndex}>
//               {Object.keys(row).map((key) => (
//                 key !== 'rawMaterial' ? (
//                   <TextInput
//                     key={key}
//                     style={[
//                       styles.tableInput,
//                       key === 'rawMaterial' && styles.rawMaterialInput,
//                     ]}
//                     value={row[key]}
//                     onChangeText={(text) =>
//                       handleInputChange('materialDetails', key, text, rowIndex)
//                     }
//                   />
//                 ) : (
                  
                    
//                   <View key={key} style={{width:500, flexDirection:"column", alignItems:"center", borderWidth: 1, borderColor: 'rgb(196,196,196)',borderRadius:5    }}>
//                     <TextInput
//                     key={key}
//                     style={[
//                       styles.tableInput,
//                       key === 'rawMaterial' && styles.rawMaterialInput,
//                     ]}
//                     value={row.rawMaterial.details}
//                         onChangeText={(text) =>
//                           handleInputChange(
//                             'materialDetails',
//                             `rawMaterial.details`,
//                             text,
//                             rowIndex
//                           )
//                     }
//                   />
//                     <View style={styles.row}>
//                     <Text style={styles.label}></Text>
//                       <Text style={styles.cell}>SUPPLIER</Text>
//                       <Text style={styles.cell}>GRADE</Text>
//                       <Text style={styles.cell}>BATHNO.</Text>
//                     </View>
//                     <View style={{width:"80%", flexDirection:"row"}}><View style={{flexDirection:"column", justifyContent:"center"}}><Text style={styles.label}>NCO</Text></View>
//                     <View style={styles.row}>
                      
//                       <TextInput
//                         style={styles.input}
//                         placeholder="Enter Supplier"
//                         value={row.rawMaterial.nco.supplier}
//                         onChangeText={(text) =>
//                           handleInputChange(
//                             'materialDetails',
//                             `rawMaterial.nco.supplier`,
//                             text,
//                             rowIndex
//                           )
//                         }
//                       />
//                       <TextInput
//                         style={styles.input}
//                         placeholder="Enter Grade"
//                         value={row.rawMaterial.nco.grade}
//                         onChangeText={(text) =>
//                           handleInputChange(
//                             'materialDetails',
//                             `rawMaterial.nco.grade`,
//                             text,
//                             rowIndex
//                           )
//                         }
//                       />
//                       <TextInput
//                         style={styles.input}
//                         placeholder="Enter Bath No."
//                         value={row.rawMaterial.nco.bathNo}
//                         onChangeText={(text) =>
//                           handleInputChange(
//                             'materialDetails',
//                             `rawMaterial.nco.bathNo`,
//                             text,
//                             rowIndex
//                           )
//                         }
//                       />
//                     </View>
//                     </View>
//                     <View style={{width:"80%", flexDirection:"row"}}>
//                     <View style={{flexDirection:"column", justifyContent:"center"}}><Text style={styles.label}>OH</Text></View>
//                     <View style={styles.row}>
                      
//                       <TextInput
//                         style={styles.input}
//                         placeholder="Enter Supplier"
//                         value={row.rawMaterial.oh.supplier}
//                         onChangeText={(text) =>
//                           handleInputChange(
//                             'materialDetails',
//                             `rawMaterial.oh.supplier`,
//                             text,
//                             rowIndex
//                           )
//                         }
//                       />
//                       <TextInput
//                         style={styles.input}
//                         placeholder="Enter Grade"
//                         value={row.rawMaterial.oh.grade}
//                         onChangeText={(text) =>
//                           handleInputChange(
//                             'materialDetails',
//                             `rawMaterial.oh.grade`,
//                             text,
//                             rowIndex
//                           )
//                         }
//                       />
//                       <TextInput
//                         style={styles.input}
//                         placeholder="Enter Bath No."
//                         value={row.rawMaterial.oh.bathNo}
//                         onChangeText={(text) =>
//                           handleInputChange(
//                             'materialDetails',
//                             `rawMaterial.oh.bathNo`,
//                             text,
//                             rowIndex
//                           )
//                         }
//                       />
//                     </View>
//                   </View>
//                   </View>
                 
//                 )
//               ))}
//             </View>
//           ))}
//         </View>
//       </ScrollView>

//       {/* Add Row Button */}
//       <TouchableOpacity style={styles.addButton} onPress={addNewRow}>
//         <Text style={styles.addButtonText}>Add Row</Text>
//       </TouchableOpacity>

//       {/* Remove Row Section */}
//       <View style={styles.removeRowContainer}>
//         <Picker
//           selectedValue={selectedRowIndex}
//           style={styles.picker}
//           onValueChange={(itemValue) => setSelectedRowIndex(itemValue)}
//         >
//           <Picker.Item label="Select row to remove" value={null} />
//           {form.materialDetails.map((_, index) => (
//             <Picker.Item key={index} label={`Row ${index + 1}`} value={index} />
//           ))}
//         </Picker>

//         {selectedRowIndex !== null && (
//           <TouchableOpacity
//             style={styles.removeButton}
//             onPress={removeSelectedRow}
//           >
//             <Text style={styles.removeButtonText}>Remove Selected Row</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tableContainer: {
//     marginTop: 20,
//     marginBottom: 20,
//     marginLeft: 5,
//     marginRight: 5,
//   },
//   sections: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   horizontalScroll: {
//     flexDirection: 'row',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//     paddingVertical: 10,
//   },
//   tableHeaderText: {
//     width: 120,
//     marginHorizontal: 4,
//     borderWidth: 1,
//     borderRadius: 5,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     borderColor: '#f0f0f0'
//     // paddingHorizontal: 5,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     paddingVertical: 8,
//     // alignItems: 'center',
//   },
//   tableInput: {
//     width: 120,
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 5,
//     height:38,
//     borderColor: '#ccc',
//     marginHorizontal: 4,
//     paddingVertical: 5,
//     textAlign: 'center',
//   },
//   rawMaterialInput: {
//     width: 500, // Increase width specifically for rawMaterial
//   },
//   supplierTable: {
//     width: 360, // Set width for the nested supplier table
//   },
//   row: {
//     width:"80%",
//     flexDirection: 'row',
//     marginVertical: 5,
//   },
//   cell: {
//     width: 100,
//     padding: 5,
//     marginHorizontal: 2,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   label: {
//     width: 60,
//     padding: 5,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: 100,
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 5,
//     borderColor: '#ccc',
//     marginHorizontal: 2,
//     textAlign: 'center',
//   },
//   addButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginTop: 20,
//     borderRadius: 5,
//     alignSelf: 'center',
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   removeRowContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   picker: {
//     width: 250,
//     height: 50,
//     marginBottom: 10,
//   },
//   removeButton: {
//     backgroundColor: '#ff4d4f',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   removeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default MaterialDetails;

// MeetingDetailScreen.js



