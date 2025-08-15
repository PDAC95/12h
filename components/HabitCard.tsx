import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HabitCardProps = {
  emoji: string;
  name: string;
  goal: string;
  onToggle: (isCompleted: boolean) => void; // ← AGREGAR
};

export default function HabitCard({
  emoji,
  name,
  goal,
  onToggle,
}: HabitCardProps) {
  // ← MODIFICAR
  const [completed, setCompleted] = useState(false);

  const handlePress = () => {
    // ← NUEVA FUNCIÓN
    const newCompleted = !completed;
    setCompleted(newCompleted);
    onToggle(newCompleted);
  };

  return (
    <TouchableOpacity
      style={[styles.card, completed && styles.cardCompleted]}
      onPress={handlePress} // ← CAMBIAR
    >
      <View style={styles.row}>
        <Text style={styles.habitName}>
          {emoji} {name}
        </Text>
        <Text style={styles.check}>{completed ? "✅" : "⭕"}</Text>
      </View>
      <Text style={styles.habitGoal}>Meta: {goal}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: 300,
  },
  cardCompleted: {
    backgroundColor: "#90EE90",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  habitName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  check: {
    fontSize: 20,
  },
  habitGoal: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});
