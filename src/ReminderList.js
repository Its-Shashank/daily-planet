import { ScrollView, View, Text } from "react-native";
import Task from "./Task";
import { colors } from "./theme";

const ReminderList = ({ reminders, handleDelete }) => {
  const getIndex = index => {
    handleDelete(index);
  };
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      {reminders.length > 0 ? (
        reminders?.map((reminder, idx) => (
          <Task
            key={idx}
            title={reminder?.title}
            date={reminder?.date}
            time={reminder?.time}
            description={reminder?.description}
            handleDelete={() => getIndex(idx)}
          />
        ))
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 14 }}>No reminders added</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ReminderList;
