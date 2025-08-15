import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HabitCard from "../../components/HabitCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>12h</Text>
      <Text style={styles.subtitle}>Tus hábitos de hoy</Text>

      <View style={styles.habitContainer}>
        <HabitCard emoji="💧" name="Tomar agua" goal="8 vasos" />
        <HabitCard emoji="📚" name="Leer" goal="30 minutos" />
        <HabitCard emoji="🏃" name="Ejercicio" goal="20 minutos" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    marginTop: 5,
  },
  habitContainer: {
    marginTop: 30,
  },
});
