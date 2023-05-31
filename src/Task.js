import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "./theme";

const Task = ({ title, description, date, time, handleDelete }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 16 }}>{title}</Text>
          {description && <Text>{description}</Text>}
          <View style={{ flexDirection: "row" }}>
            {date && <Text style={{ marginRight: 40 }}>{date}</Text>}
            {time && <Text>{time}</Text>}
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{ color: colors.tint, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
