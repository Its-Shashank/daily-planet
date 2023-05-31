import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../theme";
import Modal from "../Modal";
import ReminderList from "../ReminderList";
import Header from "../Header";
// import { storeData, getData } from "../settings";

export default function Home({ navigation }) {
  const [reminders, setReminders] = useState([]);
  const [filteredReminders, setFilteredReminders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // const getDataFromAsyncStorage = async () => {
  //   const data = await getData("@reminders");
  //   setReminders(data);
  // };

  // useEffect(() => {
  //   getDataFromAsyncStorage();
  // }, []);

  const addReminder = () => {
    setModalVisible(true);
  };

  const handleDelete = index => {
    const copyReminders = [...reminders];
    if (index > -1) {
      copyReminders.splice(index, 1);
    }
    setReminders(copyReminders);
    setFilteredReminders(copyReminders);
    // storeData("@reminders", copyReminders);
  };

  const handleSave = reminder => {
    // const { title, description, date, time } = reminder;
    setReminders([...reminders, reminder]);
    setFilteredReminders([...reminders, reminder]);
    // storeData("@reminders", [...reminders, reminder]);
    setModalVisible(false);
  };

  const handleSearch = searchTerm => {
    if (reminders.length > 0 && searchTerm) {
      const currentReminders = tasks.filter(task =>
        task.taskName.includes(searchTerm)
      );
      setFilteredReminders(currentReminders);
    } else if (reminders.length > 0 && !searchTerm) {
      setFilteredReminders(tasks);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "ios" && (
        <StatusBar
          style={modalVisible ? "dark" : "light"}
          backgroundColor={colors.themeColor}
        />
      )}
      <Modal
        modalVisible={modalVisible}
        handleClose={() => setModalVisible(false)}
        handleSave={handleSave}
      />
      <Header
        onHamburgerPress={navigation.openDrawer}
        handleSearch={handleSearch}
      />
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}>
        <Text style={{ fontSize: 24 }}>Reminders</Text>
        <TouchableOpacity onPress={addReminder}>
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
      <ReminderList reminders={reminders} handleDelete={handleDelete} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
});
