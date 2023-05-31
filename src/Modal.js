import React, { useState } from "react";
import {
  Alert,
  Modal as RNModal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { colors } from "./theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DatePicker from "./DatePicker";
import moment from "moment";

const Modal = ({ modalVisible, handleClose, handleSave }) => {
  const [reminderTitle, setReminderTitle] = useState("");
  const [reminderDescription, setReminderDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    moment().format("MMM Do YY")
  );
  const [selectedTime, setSelectedTime] = useState(moment().format("h:mm a"));
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const onSave = () => {
    const reminder = {
      title: reminderTitle,
      description: reminderDescription,
      date: selectedDate,
      time: selectedTime,
    };

    handleSave(reminder);
  };

  const onDateChange = date => {
    setSelectedDate(moment(date).format("MMM Do YY"));
    setTimePickerVisible(false);
    setDatePickerVisible(false);
  };

  const onTimeChange = time => {
    setSelectedTime(moment(time).format("h:mm a"));
    setTimePickerVisible(false);
    setDatePickerVisible(false);
  };

  const showDatePicker = () => {
    setTimePickerVisible(false);
    setDatePickerVisible(true);
  };

  const showTimePicker = () => {
    setDatePickerVisible(false);
    setTimePickerVisible(true);
  };

  return (
    <RNModal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={handleClose}>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            onPress={handleClose}
            style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              style={{ color: colors.white }}
            />
            <Text style={styles.modalHeaderText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Title</Text>
          <TextInput
            style={{
              backgroundColor: colors.white,
              borderRadius: 10,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: colors.themeColor,
              paddingVertical: 10,
              paddingHorizontal: 24,
              fontSize: 16,
              marginBottom: 20,
            }}
            value={reminderTitle}
            onChangeText={setReminderTitle}
            placeholder="Enter title"
          />
          <Text style={styles.modalText}>Description</Text>
          <TextInput
            style={{
              backgroundColor: colors.white,
              borderRadius: 10,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: colors.themeColor,
              paddingHorizontal: 24,
              fontSize: 16,
              marginBottom: 20,
              minHeight: 80,
            }}
            numberOfLines={5}
            value={reminderDescription}
            onChangeText={setReminderDescription}
            placeholder="Description goes here..."
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 30,
            }}>
            <Button
              onPress={showDatePicker}
              title={selectedDate.toString()}
              style={{
                backgroundColor: colors.themeColor,
              }}>
              {/* <Text>{selectedDate}</Text> */}
            </Button>
            <DatePicker
              isVisible={isDatePickerVisible}
              mode="date"
              onCancel={() => setDatePickerVisible(false)}
              onConfirm={onDateChange}
            />
            <Button
              onPress={showTimePicker}
              title={selectedTime.toString()}
              style={{
                backgroundColor: colors.themeColor,
              }}>
              {/* <Text>{selectedTime}</Text> */}
            </Button>
            <DatePicker
              isVisible={isTimePickerVisible}
              mode="time"
              onCancel={() => setTimePickerVisible(false)}
              onConfirm={onTimeChange}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Pressable
              style={[styles.button, styles.buttonSave]}
              onPress={onSave}>
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleClose}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalHeader: {
    paddingLeft: 16,
    backgroundColor: colors.themeColor,
  },
  modalHeaderText: {
    color: colors.white,
    fontSize: 20,
    paddingVertical: 20,
  },
  modalView: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonSave: {
    backgroundColor: colors.themeColor,
  },
  buttonClose: {
    backgroundColor: colors.greyish,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
  },
});

export default Modal;
