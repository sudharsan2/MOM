// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, ScrollView,Alert,Button,Image } from 'react-native';
// import Checkbox from 'expo-checkbox';
// import ProductionDetails from './productionDetails';
// import MaterialDetails from './MaterialDetails';


// const LaminationJobCard = () => {
//   const [form, setForm] = useState({
    
//       workOrderNo: '',
//       customer: '',
//       jobName: '',
//       sleeveSize: '',
//       target: '',
//       produced: '',
//       balance: '',
//       operatorName: '',
//       assistantName: '',
//       date: '',
//       mcName: '',
//       shift: '',
//       MCspeed:'',
//       productionWeight:'',
//       dyanLevel: '',
//     productionDetails: [
//       {
//         printedRollNo: '',
//         printingOpName: '',
//         printedInputRollKgs: '',
//         supName: '',
//         supRollNo: '',
//         netWt: '',
//         outputRollNo: '',
//         outputRollWtKgs: '',
//         outputRollMtrs: '',
//         startingTime: '',
//         endTime: '',
//         adhGsm: '',
//       },
//     ],
//     materialDetails: [
//       {
//         slNo: '',
//         rawMaterial: {
//           details:'',
//           nco: {
//             supplier: '',
//             grade: '',
//             bathNo: '',
//           },
//           oh: {
//             supplier: '',
//             grade: '',
//             bathNo: '',
//           },
//         },
//         size: '',
//         mc: '',
//         input: '',
//         returnMaterial: '',
//         used: '',
//         ratio: '',
//         inputQty: '',
//       },
//     ],
//     scrapDetails: {
//       plainPEWastage: '',
//       printedWastage: '',
//       packingWaste: '',
//       laminationWaste: '',
//       total: '',
//     },
//     machineParameters: {
//       unwinder1: '',
//       unwinder2: '',
//       rewinder: '',
//       lc1:'',
//       coatingTemp: '',
//       nipTemp: '',
//       ncoTemp: '',
//       ohTemp: '',
//       coaterCurrent: '',
//       nipPressure: '',
//     },
//     lineClearance:{
//       solvent: false,
//       cylinder: false,
//       rubberRoller: false,
//       drBlade: false,
//       rawMaterial: false,
//       mcSurroundings: false,
//       wasteMatl: false,
//       printedMatl: false,
//     },
//     polyWastageDetails:{
//       damage:'',
//       wrinkle:'',
//       coreEnd:''
//     },
//     breakDownDetails:{
//       sleeveChange :"",
//       cleaning :"",
//       totalProdnMin :"",
//       jobSettingMin:"",
//       rollChangeMin:"",
//       noPlanning:"",
//       breakDownMin:"",
//       powerCut:"",
//       tagRemove:"",
//       total:""
//     }
//   });

//   const handleCheckBoxChange = (item) => {
//     setForm(prevForm => ({
//     ...prevForm,
//     lineClearance: {
//     ...prevForm.lineClearance,
//     [item]: !prevForm.lineClearance[item], 
//     },
//     }));
//    };
   



//   const handleInputChange = (section, key, value, index = null) => {
//     // Update the form state
//     if (index !== null) {
//       const updatedSection = [...form[section]];
//       updatedSection[index][key] = value;
//       setForm({ ...form, [section]: updatedSection });
//     } else if (section === '') {
//       setForm({ ...form, [key]: value });
//     } else {
//       // Update the specific breakdown detail
//       const updatedForm = { ...form, [section]: { ...form[section], [key]: value } };
  
//       // If the section is 'breakDownDetails', recalculate the total
//       if (section === 'breakDownDetails') {
//         const {
//           sleeveChange,
//           cleaning,
//           totalProdnMin,
//           jobSettingMin,
//           rollChangeMin,
//           noPlanning,
//           breakDownMin,
//           powerCut,
//           tagRemove
//         } = updatedForm.breakDownDetails;
  
//         // Parse the values as numbers, defaulting to 0 if they're not numbers
//         const total = (
//           (parseFloat(sleeveChange) || 0) +
//           (parseFloat(cleaning) || 0) +
//           (parseFloat(totalProdnMin) || 0) +
//           (parseFloat(jobSettingMin) || 0) +
//           (parseFloat(rollChangeMin) || 0) +
//           (parseFloat(noPlanning) || 0) +
//           (parseFloat(breakDownMin) || 0) +
//           (parseFloat(powerCut) || 0) +
//           (parseFloat(tagRemove) || 0)
//         ).toFixed(2); // Optional: Format the total to 2 decimal places
  
//         // Update the form with the calculated total
//         updatedForm.breakDownDetails.total = total.toString();
//       }

//       if(section === 'scrapDetails') {
//         const {
//         plainPEWastage,
//         printedWastage,
//         packingWaste,
//         laminationWaste,
//         total
//         } = updatedForm.scrapDetails;

//         const total1 = (
//           (parseFloat(plainPEWastage) || 0) +
//           (parseFloat(printedWastage) || 0) +
//           (parseFloat(packingWaste) || 0) +
//           (parseFloat(laminationWaste) || 0) 
//         ).toFixed(2); // Optional: Format the total to 2 decimal places
  
//         // Update the form with the calculated total
//         updatedForm.scrapDetails.total = total1.toString();

//       }
  
//       setForm(updatedForm);
//     }
//   };
  
  
  
//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('https://rplapi.focusrtech.com:81/rpl/formsubmit/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       console.log(JSON.stringify(form))

//       const responseData = await response.json(); // Convert the response to JSON

//       if (response.ok) {
//         Alert.alert('Success', `Form submitted successfully! Response: ${JSON.stringify(responseData)}`);
//         console.log(JSON.stringify(responseData))
//       } else {
//         Alert.alert('Error', `Failed to submit form. Response: ${JSON.stringify(responseData)}`);
//       }
//     } catch (error) {
//       console.log('Error:', error.message);
//       Alert.alert('Error', `An error occurred. Details: ${error.message}`);
//     }
//   };

  


//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//       <Image
//                 source={require('../../assets/image.png')} 
//                 // style={{}}
//         />
//         <Text style={styles.companyName}>Rathna Packaging India (P) Limited, Unit-I, Hosur</Text>
//         <Text style={styles.title}>Lamination Job Card (Solvent Less)</Text>
//       </View>

//       {/* Basic Information */}
//       <View style={styles.infoRow}>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Work Order No</Text>
//           <TextInput
//             style={styles.input}
//             value={form.workOrderNo}
//             onChangeText={(text) => handleInputChange('','workOrderNo', text)}
//           />
//         </View>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Customer</Text>
//           <TextInput
//             style={styles.input}
//             value={form.customer}
//             onChangeText={(text) => handleInputChange('','customer', text)}
//           />
//         </View>
//       </View>

//       <View style={styles.infoRow}>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Job Name</Text>
//           <TextInput
//             style={styles.input}
//             value={form.jobName}
//             onChangeText={(text) => handleInputChange('', 'jobName', text)}
//           />
//         </View>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Target</Text>
//           <TextInput
//             style={styles.input}
//             value={form.target}
//             onChangeText={(text) => handleInputChange('','target', text)}
//           />
//         </View>
//       </View>

//       <View style={styles.infoRow}>
        
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Produced</Text>
//           <TextInput
//             style={styles.input}
//             value={form.produced}
//             onChangeText={(text) => handleInputChange('','produced', text)}
//           />
//         </View>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Balance</Text>
//           <TextInput
//             style={styles.input}
//             value={form.balance}
//             onChangeText={(text) => handleInputChange('','balance', text)}
//           />
//         </View>
//       </View>

//       <View style={styles.infoRow}>
        
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Operator Name</Text>
//           <TextInput
//             style={styles.input}
//             value={form.operatorName}
//             onChangeText={(text) => handleInputChange('','operatorName', text)}
//           />
//         </View>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Assistant Name</Text>
//           <TextInput
//             style={styles.input}
//             value={form.assistantName}
//             onChangeText={(text) => handleInputChange('','assistantName', text)}
//           />
//         </View>
//       </View>

//       <View style={styles.infoRow}>
       
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Date</Text>
//           <TextInput
//             style={styles.input}
//             value={form.date}
//             onChangeText={(text) => handleInputChange('','date', text)}
//           />
//         </View>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>MC Name</Text>
//           <TextInput
//             style={styles.input}
//             value={form.mcName}
//             onChangeText={(text) => handleInputChange('','mcName', text)}
//           />
//         </View>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Shift</Text>
//           <TextInput
//             style={styles.input}
//             value={form.shift}
//             onChangeText={(text) => handleInputChange('','shift', text)}
//           />
//         </View>
//       </View>

//       <View style={styles.infoRow}>
//       <View style={styles.infoBox}>
//           <Text style={styles.label}>Sleeve Size</Text>
//           <TextInput
//             style={styles.input}
//             value={form.sleeveSize}
//             onChangeText={(text) => handleInputChange('','sleeveSize', text)}
//           />
//         </View>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>M/C Speed</Text>
//           <TextInput
//             style={styles.input}
//             value={form.MCspeed}
//             onChangeText={(text) => handleInputChange('','MCspeed', text)}
//           />
//         </View>
        
//       </View>

//       <View style={styles.infoRow}>
//       <View style={styles.infoBox}>
//           <Text style={styles.label}>Production / Hr (KG)</Text>
//           <TextInput
//             style={styles.input}
//             value={form.productionWeight}
//             onChangeText={(text) => handleInputChange('','productionWeight', text)}
//           />
//         </View>
//         <View style={styles.infoBox}>
//           <Text style={styles.label}>Dyan Level</Text>
//           <TextInput
//             style={styles.input}
//             value={form.dyanLevel}
//             onChangeText={(text) => handleInputChange('','dyanLevel', text)}
//           />
//         </View>
//       </View>

//       <ProductionDetails form={form} setForm={setForm}/>
      

    
//       <MaterialDetails form={form} setForm={setForm}/>

      
//     <View style={{width:"100%", flexDirection:"row", justifyContent:"center"}}>
//     <View style={{width:"90%", flexDirection:"row", justifyContent:"space-between"}}>
//       <View style={styles.lineClearanceContainer}>
//         <Text style={styles.lineClearanceTitle}>Line Clearance</Text>
//         <View style={styles.lineClearanceRow} >
//             <Text style={styles.lineClearanceLabel}>
              
//             </Text>
//           <View style={{width:"50%", flexDirection:"row", justifyContent:"space-between"}}>
//           <View style={{width:"40%", flexDirection:"row", justifyContent:"center"}}>
//           <Text style={[styles.checkbox1, { backgroundColor: "rgb(242,242,242)", fontWeight:"bold" }]}>
//               Cleared
//             </Text>
//           </View>
//           <View style={{width:"70%", flexDirection:"row", justifyContent:"center"}}>
//           <Text style={[styles.checkbox1, { backgroundColor: "rgb(242,242,242)", fontWeight:"bold" }]}>
//               Not Cleared
//             </Text>
//           </View>
//           </View>
//         </View>
//         {Object.keys(form.lineClearance).map((item) => (
//           <View style={styles.lineClearanceRow} key={item}>
//             <Text style={styles.lineClearanceLabel}>
//               {item.replace(/([A-Z])/g, ' $1').trim()}
//             </Text>
//             <View style={{width:"50%", flexDirection:"row", justifyContent:"space-between"}}>
//             <View style={{width:"40%", flexDirection:"row", justifyContent:"center"}}>
//             <Checkbox
//               value={form.lineClearance[item]}
//               onValueChange={() => handleCheckBoxChange(item)}
//               style={styles.checkbox1}
//             />
//             </View>
//             <View style={{width:"70%", flexDirection:"row", justifyContent:"center"}}>
//             <Checkbox
//               value={!form.lineClearance[item]}
//               onValueChange={() => handleCheckBoxChange(item)}
//               style={styles.checkbox2}
//             />
//             </View>
//             </View>
//           </View>
//         ))}
//       </View>
      
//       <View style={styles.lineClearanceContainer}>
//         <Text style={styles.lineClearanceTitle}>Poly Wastage Details</Text>
//         <View>
//         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
//           <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//             <Text>Damage</Text>
//             </View>
            
//               <TextInput
//             style={{
//             width:"60%",
//             borderColor: '#ccc',
//             borderWidth: 1,
//             borderRadius: 5,
//             padding: 5,
//             backgroundColor:"white",
//             marginLeft:15,
//             height:38,
//             marginTop:5
//             }}
//             value={form.polyWastageDetails.dyanLevel}
//             onChangeText={(text) => handleInputChange('polyWastageDetails', 'damage', text)}
//           />
          
//           </View>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//             <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//             <Text>Wrinkle</Text>
//             </View>
            
//               <TextInput
//             style={{
//               width:"60%",
//               borderColor: '#ccc',
//               borderWidth: 1,
//               borderRadius: 5,
//               backgroundColor:"white",
//               padding: 5,
//               marginLeft:15,
//               height:38,
//               marginTop:5,
//               }}
//             value={form.polyWastageDetails.dyanLevel}
//             onChangeText={(text) => handleInputChange('polyWastageDetails', 'wrinkle', text)}
//           />
          
//           </View>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Core End</Text>
//                 </View>
          
//             <TextInput
//               style={{
//                 width:"60%",
//                 borderColor: '#ccc',
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 backgroundColor:"white",
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//               value={form.polyWastageDetails.dyanLevel}
//               onChangeText={(text) => handleInputChange('polyWastageDetails', 'coreEnd', text)}
//             />
            
//           </View>
//         <View/>
//       </View>
//       </View>
//       </View>
//       </View>


//     <View style={{width:"100%", flexDirection:"row", justifyContent:"center", marginTop:50, marginBottom:20}}>
//     <View style={{width:"90%", flexDirection:"row", justifyContent:"space-between"}}>
//       <View style={styles.lineClearanceContainer}>
//         <Text style={styles.lineClearanceTitle}>Scrap Details</Text>
//         <View>
//         <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between"}}>
//           <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//             <Text>Plain PE Wastage</Text>
//             </View>
            
//               <TextInput
//             style={{
//             width:"50%",
//             borderColor: '#ccc',
//             backgroundColor:"white",
//             borderWidth: 1,
//             borderRadius: 5,
//             padding: 5,
//             marginLeft:15,
//             height:38,
//             marginTop:5
//             }}
//             value={form.scrapDetails.plainPEWastage}
//             onChangeText={(text) =>
//               handleInputChange('scrapDetails', 'plainPEWastage', text)
//             }
//           />
          
//           </View>
//         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
//             <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//             <Text>Printed Wastage</Text>
//             </View>
            
//               <TextInput
//             style={{
//               width:"50%",
//               borderColor: '#ccc',
//               backgroundColor:"white",
//               borderWidth: 1,
//               borderRadius: 5,
//               padding: 5,
//               marginLeft:15,
//               height:38,
//               marginTop:5,
//               }}
//               value={form.scrapDetails.printedWastage}
//               onChangeText={(text) =>
//                 handleInputChange('scrapDetails', 'printedWastage', text)
//               }
//           />
          
//           </View>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Packing Wastage</Text>
//                 </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.scrapDetails.packingWaste}
//                 onChangeText={(text) =>
//                   handleInputChange('scrapDetails', 'packingWaste', text)
//                 }
//             />
            
//           </View>
//         <View/>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Lamination Waste</Text>
//                 </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.scrapDetails.laminationWaste}
//                 onChangeText={(text) =>
//                   handleInputChange('scrapDetails', 'laminationWaste', text)
//                 }
//             />
            
//           </View>
//         <View/>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Total Wastage</Text>
//                 </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.scrapDetails.total}
//                 onChangeText={(text) =>
//                   handleInputChange('scrapDetails', 'total', text)
//                 }
//             />  
//           </View>
//         <View/>
//       </View>
//       </View>

      
//       <View style={styles.lineClearanceContainer}>
//         <Text style={styles.lineClearanceTitle}>Machine Parameters</Text>
//         <View>
//         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
//           <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//             <Text>Unwinder 1</Text>
//             </View>
            
//               <TextInput
//             style={{
//             width:"50%",
//             borderColor: '#ccc',
//             backgroundColor:"white",
//             borderWidth: 1,
//             borderRadius: 5,
//             padding: 5,
//             marginLeft:15,
//             height:38,
//             marginTop:5
//             }}
//             value={form.machineParameters.unwinder1}
//             onChangeText={(text) =>
//               handleInputChange('machineParameters', 'unwinder1', text)
//             }
//           />
          
//           </View>
//         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
//             <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//             <Text>Unwinder 2</Text>
//             </View>
            
//               <TextInput
//             style={{
//               width:"50%",
//               borderColor: '#ccc',
//               backgroundColor:"white",
//               borderWidth: 1,
//               borderRadius: 5,
//               padding: 5,
//               marginLeft:15,
//               height:38,
//               marginTop:5,
//               }}
//               value={form.machineParameters.unwinder2}
//             onChangeText={(text) =>
//               handleInputChange('machineParameters', 'unwinder2', text)
//             }
//           />
          
//           </View>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//           <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Rewinder</Text>
//             </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.machineParameters.rewinder}
//             onChangeText={(text) =>
//               handleInputChange('machineParameters', 'rewinder', text)
//             }
//             />
            
//           </View>
//         <View/>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//           <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>LC1</Text>
//             </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.machineParameters.lc1}
//             onChangeText={(text) =>
//               handleInputChange('machineParameters', 'lc1', text)
//             }
//             />
            
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Coating Temp</Text>
//                 </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.machineParameters.coatingTemp}
//                 onChangeText={(text) =>
//                   handleInputChange('machineParameters', 'coatingTemp', text)
//                 }
//             />
            
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Nip Temp</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.machineParameters.nipTemp}
//                 onChangeText={(text) =>
//                   handleInputChange('machineParameters', 'nipTemp', text)
//                 }
//             />  
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>NCO Temp</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.machineParameters.ncoTemp}
//                 onChangeText={(text) =>
//                   handleInputChange('machineParameters', 'ncoTemp', text)
//                 }
//             />  
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>OH Temp</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.machineParameters.ohTemp}
//                 onChangeText={(text) =>
//                   handleInputChange('machineParameters', 'ohTemp', text)
//                 }
//             />  
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Coater Current</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.machineParameters.coaterCurrent}
//                 onChangeText={(text) =>
//                   handleInputChange('machineParameters', 'coaterCurrent', text)
//                 }
//             />  
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Nip Pressure</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.machineParameters.nipPressure}
//                 onChangeText={(text) =>
//                   handleInputChange('machineParameters', 'nipPressure', text)
//                 }
//             />  
//           </View>
//         <View/>
//       </View>
//       </View>
//       </View>
//       </View>

//       <View style={{width:"100%", flexDirection:"row", justifyContent:"center", marginTop:50, marginBottom:20}}>
//     {/* <View style={{width:"90%", flexDirection:"row", justifyContent:"space-between"}}> */}
       

      
//       <View style={styles.lineClearanceContainer}>
//         <Text style={styles.lineClearanceTitle}>Breakdown Details </Text>
//         <View>
//         <View style={{width:"100%", flexDirection:"row", justifyContent:"end"}}>
//           <View style={{width:"40%", flexDirection:"row", justifyContent:"center"}}>
//           <Text style={[styles.checkbox1, { backgroundColor: "rgb(242,242,242)", fontWeight:"bold" }]}>
//               Setting Details
//             </Text>
//           </View>
//           <View style={{width:"70%", flexDirection:"row", justifyContent:"center"}}>
//           <Text style={[styles.checkbox1, { backgroundColor: "rgb(242,242,242)", fontWeight:"bold" }]}>
//              Time (Hrs)
//             </Text>
//           </View>
//           </View>  
//         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
//           <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
               
//             <Text>Sleeve Change</Text>
//             </View>
            
//               <TextInput
//             style={{
//             width:"50%",
//             borderColor: '#ccc',
//             backgroundColor:"white",
//             borderWidth: 1,
//             borderRadius: 5,
//             padding: 5,
//             marginLeft:15,
//             height:38,
//             marginTop:5
//             }}
//             value={form.breakDownDetails.sleeveChange}
//             onChangeText={(text) =>
//               handleInputChange('breakDownDetails', 'sleeveChange', text)
//             }
//           />
          
//           </View>
//         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
//             <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//             <Text>Cleaning</Text>
//             </View>
            
//               <TextInput
//             style={{
//               width:"50%",
//               borderColor: '#ccc',
//               backgroundColor:"white",
//               borderWidth: 1,
//               borderRadius: 5,
//               padding: 5,
//               marginLeft:15,
//               height:38,
//               marginTop:5,
//               }}
//               value={form.breakDownDetails.cleaning}
//             onChangeText={(text) =>
//               handleInputChange('breakDownDetails', 'cleaning', text)
//             }
//           />
          
//           </View>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//           <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Total Prodn min /Hrs</Text>
//             </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.breakDownDetails.totalProdnMin}
//             onChangeText={(text) =>
//               handleInputChange('breakDownDetails', 'totalProdnMin', text)
//             }
//             />
            
//           </View>
//         <View/>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//           <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Job Setting Min</Text>
//             </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.breakDownDetails.jobSettingMin}
//             onChangeText={(text) =>
//               handleInputChange('breakDownDetails', 'jobSettingMin', text)
//             }
//             />
            
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Roll Change Min</Text>
//                 </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.breakDownDetails.rollChangeMin}
//                 onChangeText={(text) =>
//                   handleInputChange('breakDownDetails', 'rollChangeMin', text)
//                 }
//             />
            
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>No Planning</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.breakDownDetails.noPlanning}
//                 onChangeText={(text) =>
//                   handleInputChange('breakDownDetails', 'noPlanning', text)
//                 }
//             />  
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Breakdown Min /Hrs</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.breakDownDetails.breakDownMin}
//                 onChangeText={(text) =>
//                   handleInputChange('breakDownDetails', 'breakDownMin', text)
//                 }
//             />  
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Power Cut</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.breakDownDetails.powerCut}
//                 onChangeText={(text) =>
//                   handleInputChange('breakDownDetails', 'powerCut', text)
//                 }
//             />  
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Tag Remove</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.breakDownDetails.tagRemove}
//                 onChangeText={(text) =>
//                   handleInputChange('breakDownDetails', 'tagRemove', text)
//                 }
//             />  
//           </View>
//         <View/>

//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//         <View style={{
              
//               padding: 5,
//               marginLeft:2,
//               height:38,
//               marginTop:5,
//               }}>
//                 <Text>Total</Text>
//           </View>
          
//             <TextInput
//               style={{
//                 width:"50%",
//                 borderColor: '#ccc',
//                 backgroundColor:"white",
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 padding: 5,
//                 marginLeft:10,
//                 height:38,
//                 marginTop:5,
//                 }}
//                 value={form.breakDownDetails.total}
//                 onChangeText={(text) =>
//                   handleInputChange('breakDownDetails', 'total', text)
//                 }
//             />  
//           </View>
//         <View/>
//       </View>
//       </View>
//       </View>
      

//       <View style={{ marginBottom: 30, marginTop:30 ,flexDirection: "row", justifyContent: "center", width: "100%" }}>
//       <View style={{ width: "30%", borderRadius: 12, overflow: 'hidden' }}>
//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
//     </View>

//     </ScrollView>
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#ffffff',
// //   },
// //   header: {
// //     marginTop:30,
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   companyName: {
// //     textAlign:"center",
// //     color: "rgb(0,150,255)",
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   title: {
// //     fontSize: 18,
// //     textAlign:"center",
// //     fontWeight: 'bold',
// //     marginVertical: 10,
// //   },
// //   infoRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginBottom: 10,
// //   },
// //   infoBox: {
// //     flex: 1,
// //     marginHorizontal: 5,
// //   },
// //   label: {
// //     fontSize: 14,
// //     fontWeight: 'bold',
// //   },
// //   input: {
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     padding: 5,
// //     marginTop: 5,
// //   },
// //   table: {
// //     marginBottom: 20,
// //   },
// //   sections: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginVertical: 10,
// //   },
// //   tableHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     backgroundColor: '#f8f8f8',
// //     padding: 10,
// //   },
// //   tableHeaderText: {
// //     fontWeight: 'bold',
// //     fontSize: 12,
// //     flex: 1,
// //     textAlign: 'center',
// //   },
// //   tableRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     padding: 10,
// //   },
// //   tableInput: {
// //     flex: 1,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     padding: 5,
// //     marginHorizontal: 2,
// //     textAlign: 'center',
// //   },
//   // scrapRow: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   marginBottom: 10,
//   // },
//   // machineRow: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   marginBottom: 10,
//   // },

//   // lineClearanceContainer: {
//   //   width:"40%",
//   //   marginTop: 20,
//   // },
//   // lineClearanceTitle: {
//   //   fontSize: 16,
//   //   fontWeight: 'bold',
//   //   marginBottom: 10,
//   // },
//   // lineClearanceRow: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   marginBottom: 5,
//   // },
//   // lineClearanceLabel: {
//   //   flex: 1,
//   //   fontSize: 14,
//   //   textTransform: 'capitalize',
//   // },
//   // checkbox1: {
//   //   margin: 0,
//   //   padding: 0,
//   // },
//   // checkbox2: {
//   //   marginLeft: 3,
//   //   padding: 0,
//   // },

// // });

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   header: {
//     marginBottom: 20,
//     paddingVertical: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: '#444',
//     alignItems: 'center',
//   },
//   companyName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   title: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   infoBox: {
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#555',
//     marginBottom: 5,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 10,
//     backgroundColor: '#fff',
//     fontSize: 14,
//     color: '#333',
//     elevation: 2,
//   },
//   scrapRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   machineRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },

//   lineClearanceContainer: {
//     backgroundColor:"rgb(242,242,242)",
//     width:"47%",
//     marginTop: 20,
//     padding:15,
//     borderRadius:20,
//   },
//   lineClearanceTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   lineClearanceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   lineClearanceLabel: {
//     flex: 1,
//     fontSize: 14,
//     textTransform: 'capitalize',
//   },
//   checkbox1: {
//     backgroundColor:"white",
//     margin: 0,
//     padding: 0,
//   },
//   checkbox2: {
//     backgroundColor:"white",
//     marginLeft: 3,
//     padding: 0,
//   },
// });


// export default LaminationJobCard;



import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Animated,
  FlatList,
  Platform,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const MeetingsScreen = () => {
  const [meetings, setMeetings] = useState([
    {
      id: '1',
      title: 'Q4 Strategy Planning',
      date: new Date('2024-11-16T10:00:00'),
      participants: 8,
      status: 'Completed'
    },
    {
      id: '2',
      title: 'Product Review',
      date: new Date('2024-11-17T14:30:00'),
      participants: 5,
      status: 'Pending'
    }
  ]);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    title: '',
    date: new Date(),
    time: new Date(),
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleAddMeeting = () => {
    const newMeetingData = {
      id: Date.now().toString(),
      title: newMeeting.title,
      date: new Date(newMeeting.date),
      participants: 0,
      status: 'Pending'
    };
    setMeetings([...meetings, newMeetingData]);
    setModalVisible(false);
    setNewMeeting({ title: '', date: new Date(), time: new Date() });
  };

  const renderMeetingCard = ({ item }) => (
    <Animated.View style={[styles.cardContainer, { opacity: fadeAnim }]}>
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('ReportList', { meeting: item })}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={[
            styles.statusBadge,
            { backgroundColor: item.status === 'Completed' ? '#4CAF50' : '#FFC107' }
          ]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
        
        <View style={styles.cardContent}>
          <Text style={styles.dateText}>
            {item.date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          <Text style={styles.timeText}>
            {item.date.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </View>
        
        <View style={styles.cardFooter}>
          <Text style={styles.participantsText}>
            {item.participants} Participants
          </Text>
          <TouchableOpacity style={styles.viewDetailsButton}>
            <Text style={styles.viewDetailsText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meetings</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>+ New Meeting</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={meetings}
        renderItem={renderMeetingCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Meeting</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Meeting Title"
              value={newMeeting.title}
              onChangeText={(text) => setNewMeeting({...newMeeting, title: text})}
            />

            <TouchableOpacity 
              style={styles.datePickerButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.datePickerButtonText}>
                Select Date: {newMeeting.date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.datePickerButton}
              onPress={() => setShowTimePicker(true)}
            >
              <Text style={styles.datePickerButtonText}>
                Select Time: {newMeeting.time.toLocaleTimeString()}
              </Text>
            </TouchableOpacity>

            {(showDatePicker || showTimePicker) && (
              <DateTimePicker
                value={showDatePicker ? newMeeting.date : newMeeting.time}
                mode={showDatePicker ? 'date' : 'time'}
                is24Hour={false}
                display="default"
                onChange={(event, selectedDate) => {
                  if (showDatePicker) {
                    setShowDatePicker(false);
                    if (selectedDate) {
                      setNewMeeting({...newMeeting, date: selectedDate});
                    }
                  } else {
                    setShowTimePicker(false);
                    if (selectedDate) {
                      setNewMeeting({...newMeeting, time: selectedDate});
                    }
                  }
                }}
              />
            )}

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.createButton]}
                onPress={handleAddMeeting}
              >
                <Text style={styles.createButtonText}>Create Meeting</Text>
              </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    padding: 16,
  },
  cardContainer: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  cardContent: {
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 14,
    color: '#999',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 16,
  },
  participantsText: {
    fontSize: 14,
    color: '#666',
  },
  viewDetailsButton: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  viewDetailsText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
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
  datePickerButton: {
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  datePickerButtonText: {
    fontSize: 16,
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 24,
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
  createButton: {
    backgroundColor: '#007AFF',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MeetingsScreen;