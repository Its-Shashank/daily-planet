import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../theme";
import Tasks from "../Tasks";
import Header from "../Header";
import { storeData, getData } from "../settings";

export default function Home({ navigation }) {
  const [addNewTask, setAddTask] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const getDataFromAsyncStorage = async () => {
    const data = await getData("@tasks");
    setTasks(data);
  };

  useEffect(() => {
    getDataFromAsyncStorage();
  }, []);

  const toggleAddTask = () => {
    setAddTask(prev => !prev);
  };

  const handleTaskInput = e => {
    setTaskValue(e);
  };

  const handleTaskSubmit = () => {
    const task = {
      taskName: taskValue,
    };
    setTaskValue("");
    setTasks([...tasks, task]);
    storeData("@tasks", [...tasks, task]);
  };

  const handleDelete = index => {
    const copyTasks = [...tasks];
    if (index > -1) {
      copyTasks.splice(index, 1);
    }
    setTasks(copyTasks);
    storeData("@tasks", copyTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "ios" && (
        <StatusBar style="dark" backgroundColor={colors.themeColor} />
      )}
      <Header onHamburgerPress={navigation.openDrawer} />
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}>
        <Text style={{ fontSize: 24 }}>Tasks</Text>
        <TouchableOpacity onPress={toggleAddTask}>
          <MaterialCommunityIcons
            name="plus"
            size={40}
            style={{
              color: colors.themeColor,
              backgroundColor: colors.white,
              marginHorizontal: 8,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      {addNewTask && (
        <View
          style={{
            backgroundColor: colors.background,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <TextInput
            style={{
              backgroundColor: colors.white,
              marginHorizontal: 16,
              marginVertical: 4,
              borderRadius: 10,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: colors.themeColor,
              paddingVertical: 20,
              paddingHorizontal: 24,
              flex: 1,
            }}
            value={taskValue}
            onChangeText={handleTaskInput}
            placeholder="Enter new task"
          />
          <TouchableOpacity
            style={{ paddingVertical: 5 }}
            onPress={handleTaskSubmit}>
            <MaterialCommunityIcons
              name="check"
              size={35}
              style={{
                color: colors.themeColor,
                marginLeft: 5,
                marginRight: 25,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      <Tasks tasks={tasks} handleDelete={handleDelete} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
});
