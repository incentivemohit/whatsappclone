import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./navigations/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
