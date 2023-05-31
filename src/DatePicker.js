import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = ({ mode, isVisible, onConfirm, onCancel }) => {
  return (
    <View>
      <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </View>
  );
};

export default DatePicker;
