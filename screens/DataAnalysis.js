import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const DataAnalysis = () => {
  return (
    <SafeAreaView className="flex justify-center mt-20 mx-20">
      <View className="p-5 rounded-full bg-[#14594a] border-2 border-black">
        <Text className="text-5xl text-white font-bold text-center">
          Data Analysis
        </Text>
      </View>
      <View style={styles.table}>
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            <View style={[styles.cell, { flex: 2 }]}>
              <TouchableOpacity>
                <Text className="text-2xl">LOCATION</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.cell, { flex: 2 }]}>
              <TouchableOpacity>
                <Text className="text-2xl">DATE</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.cell, { flex: 0.5 }]}>
              <TouchableOpacity>
                <Text className="text-lg">EDIT</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.cell, { flex: 0.5 }]}>
              <TouchableOpacity>
                <Text className="text-lg">VIEW</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.cell, { flex: 0 }]}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require("../assets/csv.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.cell, { flex: 0 }]}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require("../assets/excel.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.cell, { flex: 0 }]}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={require("../assets/pdf.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  table: {
    marginTop: 50,
    flexDirection: "column",
    borderWidth: 3,
    borderColor: "black",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
});

export default DataAnalysis;
