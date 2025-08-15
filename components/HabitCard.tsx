import { StyleSheet, Text, TouchableOpacity } from "react-native";

type HabitCardProps = {
  emoji: string;
  name: string;
  goal: string;
};

export default function HabitCard({ emoji, name, goal }: HabitCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.habitName}>
        {emoji} {name}
      </Text>
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
  habitName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  habitGoal: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});
