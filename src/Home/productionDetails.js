import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProductionDetails = ({ form, setForm }) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleInputChange = (section, key, value, index) => {
    const updatedDetails = [...form.productionDetails];
    updatedDetails[index][key] = value;
    setForm({ ...form, productionDetails: updatedDetails });
  };

  const addNewRow = () => {
    const newRow = {
      printedRollNo: '',
      printingOpName: '',
      printedInputRollKgs: '',
      supName: '',
      supRollNo: '',
      netWt: '',
      outputRollNo: '',
      outputRollWtKgs: '',
      outputRollMtrs: '',
      startingTime: '',
      endTime: '',
      adhGsm: ''
    };
    setForm({
      ...form,
      productionDetails: [...form.productionDetails, newRow],
    });
  };

  const removeSelectedRow = () => {
    if (selectedRowIndex !== null) {
      const updatedDetails = [...form.productionDetails];
      updatedDetails.splice(selectedRowIndex, 1);
      setForm({ ...form, productionDetails: updatedDetails });
      setSelectedRowIndex(null); // Clear selection after removal
    }
  };

  return (
    <View style={styles.tableContainer}>
      <Text style={styles.sections}>Production Details</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        <View>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            {['Printed Roll No', 'Printing OP. Name', 'Printed Input Roll in (Kgs)', 'Sup. Name', 'Sup. Roll No', 'Net WT', 'Output Roll No', 'Output Roll in WT (Kgs)', 'Output Roll in (Mtrs)', 'Starting Time', 'End Time', 'ADH GSM'].map((header, index) => (
              <Text key={index} style={styles.tableHeaderText}>{header}</Text>
            ))}
          </View>

          {/* Table Rows */}
          {form.productionDetails.map((row, rowIndex) => (
            <View style={styles.tableRow} key={rowIndex}>
              {Object.keys(row).map((key) => (
                <TextInput
                  key={key}
                  style={styles.tableInput}
                  value={row[key]}
                  onChangeText={(text) =>
                    handleInputChange('productionDetails', key, text, rowIndex)
                  }
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Add Row Button */}
      <TouchableOpacity style={styles.addButton} onPress={addNewRow}>
        <Text style={styles.addButtonText}>Add Row</Text>
      </TouchableOpacity>

      {/* Remove Row Section */}
      <View style={styles.removeRowContainer}>
        <Picker
          selectedValue={selectedRowIndex}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedRowIndex(itemValue)}
        >
          <Picker.Item label="Select row to remove" value={null} />
          {form.productionDetails.map((_, index) => (
            <Picker.Item key={index} label={`Row ${index + 1}`} value={index} />
          ))}
        </Picker>

        {selectedRowIndex !== null && (
            <TouchableOpacity
            style={styles.removeButton}
            onPress={removeSelectedRow}
            >
            <Text style={styles.removeButtonText}>Remove Selected Row</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  sections: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tableHeaderText: {
    width: 120,
    marginHorizontal: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  tableInput: {
    width: 120,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: '#ccc',
    marginHorizontal: 2,
    paddingVertical: 5,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeRowContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  picker: {
    width: 250,
    height: 50,
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#ff4d4f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductionDetails;

