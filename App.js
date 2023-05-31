import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import Home from "./src/screens/Home";
import Reminders from "./src/screens/Reminders";
import PushNotifications from "./src/PushNotifications";
import { useNotifications } from "./src/hooks/useNotifications";

const Drawer = createDrawerNavigator();

export default function App() {
  const { registerForPushNotificationsAsync, handleNotificationResponse } =
    useNotifications();

  useEffect(() => {
    registerForPushNotificationsAsync();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    const responseListener =
      Notifications.addNotificationResponseReceivedListener(
        handleNotificationResponse
      );
    return () => {
      if (responseListener) {
        Notifications.removeNotificationSubscription(responseListener);
      }
    };
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Reminders"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Tasks" component={Home} />
        <Drawer.Screen name="Reminders" component={Reminders} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
