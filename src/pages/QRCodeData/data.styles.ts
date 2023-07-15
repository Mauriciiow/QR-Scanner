import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    backgroundColor: "#3584fa",
    paddingTop: 20,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  titleHeader: {
    color: "#fff",

    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 30,
  },
  icon: {
    marginLeft: 9,
    marginTop: 20,
  },
  content: {
    alignItems: "center",
    marginTop: 20,
    flex: 1,
  },
  link: {
    color: "#3584fa",
    fontSize: 20,
    fontWeight: "bold",
  },
});
