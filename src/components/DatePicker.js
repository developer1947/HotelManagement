import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { BLACK, WHITE } from '../constants/color';

const DatePicker = ({ show, onClose, onDateSelect, minimumDate = new Date() }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    { label: 'January', value: 0 },
    { label: 'February', value: 1 },
    { label: 'March', value: 2 },
    { label: 'April', value: 3 },
    { label: 'May', value: 4 },
    { label: 'June', value: 5 },
    { label: 'July', value: 6 },
    { label: 'August', value: 7 },
    { label: 'September', value: 8 },
    { label: 'October', value: 9 },
    { label: 'November', value: 10 },
    { label: 'December', value: 11 },
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const changeMonth = (direction) => {
    let newMonth = selectedDate.getMonth() + direction;
    let newYear = selectedDate.getFullYear();
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setSelectedDate(new Date(newYear, newMonth, 1));
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);

    // Check if the selected date is before the minimum date
    if (newDate < new Date(minimumDate.setHours(0, 0, 0, 0))) return;

    // Handle check-in and check-out logic
    if (!checkInDate || (checkInDate && checkOutDate)) {
      // Set check-in date and reset check-out date
      setCheckInDate(newDate);
      setCheckOutDate(null);
    } else if (checkInDate && !checkOutDate) {
      // Set check-out date if it's after the check-in date
      if (newDate > checkInDate) {
        setCheckOutDate(newDate);
      } else {
        // Reset check-in date if the selected date is before or equal to check-in
        setCheckInDate(newDate);
      }
    }
  };

  const handleDone = () => {
    if (checkInDate && checkOutDate) {
      onDateSelect({
        checkIn: checkInDate,
        checkOut: checkOutDate,
      });
      onClose();
    }
  };

  const renderDaysGrid = () => {
    const startDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());
    const totalCells = startDay + daysInMonth;

    const daysArray = [];
    for (let i = 0; i < totalCells; i++) {
      if (i < startDay) {
        daysArray.push(<View key={i} style={styles.dayCell} />);
      } else {
        const day = i - startDay + 1;
        const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);

        // Determine the styling for each date
        const isCheckIn = checkInDate && currentDate.toDateString() === checkInDate.toDateString();
        const isCheckOut = checkOutDate && currentDate.toDateString() === checkOutDate.toDateString();
        const isInRange =
          checkInDate &&
          checkOutDate &&
          currentDate > checkInDate &&
          currentDate < checkOutDate;

        daysArray.push(
          <TouchableOpacity
            key={i}
            style={[
              styles.dayCell,
              isCheckIn && styles.checkInDay,
              isCheckOut && styles.checkOutDay,
              isInRange && styles.inRangeDay,
            ]}
            onPress={() => handleDateSelect(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        );
      }
    }
    return daysArray;
  };

  return (
    <Modal visible={show} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => changeMonth(-1)} style={styles.arrow}>
              <Text style={styles.arrowText}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.monthText}>
              {months[selectedDate.getMonth()].label} {selectedDate.getFullYear()}
            </Text>
            <TouchableOpacity onPress={() => changeMonth(1)} style={styles.arrow}>
              <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dayLabels}>
            {daysOfWeek.map((day, index) => (
              <Text key={index} style={styles.dayLabelText}>
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.daysGrid}>{renderDaysGrid()}</View>

          
          <View style={{height:"12%",width:'100%',flexDirection:'row',alignItems:'center'}}>
           <View style={{height:"90%",width:'50%',justifyContent:'center',alignItems:'center'}}>
               <TouchableOpacity onPress={onClose} style={{height:'90%',width:'80%',backgroundColor:'lightgrey',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                  <Text allowFontScaling={false} style={{fontSize:14,color:BLACK,fontWeight:'900'}}>Cancel</Text>
               </TouchableOpacity>
           </View>
           <View style={{height:"90%",width:'50%',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={{height:'90%',width:'80%',backgroundColor:'#4CAF50',borderRadius:10,justifyContent:'center',alignItems:'center'}} onPress={handleDone}>
            <Text allowFontScaling={false} style={{fontSize:14,color:WHITE,fontWeight:'600'}}>✓  Set Date</Text>
          </TouchableOpacity>
           </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  arrow: {
    padding: 10,
  },
  arrowText: {
    fontSize: 24,
    color: '#333',
  },
  dayLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  dayLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: '14%',
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  dayCell: {
    width: '14%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  selectedDay: {
    backgroundColor: '#4CAF50',
    // borderRadius: 20,
  },
  selectedDayText: {
    color: '#fff',
  },
  doneButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    // borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  doneText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight:'900'

  },
  disabledDayText: {
    color: 'lightgrey', 
  },
  checkInDay: { backgroundColor: 'green', borderRadius: 5 },
  checkOutDay: { backgroundColor: 'green', borderRadius: 5 },
  inRangeDay: { backgroundColor: '#ECFDF5',  },
});

export default DatePicker;