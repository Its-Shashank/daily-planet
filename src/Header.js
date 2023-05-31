import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { colors } from "./theme";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const Header = ({ onHamburgerPress, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View style={{ backgroundColor: colors.themeColor }}>
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity onPress={onHamburgerPress}>
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: colors.white }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={{ color: colors.white, fontSize: 30 }}>
          {"Hello,\nRitu"}
        </Text>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: colors.tint,
            borderRadius: 20,
            marginVertical: 20,
            alignItems: "center",
          }}>
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            style={{ color: colors.white }}
          />
          <TextInput
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={{ flex: 1, color: colors.white, marginLeft: 10 }}
          />
          <Pressable
            onPress={() => handleSearch(searchTerm)}
            style={{ paddingHorizontal: 10 }}>
            <Text style={{ color: colors.white, fontSize: 20 }}>Search</Text>
          </Pressable>
          {/* <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="microphone"
              size={30}
              style={{ color: colors.white }}
            />
            <MaterialCommunityIcons
              name="tune"
              size={30}
              style={{ color: colors.white }}
            />
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default Header;
