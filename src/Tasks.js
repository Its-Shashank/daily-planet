import { ScrollView, View, Text } from "react-native";
import Task from "./Task";
import { colors } from "./theme";

const Tasks = ({ tasks, handleDelete }) => {
  const getIndex = index => {
    handleDelete(index);
  };
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      {tasks.length > 0 ? (
        tasks.map((task, idx) => (
          <Task
            key={idx}
            title={task.taskName}
            handleDelete={() => getIndex(idx)}
          />
        ))
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 14 }}>No tasks added</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Tasks;
