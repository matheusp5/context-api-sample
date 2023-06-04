import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UserProvider } from "./contexts/userContext";
import Home from "./Screens/Home";

export function Container({ children, styles }: any) {
  return <View style={[{ marginHorizontal: 20 }, styles]}>{children}</View>;
}

export default function App() {
  return (
    <UserProvider>
      <Container styles={{ marginTop: 30 }}>
        <Home />
        <StatusBar style="auto" />
      </Container>
    </UserProvider>
  );
}
