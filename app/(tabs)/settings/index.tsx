import { Link, Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Text>Settings screen</Text>
      <Link href="/settings/profile" asChild>
        <TouchableOpacity style={styles.link}>
          <Text>Go to profile</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: "red",
    padding: 10,
  },
});
