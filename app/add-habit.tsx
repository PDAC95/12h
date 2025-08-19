import { router } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddHabitScreen() {
  const [habitName, setHabitName] = useState("");
  const [habitGoal, setHabitGoal] = useState("");
  const [habitEmoji, setHabitEmoji] = useState("⭐");

  const saveHabit = () => {
    // Validamos que no esté vacío
    if (habitName.trim() === "") {
      alert("Por favor escribe un nombre para el hábito");
      return;
    }

    if (habitGoal.trim() === "") {
      alert("Por favor escribe una meta para el hábito");
      return;
    }

    // Crear el nuevo hábito
    const newHabit = {
      id: Date.now().toString(),
      emoji: habitEmoji,
      name: habitName.trim(),
      goal: habitGoal.trim(),
    };

    // Navegar de vuelta y enviar el nuevo hábito
    router.navigate({
      pathname: "/(tabs)",
      params: { newHabit: JSON.stringify(newHabit) },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nuevo Hábito</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Emoji del hábito</Text>
        <TextInput
          style={styles.emojiInput}
          value={habitEmoji}
          onChangeText={setHabitEmoji}
          placeholder="⭐"
          maxLength={2}
        />

        <Text style={styles.label}>Nombre del hábito</Text>
        <TextInput
          style={styles.input}
          value={habitName}
          onChangeText={setHabitName}
          placeholder="Ej: Leer, Ejercicio, Meditar..."
        />

        <Text style={styles.label}>Meta diaria</Text>
        <TextInput
          style={styles.input}
          value={habitGoal}
          onChangeText={setHabitGoal}
          placeholder="Ej: 30 minutos, 8 vasos, 10,000 pasos..."
        />

        <TouchableOpacity style={styles.saveButton} onPress={saveHabit}>
          <Text style={styles.saveButtonText}>Guardar Hábito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  emojiInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 24,
    textAlign: "center",
    width: 60,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
