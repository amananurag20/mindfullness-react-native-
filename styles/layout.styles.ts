import { StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    zIndex: 100,
  },
  headerButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: "brown",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timeButton: {
    padding: 10,
    backgroundColor: "#6200ee",
    borderRadius: 5,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },
  timeButtonText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ff5722",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },

  // New styles for the reminder
  reminderTextContainer: {
    position: "absolute",
    top: 50,
    left: "50%",
    transform: [{ translateX: -80 }],
    zIndex: 1,
  },
  reminderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6200ee",
  },
});
