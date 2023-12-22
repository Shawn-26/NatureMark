import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as SQLite from "expo-sqlite";

const TreeSpecies = [
  {
    "Family ": "Meliaceae",
    "Scientific Name": "Azadirachta Indica",
    "Common Name": "Neem",
    "Kannnada Name": "(ಬೇವು) Bevu",
    "Mahrashtra Name": "(कडुलिंब) Kadulimba",
    "Tamil Nadu Name": "(வேம்பு) Vempu",
    "CO2 Stock Per Tree (ton)": "0.51",
  },
  {
    "Family ": "Lamiaceae",
    "Scientific Name": "Tectona Grandis",
    "Common Name": "Sagwaan / Teak",
    "Kannnada Name": "(ತೇಗ )Thega",
    "Mahrashtra Name": "(सागवान) Sagwan",
    "Tamil Nadu Name": "(தேக்கு) Tekku",
    "CO2 Stock Per Tree (ton)": "3.70 lakh tonnes",
  },
  {
    "Family ": "Myrtaceae",
    "Scientific Name": "Eucalyptus globulus",
    "Common Name": "Tasmanian Blue Gem",
    "Kannnada Name": "Neelgiri mara",
    "Mahrashtra Name": "Tailapatra",
    "Tamil Nadu Name": "",
    "CO2 Stock Per Tree (ton)": "2.47 lakh tonnes",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Prosopis Juliflora",
    "Common Name": "Kabuli Kikar",
    "Kannnada Name": "Ballaari Jaali ( ಬಳ್ಳಾರಿ ಜಾಲಿ)",
    "Mahrashtra Name": "Katkali (काटकळी)",
    "Tamil Nadu Name": "Seemai Karuvel (சீமைக்கருவேலை)",
    "CO2 Stock Per Tree (ton)": "1.67 lakh tonnes",
  },
  {
    "Family ": "Casuarinaceae",
    "Scientific Name": "Casuarina Equisetifolia",
    "Common Name": "Whistling Pine / She Oak",
    "Kannnada Name": "Kyasurina",
    "Mahrashtra Name": "Suru",
    "Tamil Nadu Name": "Savukku",
    "CO2 Stock Per Tree (ton)": "1.28 lakh tonnes",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Vachellia Tortilis",
    "Common Name": "Umbrella Thorn",
    "Kannnada Name": "Auri",
    "Mahrashtra Name": "Israeli Babool",
    "Tamil Nadu Name": "Karuvel",
    "CO2 Stock Per Tree (ton)": "1.04 lakh tonnes",
  },
  {
    "Family ": "Moraceae",
    "Scientific Name": "Ficus Benghalensis",
    "Common Name": "Banyan",
    "Kannnada Name": "ಆಲ (Aala)",
    "Mahrashtra Name": "",
    "Tamil Nadu Name": "(ஆலை) Alai",
    "CO2 Stock Per Tree (ton)": "0.635",
  },
  {
    "Family ": "Moraceae",
    "Scientific Name": "Ficus Religiosa",
    "Common Name": "Peepal / Holy Fig Tree",
    "Kannnada Name": "(ಅರಳಿಮರ) Aralimara",
    "Mahrashtra Name": "(अश्वत्थ) Ashwattha",
    "Tamil Nadu Name": "(அரசமரம்) Araca-maram",
    "CO2 Stock Per Tree (ton)": "1.784",
  },
  {
    "Family ": "Myrtaceae",
    "Scientific Name": "Syzygium Cumini",
    "Common Name": "Black Plum / Jamun",
    "Kannnada Name": "(ನೆರುಲ) Nerula",
    "Mahrashtra Name": "(जांबूळ) Jambool",
    "Tamil Nadu Name": " (நாவல்) Naval",
    "CO2 Stock Per Tree (ton)": "0.499",
  },
  {
    "Family ": "Sapotaceae",
    "Scientific Name": "Madhuca Longifolia",
    "Common Name": "Indian Butter Tree",
    "Kannnada Name": "(ಇಪ್ಪೆ) Ippe",
    "Mahrashtra Name": "Mahwa",
    "Tamil Nadu Name": "Iluppai (இலுப்பை)",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Dalbergia Latifolia",
    "Common Name": "Black Rosewood",
    "Kannnada Name": "(ಇಬಡಿ) Ibadi",
    "Mahrashtra Name": "(काळारुख) Kalarukh",
    "Tamil Nadu Name": "(நூக்கம்) Nukkam",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Anacardiaceae",
    "Scientific Name": "Mangifera Indica",
    "Common Name": "Mango",
    "Kannnada Name": "(ಮಾವು) Maavu",
    "Mahrashtra Name": "Amba (अंबा)",
    "Tamil Nadu Name": "(மா) Ma",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Moraceae",
    "Scientific Name": "Artocarpus Heterophyllus",
    "Common Name": "Jackfruit",
    "Kannnada Name": "(ಹಲಸು) Halasu",
    "Mahrashtra Name": "(फणस) Phanas",
    "Tamil Nadu Name": "(பலா) Palaa",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Peltophorum Pterocarpum",
    "Common Name": "Copperpod",
    "Kannnada Name": "Bettada Huli",
    "Mahrashtra Name": "(पीला गुलमोहर) Peela Gulmohar",
    "Tamil Nadu Name": "(பெருங்கொன்றை) Perung Kondrai",
    "CO2 Stock Per Tree (ton)": "2.323",
  },
  {
    "Family ": "Rutaceae",
    "Scientific Name": "Aegle Marmelos",
    "Common Name": "Bael",
    "Kannnada Name": "Bilvapatre",
    "Mahrashtra Name": "(बेल) Bel",
    "Tamil Nadu Name": "Vilvam",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Pongamia Pinnata",
    "Common Name": "Indian Beech Tree",
    "Kannnada Name": "(ಹೊಂಗೆ ಮರ) Honge Mara",
    "Mahrashtra Name": "(करंज) Karanj",
    "Tamil Nadu Name": "(ஆசிருந்தம்) Aciruntam",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Caesalpiniaceae",
    "Scientific Name": "Tamarindus Indica",
    "Common Name": "Tamarind",
    "Kannnada Name": "(ಹುಣಿಸೆ) Hunise",
    "Mahrashtra Name": "Chinch",
    "Tamil Nadu Name": "Puli (புளி)",
    "CO2 Stock Per Tree (ton)": "1.857",
  },
  {
    "Family ": "Pinaceae",
    "Scientific Name": "Cedrus Deodara",
    "Common Name": "Himalayan Cedar",
    "Kannnada Name": "(ದೇವದಾರು) Devadaru",
    "Mahrashtra Name": "(देवदार) Devdar",
    "Tamil Nadu Name": "Devadaram",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Combretaceae",
    "Scientific Name": "Terminalia Anogeissiana",
    "Common Name": "Axle Wood Tree",
    "Kannnada Name": "(ಬೆಜ್ಜಲು) Bejjalu",
    "Mahrashtra Name": "Dhaora",
    "Tamil Nadu Name": "Nakam",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Dipterocarpaceae",
    "Scientific Name": "Shorea Robusta",
    "Common Name": "Sal",
    "Kannnada Name": "(ಬಿಳಿಬೋವು) Bilibovu",
    "Mahrashtra Name": "Guggilu",
    "Tamil Nadu Name": "Venkungiliyam",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Combretaceae",
    "Scientific Name": "Terminalia Elliptica",
    "Common Name": "Indian Laurel",
    "Kannnada Name": "(ಬನಪು) Banapu",
    "Mahrashtra Name": "(ऐन) Ain",
    "Tamil Nadu Name": "(அருச்சுனம்) Aruccunam",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Acacia Auriculiformis",
    "Common Name": "Earleaf Acacia / Golden Shower",
    "Kannnada Name": "Auri",
    "Mahrashtra Name": "(अकाशिया) Akashia",
    "Tamil Nadu Name": "Karuvel",
    "CO2 Stock Per Tree (ton)": "0.51",
  },
  {
    "Family ": "Combretaceae",
    "Scientific Name": "Terminalia Catappa",
    "Common Name": "Indian Almond",
    "Kannnada Name": "(ಕಾಡುಬಾದಾಮಿ) Kaadubaadaami",
    "Mahrashtra Name": "(जंगली बादाम) Jangli badam",
    "Tamil Nadu Name": "Nattuvadumai",
    "CO2 Stock Per Tree (ton)": "1.09",
  },
  {
    "Family ": "Moraceae",
    "Scientific Name": "Ficus Racemosa",
    "Common Name": "Cluster Fig",
    "Kannnada Name": "(ಅತ್ತಿ) Atti",
    "Mahrashtra Name": "Umber",
    "Tamil Nadu Name": "(அத்தி) Atti",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Meliaceae",
    "Scientific Name": "Swietenia Mahagoni",
    "Common Name": "West Indian Mahogany",
    "Kannnada Name": "Mahogany",
    "Mahrashtra Name": "",
    "Tamil Nadu Name": "Magahani",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Parkia Biglandulosa",
    "Common Name": "African Locust Ttree",
    "Kannnada Name": "(ಶಿವಲಿಂಗದ ಮರ) Shivalingada mara",
    "Mahrashtra Name": "(चेन्डुफूल) Chendu Phul ",
    "Tamil Nadu Name": "",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Caesalpiniaceae",
    "Scientific Name": "Senna Siamea",
    "Common Name": "Siamese Senna",
    "Kannnada Name": "Sima Tangedu",
    "Mahrashtra Name": "Kassod",
    "Tamil Nadu Name": "Chelumalarkkonrai",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Vachellia Nilotica",
    "Common Name": "Babul Tree",
    "Kannnada Name": "Kari Jjaali",
    "Mahrashtra Name": "Babool",
    "Tamil Nadu Name": "Karu Vela",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Samanea Saman",
    "Common Name": "Rain Tree",
    "Kannnada Name": "(ಮಳೆಮರ) Malemara",
    "Mahrashtra Name": "(गुलाबी शिरीष) Gulabi Siris",
    "Tamil Nadu Name": "Thoongumoonji Maram",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Poaceae",
    "Scientific Name": "Bambusa Vulgaris",
    "Common Name": "Bamboo",
    "Kannnada Name": "(ಬಿದಿರು) Bidiru",
    "Mahrashtra Name": "(कळक) Kalaka",
    "Tamil Nadu Name": "(மூங்கில்) Moongil",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Apocynaceae",
    "Scientific Name": "Alstonia Scholaris",
    "Common Name": "Devil Tree",
    "Kannnada Name": "Doddapala",
    "Mahrashtra Name": "(सप्तपर्ण) Saptaparna",
    "Tamil Nadu Name": "(ஏழிலை) Paalai",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Fabaceae",
    "Scientific Name": "Saraca Asoca",
    "Common Name": "Ashoka tree",
    "Kannnada Name": "Achenge",
    "Mahrashtra Name": "Jasundi",
    "Tamil Nadu Name": "(அசோகம்) Asogam",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Combretaceae",
    "Scientific Name": "Terminalia Arjuna",
    "Common Name": "Arjun Tree",
    "Kannnada Name": "Aatumaruthu",
    "Mahrashtra Name": "(अर्जुन) Arjun",
    "Tamil Nadu Name": "(மருது) Marutu",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Bignoniaceae",
    "Scientific Name": "Millingtonia Hortensis",
    "Common Name": "Tree Jasmine",
    "Kannnada Name": "(ಬಿರಟೆಮರ) Birate Mara",
    "Mahrashtra Name": "(कावल निम्ब) Kaval Nimb",
    "Tamil Nadu Name": "(கட் மல்லீ) Kat-malli",
    "CO2 Stock Per Tree (ton)": "",
  },
  {
    "Family ": "Bignoniaceae",
    "Scientific Name": "Kigelia Africana",
    "Common Name": "Sausage Tree",
    "Kannnada Name": "(ಆನೆತೊರಡುಕಾಯಿ) Aanethoradu Kaayi",
    "Mahrashtra Name": "(झाड़ फ़ानूस) Jhar Fanoos",
    "Tamil Nadu Name": "",
    "CO2 Stock Per Tree (ton)": "",
  },
];

const DetectedTag = ({ route }) => {
  const [selectedSpecies, setSelectedSpecies] = useState("Select Species");
  const [isClicked, setIsClicked] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [data, setData] = useState(TreeSpecies);
  const [db, setDb] = useState(SQLite.openDatabase("naturemark.db"));
  const [names, setNames] = useState([]);
  const [currentLatitude, setCurrentLatitude] = useState(undefined);
  const [currentLongitude, setCurrentLongitude] = useState(undefined);
  const [currentHeight, setCurrentHeight] = useState(undefined);
  const [currentWidth, setCurrentWidth] = useState(undefined);
  const location = route.params;

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Names (id INTEGER PRIMARY KEY AUTOINCREMENT, species TEXT, latitude REAL, longitude REAL, height REAL, width REAL;)"
      );
    });
  }, [db]);

  const addColumns = () => {
    db.transaction((tx) => {
      tx.executeSql("ALTER TABLE Names ADD COLUMN location TEXT;");

      tx.executeSql("ALTER TABLE Names ADD COLUMN CarbonSequestration REAL;");
    });
  };

  addColumns();

  const calculation = (height, width) => {
    const Tbv = 0.4 * (width * width) * height;
    const AGB = 0.6 * Tbv;
    const BGB = AGB * 0.26;
    const TB = AGB + BGB;
    const C = TB / 2;
    const CS = C * 3.6663;

    return CS;
  };

  const addData = () => {
    const carbonSequestration = calculation(currentHeight, currentWidth);

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Names (species, latitude, longitude, height, width, location, CarbonSequestration) VALUES (? ,?, ?, ?, ?, ?, ?)",
        [
          selectedSpecies,
          currentLatitude,
          currentLongitude,
          currentHeight,
          currentWidth,
          location,
          carbonSequestration,
        ],
        (txObj, resultSet) => {
          let existingData = [...names];
          existingData.push({
            id: resultSet.insertId,
            species: selectedSpecies,
            latitude: currentLatitude,
            longitude: currentLongitude,
            height: currentHeight,
            width: currentWidth,
            location: location,
            CarbonSequestration: carbonSequestration,
          });
          setNames(existingData);
          // Reset your current values if needed
          // setSelectedSpecies(undefined);
          // setCurrentLatitude(undefined);
          // setCurrentLongitude(undefined);
          // setCurrentHeight(undefined);
          // setCurrentWidth(undefined);
        },
        (txObj, error) => console.log(error)
      );
    });
    console.log(names);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to personal storage</Text>;
  }

  const searchRef = useRef();
  const onSearch = (txt) => {
    if (txt !== "") {
      let tempData = data.filter((item) => {
        return (
          item[("Scientific Name", "Common Name")]
            .toLowerCase()
            .indexOf(txt.toLowerCase()) > -1
        );
      });
      setData(tempData);
    } else {
      setData(TreeSpecies);
    }
  };

  return (
    <SafeAreaView className="mt-20 mx-20">
      <View className="p-5 rounded-full bg-[#14594a] border-2 border-black">
        <Text className="text-5xl text-white font-bold text-center">
          Detected Tag
        </Text>
      </View>
      <View className="mt-10 p-5 rounded-lg bg-[#14594a] border-2 border-black">
        <TouchableOpacity
          style={styles.dropdownSelector}
          onPress={() => {
            setIsClicked(!isClicked);
          }}
        >
          <Text className="text-2xl font-semibold text-black">
            {selectedSpecies}
          </Text>
          {isClicked ? (
            <Image
              source={require("../assets/upload.png")}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require("../assets/dropdown.png")}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
        {isClicked ? (
          <View style={styles.dropdownarea}>
            <TextInput
              ref={searchRef}
              className="text-xl"
              placeholder="Search"
              style={styles.searchInput}
              onChangeText={(txt) => {
                onSearch(txt);
              }}
            />
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    className=""
                    style={styles.speciesItem}
                    onPress={() => {
                      setSelectedSpecies(item["Scientific Name"]);
                      onSearch("");
                      setIsClicked(false);
                      searchRef.current.clear();
                    }}
                  >
                    <View className="flex-row justify-between">
                      <Text className="items-center text-lg">
                        {item["Scientific Name"]}
                      </Text>
                      <Text className="text-lg">{item["Common Name"]}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        <View className="flex-row mt-10 ml-12">
          <View className="justify-center">
            <View className="">
              <Button title="Pick Image" onPress={() => pickImage()} />
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 550, height: 400, justifyContent: "center" }}
                />
              )}
            </View>
          </View>

          <View className="flex-1">
            <View className="flex-row justify-between ml-10">
              <View className="flex-1">
                <Text className="text-white font-semibold text-xl">
                  Latitude
                </Text>
                <TextInput
                  className="p-2 text-2xl border-2 border-black text-white"
                  keyboardType="numeric"
                  value={currentLatitude}
                  onChangeText={setCurrentLatitude}
                />
              </View>
              <View className="ml-10 flex-1">
                <Text className="text-white font-semibold text-xl">
                  Longitude
                </Text>
                <TextInput
                  className="p-2 text-2xl border-2 border-black text-white"
                  keyboardType="numeric"
                  value={currentLongitude}
                  onChangeText={setCurrentLongitude}
                />
              </View>
            </View>
            <TouchableOpacity className="h-14 items-center p-2 border-2 bg-green-500 ml-10 mt-8">
              <Text className="items-center text-3xl font-bold text-gray-100">
                Get Location
              </Text>
            </TouchableOpacity>
            <View className="flex-row justify-between mt-8 ml-10">
              <View className="flex-1">
                <Text className="text-white font-semibold text-xl">Height</Text>
                <TextInput
                  className="p-3 text-2xl border-2 border-black text-white"
                  value={currentHeight}
                  onChangeText={setCurrentHeight}
                />
              </View>
              <View className="ml-10 flex-1">
                <Text className="text-white font-semibold text-xl">Width</Text>
                <TextInput
                  className="p-3 text-xl border-2 border-black text-white"
                  value={currentWidth}
                  onChangeText={setCurrentWidth}
                />
              </View>
            </View>
            <View className="flex-row justify-between ml-12 mt-10 mr-5">
              <TouchableOpacity className="h-20 p-3 px-8 border-2 bg-green-500">
                <Text className="items-center text-4xl font-bold text-gray-100">
                  Discard
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 p-3 px-10 border-2 bg-green-500"
                onPress={addData(location)}
              >
                <Text className="text-4xl font-bold text-gray-100">Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetectedTag;
const styles = StyleSheet.create({
  dropdownSelector: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  dropdownarea: {
    width: "90%",
    height: 400,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
  },
  searchInput: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
    paddingLeft: 15,
  },
  speciesItem: {
    width: "90%",
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
  },
});
