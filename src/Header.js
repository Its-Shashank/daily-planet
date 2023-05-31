import { View, TouchableOpacity, Text } from "react-native";
import { colors } from "./theme";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const Header = ({ onHamburgerPress }) => {
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
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={30}
            style={{ color: colors.white }}
          />
          <AntDesign name="user" size={30} style={{ color: colors.white }} />
        </View>
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
          <View style={{ flexDirection: "row" }}>
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
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
