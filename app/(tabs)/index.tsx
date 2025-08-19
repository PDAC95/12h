import { router, useLocalSearchParams } from "expo-router"; // ← AGREGAR useLocalSearchParams
import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HabitCard from "../../components/HabitCard";

type Habit = {
  id: string;
  emoji: string;
  name: string;
  goal: string;
};

export default function HomeScreen() {
  const [completedCount, setCompletedCount] = useState(0);
  const params = useLocalSearchParams(); // ← AGREGAR ESTO

  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", emoji: "💧", name: "Tomar agua", goal: "8 vasos" },
    { id: "2", emoji: "📚", name: "Leer", goal: "30 minutos" },
    { id: "3", emoji: "🏃", name: "Ejercicio", goal: "20 minutos" },
  ]);

  // ← AGREGAR ESTE useEffect
  useEffect(() => {
    if (params.newHabit) {
      try {
        const newHabit = JSON.parse(params.newHabit as string);
        setHabits((prevHabits) => [...prevHabits, newHabit]);

        // Limpiar el parámetro para evitar que se agregue de nuevo
        router.setParams({ newHabit: undefined });
      } catch (error) {
        console.error("Error al parsear el nuevo hábito:", error);
      }
    }
  }, [params.newHabit]);

  const handleHabitToggle = (isCompleted: boolean) => {
    setCompletedCount((prev) => (isCompleted ? prev + 1 : prev - 1));
  };

  // ← CAMBIAR ESTA FUNCIÓN
  const goToAddHabit = () => {
    router.push("/add-habit");
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>12h</Text>
      <Text style={styles.subtitle}>Tus hábitos de hoy</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.score}>
          {completedCount}/{habits.length} completados
        </Text>
        {completedCount === habits.length && habits.length > 0 && (
          <Text style={styles.congratulations}>
            🎉 ¡Felicidades! ¡Completaste todo!
          </Text>
        )}
      </View>

      {/* ← CAMBIAR onPress */}
      <TouchableOpacity style={styles.addButton} onPress={goToAddHabit}>
        <Text style={styles.addButtonText}>+ Agregar Hábito</Text>
      </TouchableOpacity>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitCard
            id={item.id}
            emoji={item.emoji}
            name={item.name}
            goal={item.goal}
            onToggle={handleHabitToggle}
            onDelete={deleteHabit}
          />
        )}
        style={styles.habitContainer}
      />
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
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
  },
  congratulations: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  habitContainer: {
    marginTop: 30,
  },
});
