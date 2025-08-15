import { useState } from "react"; // ← AGREGAR
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HabitCard from "../../components/HabitCard";

export default function HomeScreen() {
  const [completedCount, setCompletedCount] = useState(0); // ← AGREGAR

  const handleHabitToggle = (isCompleted: boolean) => {
    // ← AGREGAR
    setCompletedCount((prev) => (isCompleted ? prev + 1 : prev - 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>12h</Text>
      <Text style={styles.subtitle}>Tus hábitos de hoy</Text>

      <View style={styles.scoreContainer}>
        {" "}
        {/* ← AGREGAR */}
        <Text style={styles.score}>{completedCount}/3 completados</Text>
        {completedCount === 3 && ( // ← AGREGAR ESTO
          <Text style={styles.congratulations}>
            🎉 ¡Felicidades! ¡Completaste todo!
          </Text>
        )}
      </View>

      <View style={styles.habitContainer}>
        <HabitCard
          emoji="💧"
          name="Tomar agua"
          goal="8 vasos"
          onToggle={handleHabitToggle} // ← AGREGAR
        />
        <HabitCard
          emoji="📚"
          name="Leer"
          goal="30 minutos"
          onToggle={handleHabitToggle} // ← AGREGAR
        />
        <HabitCard
          emoji="🏃"
          name="Ejercicio"
          goal="20 minutos"
          onToggle={handleHabitToggle} // ← AGREGAR
        />
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
  scoreContainer: {
    // ← NUEVO
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
  score: {
    // ← NUEVO
    fontSize: 16,
    fontWeight: "bold",
  },
  habitContainer: {
    marginTop: 30,
  },
  congratulations: {
    // ← AGREGAR AL FINAL DE styles
    fontSize: 14,
    color: "green",
    marginTop: 5,
    fontWeight: "bold",
  },
});
