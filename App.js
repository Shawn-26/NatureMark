import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./screens/Menu";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";
import NewLocation from "./screens/NewLocation";
import { Provider } from "react-redux";
import DataCuration from "./screens/DataCuration";
import DataAnalysis from "./screens/DataAnalysis";
import OpenCamera from "./screens/OpenCamera";
import NewTag from "./screens/NewTag";
import DetectedTag from "./screens/DetectedTag";
import StartCapturing from "./components/StartCapturing";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewLocation"
              component={NewLocation}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DataCuration"
              component={DataCuration}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DataAnalysis"
              component={DataAnalysis}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="OpenCamera"
              component={OpenCamera}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewTag"
              component={NewTag}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DetectedTag"
              component={DetectedTag}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="StartCapturing"
              component={StartCapturing}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
  },
});
