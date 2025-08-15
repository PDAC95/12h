import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HabitCardProps = {
  id: string;
  emoji: string;
  name: string;
  goal: string;
  onToggle: (isCompleted: boolean) => void; // ← AGREGAR
  onDelete: (id: string) => void; // ← AGREGAR
};

export default function HabitCard({
  id,
  emoji,
  name,
  goal,
  onToggle,
  onDelete,
}: HabitCardProps) {
  const [completed, setCompleted] = useState(false);

  const handlePress = () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    onToggle(newCompleted);
  };

  const handleLongPress = () => {
    onDelete(id);
  };

  return (
    <TouchableOpacity
      style={[styles.card, completed && styles.cardCompleted]}
      onPress={handlePress}
      onLongPress={handleLongPress} // ← AGREGAR
    >
      <View style={styles.row}>
        <Text style={styles.habitName}>
          {emoji} {name}
        </Text>
        <Text style={styles.check}>{completed ? "✅" : "⭕"}</Text>
      </View>
      <Text style={styles.habitGoal}>Meta: {goal}</Text>
      <Text style={styles.hint}>Mantén presionado para eliminar</Text>{" "}
      {/* ← AGREGAR */}
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

  hint: {
    fontSize: 10,
    color: "#999",
    marginTop: 5,
    fontStyle: "italic",
  },
});
