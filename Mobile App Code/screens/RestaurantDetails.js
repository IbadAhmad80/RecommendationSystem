import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  Linking,
  TouchableOpacity,
  Modal,
  AsyncStorage,
  Alert,
  Button,
} from "react-native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import ImageOverlay from "react-native-image-overlay";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Stars from "../components/restaurantDetails/Stars";
import GetStars from "../components/restaurantDetails/GetStars";
import UserReviews from "../components/restaurantDetails/UserReviews";
import axios from "axios";
import LoadersAb from "../components/home/LoadersAb";

export default function RestaurantDetails({ route }) {
  const [isLoading, setIsLoading] = useState(true);
  const { listing, email, URL, uid, name, createdAt, imageURL } = route.params;

  const title = "Farmhouse Kitchen Thai";

  const isAlreadyReviewed = () => {
    const places = place?.reviews.some((review) => {
      return review.id === uid;
    });

    setAlreadyreview(places);
  };

  const updateRatingReviews = async () => {
    try {
      if (userRating > 0 && usertext != "" && alreadyreview === false) {
        axios

          .post(`${URL}/api/addReview`, {
            userID: email,
            longitude: place?.lng,
            latitude: place?.lat,
            category: place?.type,
            id: place?.id,
            review: {
              id: uid,
              rating: userRating,
              text: usertext,
              user: {
                name: name,
                image_url: imageURL || null,

                id: uid,
              },
            },
          })
          .then((res) => {
            const payload = {
              lat: place?.lat,
              lng: place?.lng,
              id: place?.id,
              business: place?.type,
            };
            if (res.status === 200) {
              axios
                .post(`${URL}/api/updateRating`, payload)
                .then(({ data }) => {
                  alert("Review added successfully");

                  setAlreadyreview(true);
                  setUserRating(0);
                  onChangeUsertext("");

                  setPlace(data);
                });
            }
          });
      } else {
        alert("Can't give reviews more than one against same place");
      }
    } catch (error) {
      alert(error);
    }
  };

  const placeAlreadyInFav = async () => {
    try {
      axios
        .post(`${URL}/api/favPlaceExist`, {
          userID: email,
          favPlaces: [place],
        })
        .then((res) => {
          if (res.status === 201) {
            setFav(1);
          } else {
            setFav(0);
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  const SetAlreadyReviewListingData = async () => {
    try {
      axios
        .get(
          `${URL}/api/fetch?lat=${listing?.lat}&lng=${listing?.lng}&business=${listing?.type}&id=${listing?.id}`
        )
        .then(({ data }) => {
          setPlace(data);
          setIsLoading(false);

          const places = data?.reviews.some((review) => {
            return review.id === uid;
          });

          setAlreadyreview(places);
        })
        .then();
    } catch (error) {
      alert(error);
    }
  };

  //   useEffect(()=>{axios
  //     .get(
  //       `/api/fetch?lat=${state?.place.lat}&lng=${state?.place.lng}&business=${state?.place.type}&id=${state?.place.id}`
  //     )
  //     .then(({ data }) => {
  //       setSinglePlace(data);
  //     });
  // }, []);
  useEffect(() => {
    SetAlreadyReviewListingData();

    placeAlreadyInFav();
  }, [route]);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,

    Montserrat_900Black,
  });

  const [fav, setFav] = useState(0);
  const [place, setPlace] = useState(listing);
  const [userRating, setUserRating] = useState(0);
  const [usertext, onChangeUsertext] = useState("");
  const [alreadyreview, setAlreadyreview] = useState(true);

  const [modelOpen, setModelOpen] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (isLoading) {
      return <LoadersAb />;
    } else {
      return (
        <View>
          {/**imagge bacgrod */}
          <Modal visible={modelOpen} animationType="slide" transparent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Feather
                  name="x"
                  color={"black"}
                  size={24}
                  onPress={() => {
                    setModelOpen(false);
                  }}
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
                <Text style={styles.modalText}>
                  Phone No : {place.display_phone}
                </Text>

                <Text style={styles.modalText}>
                  Address : {place.location?.display_address[0]},{" "}
                  {place.location?.display_address[1]}
                </Text>
                <Text style={styles.modalText}>
                  City : {place.location?.city}
                </Text>

                <Text style={styles.modalText}>
                  City : {place.location?.country}
                </Text>
              </View>
            </View>
          </Modal>
          <ImageOverlay
            source={{
              uri: place.image_url,
            }}
            height={250}
            overlayColor="black"
            overlayAlpha={0.6}
            contentPosition="bottom"
            containerStyle={{
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <View style={{ marginLeft: 20, marginBottom:import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  Linking,
  TouchableOpacity,
  Modal,
  AsyncStorage,
  Alert,
  Button,
} from "react-native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import ImageOverlay from "react-native-image-overlay";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Stars from "../components/restaurantDetails/Stars";
import GetStars from "../components/restaurantDetails/GetStars";
import UserReviews from "../components/restaurantDetails/UserReviews";
import axios from "axios";
import LoadersAb from "../components/home/LoadersAb";

export default function RestaurantDetails({ route }) {
  const [isLoading, setIsLoading] = useState(true);
  const { listing, email, URL, uid, name, createdAt, imageURL } = route.params;

  const title = "Farmhouse Kitchen Thai";

  const isAlreadyReviewed = () => {
    const places = place?.reviews.some((review) => {
      return review.id === uid;
    });

    setAlreadyreview(places);
  };

  const updateRatingReviews = async () => {
    try {
      if (userRating > 0 && usertext != "" && alreadyreview === false) {
        axios

          .post(`${URL}/api/addReview`, {
            userID: email,
            longitude: place?.lng,
            latitude: place?.lat,
            category: place?.type,
            id: place?.id,
            review: {
              id: uid,
              rating: userRating,
              text: usertext,
              user: {
                name: name,
                image_url: imageURL || null,

                id: uid,
              },
            },
          })
          .then((res) => {
            const payload = {
              lat: place?.lat,
              lng: place?.lng,
              id: place?.id,
              business: place?.type,
            };
            if (res.status === 200) {
              axios
                .post(`${URL}/api/updateRating`, payload)
                .then(({ data }) => {
                  alert("Review added successfully");

                  setAlreadyreview(true);
                  setUserRating(0);
                  onChangeUsertext("");

                  setPlace(data);
                });
            }
          });
      } else {
        alert("Can't give reviews more than one against same place");
      }
    } catch (error) {
      alert(error);
    }
  };

  const placeAlreadyInFav = async () => {
    try {
      axios
        .post(`${URL}/api/favPlaceExist`, {
          userID: email,
          favPlaces: [place],
        })
        .then((res) => {
          if (res.status === 201) {
            setFav(1);
          } else {
            setFav(0);
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  const SetAlreadyReviewListingData = async () => {
    try {
      axios
        .get(
          `${URL}/api/fetch?lat=${listing?.lat}&lng=${listing?.lng}&business=${listing?.type}&id=${listing?.id}`
        )
        .then(({ data }) => {
          setPlace(data);
          setIsLoading(false);

          const places = data?.reviews.some((review) => {
            return review.id === uid;
          });

          setAlreadyreview(places);
        })
        .then();
    } catch (error) {
      alert(error);
    }
  };

  //   useEffect(()=>{axios
  //     .get(
  //       `/api/fetch?lat=${state?.place.lat}&lng=${state?.place.lng}&business=${state?.place.type}&id=${state?.place.id}`
  //     )
  //     .then(({ data }) => {
  //       setSinglePlace(data);
  //     });
  // }, []);
  useEffect(() => {
    SetAlreadyReviewListingData();

    placeAlreadyInFav();
  }, [route]);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,

    Montserrat_900Black,
  });

  const [fav, setFav] = useState(0);
  const [place, setPlace] = useState(listing);
  const [userRating, setUserRating] = useState(0);
  const [usertext, onChangeUsertext] = useState("");
  const [alreadyreview, setAlreadyreview] = useState(true);

  const [modelOpen, setModelOpen] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (isLoading) {
      return <LoadersAb />;
    } else {
      return (
        <View>
          {/**imagge bacgrod */}
          <Modal visible={modelOpen} animationType="slide" transparent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Feather
                  name="x"
                  color={"black"}
                  size={24}
                  onPress={() => {
                    setModelOpen(false);
                  }}
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
                <Text style={styles.modalText}>
                  Phone No : {place.display_phone}
                </Text>

                <Text style={styles.modalText}>
                  Address : {place.location?.display_address[0]},{" "}
                  {place.location?.display_address[1]}
                </Text>
                <Text style={styles.modalText}>
                  City : {place.location?.city}
                </Text>

                <Text style={styles.modalText}>
                  City : {place.location?.country}
                </Text>
              </View>
            </View>
          </Modal>
          <ImageOverlay
            source={{
              uri: place.image_url,
            }}
            height={250}
            overlayColor="black"
            overlayAlpha={0.6}
            contentPosition="bottom"
            containerStyle={{
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <View style={{ marginLeft: 20, marginBottom: 20, maxWidth: 300 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 25,
                  fontWeight: "900",
                  fontFamily: "Montserrat_900Black",
                }}
                numberOfLines={1}
              >
                {place.name}
              </Text>
              <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <Stars star_no={place.system_rating} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    marginLeft: 7,
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  {place.review_count}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={async () => {
                try {
                  axios
                    .post(`${URL}/api/addFavPlace`, {
                      userID: email,
                      favPlaces: [place],
                    })
                    .then(({ status, data }) => {
                      if (status === 200) {
                        alert("Place added to Favourites");
                        setFav(1);
                      } else if (status === 201) {
                        alert("Place already exist in your Favourite List");
                      }
                    });
                } catch (error) {
                  Alert(err);
                }
              }}
              style={{ position: "absolute", right: 20, bottom: 40 }}
            >
              {fav === 0 && (
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={35}
                  color="#fff"
                />
              )}

              {fav === 1 && (
                <MaterialCommunityIcons name="heart" size={35} color="red" />
              )}
            </TouchableOpacity>
          </ImageOverlay>

          {/**----------------------*/}

          {/* direction */}

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ margin: 22, flex: 1 }}>
              <Text
                style={{
                  marginBottom: 5,
                  fontWeight: "600",
                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                {place.system_rating || place.rating} ⭐ ({place.review_count}+)
              </Text>
              <Text
                style={{
                  fontWeight: "600",
                  fontFamily: "Montserrat_600SemiBold",
                  marginBottom: 15,
                }}
              >
                Open untill 4:00 AM - 11:00 AM
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingBottom: 10,
                  borderBottomColor: "#6e6969",
                  paddingHorizontal: 20,
                  marginTop: 10,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: "#D3D3D3",
                      padding: 10,
                      borderRadius: 20,
                    }}
                  >
                    <Feather
                      name="phone-call"
                      size={25}
                      color="red"
                      onPress={() => {
                        setModelOpen(true);
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      marginTop: 5,
                      color: "#6e6969",
                      fontWeight: "600",
                      fontFamily: "Montserrat_600SemiBold",
                    }}
                  >
                    Call
                  </Text>
                </View>

                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: "#D3D3D3",
                      padding: 10,
                      borderRadius: 20,
                    }}
                  >
                    <OpenURLButton url={place.url}></OpenURLButton>
                  </View>
                  <Text
                    style={{
                      marginTop: 5,
                      color: "#6e6969",
                      fontWeight: "600",
                      fontFamily: "Montserrat_600SemiBold",
                    }}
                  >
                    Website
                  </Text>
                </View>
              </View>
            </View>
            {/**direction --------------------------------------------------- */}

            <View
              style={{ width: "100%", height: 15, backgroundColor: "#D3D3D3" }}
            ></View>
            {/*------------------------------------------------------------------------------------ */}
            {/*user reviews */}
            <View style={{ marginTop: 1, marginBottom: 20, flex: 1 }}>
              <View style={{ marginVertical: 5, alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Recommended Reviews
                </Text>
              </View>
              <View
                style={{
                  margin: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 15,

                  borderBottomWidth: 1,
                  borderBottomColor: "#cccccc",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Overall Ratings
                </Text>
                <Stars star_no={place.system_rating || place.rating} />
              </View>

              <UserReviews Reviews={place.reviews} />
            </View>

            {/*------------------------------------------------------------------------------------ */}

            {/* get recommendation */}
            <View style={{ flex: 1 }}>
              <View
                style={{
                  width: "100%",
                  height: 15,
                  backgroundColor: "#D3D3D3",
                }}
              ></View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",

                    fontSize: 18,
                    marginVertical: 8,
                    paddingHorizontal: 5,
                    textAlign: "center",
                  }}
                >
                  Your feedback can help people decide{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",
                    marginBottom: 10,
                    color: "#6e6969",
                  }}
                >
                  Start a reviews
                </Text>
                <GetStars
                  setUserRating={setUserRating}
                  userRating={userRating}
                />

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#D3D3D3",
                    borderRadius: 20,
                    margin: 10,
                    width: "80%",
                    paddingHorizontal: 10,
                  }}
                >
                  <TextInput
                    style={{
                      fontWeight: "600",
                      fontFamily: "Montserrat_600SemiBold",
                    }}
                    multiline
                    numberOfLines={5}
                    padding={4}
                    placeholder="Tap to review ..."
                    onChangeText={onChangeUsertext}
                    value={usertext}
                    placeholderTextColor="#666"
                    editable
                    maxLength={240}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    updateRatingReviews();
                  }}
                  style={{
                    backgroundColor: "red",
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                    width: "70%",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      textTransform: "uppercase",
                      fontWeight: "600",

                      fontFamily: "Montserrat_600SemiBold",
                    }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#6e6969",
                    fontWeight: "bold",
                    fontSize: 13,
                    marginTop: 8,
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Your feedback can help people decide{" "}
                </Text>
              </View>
            </View>

            {/**------------------------========-====-==========-=========-===========-======----------- */}
            <View style={{ flex: 1 }}>
              <View
                style={{ width: "100%", height: 0, backgroundColor: "#D3D3D3" }}
              ></View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontSize: 18,
                    marginVertical: 8,
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Your feedback can help people to decide
                </Text>
                <Text
                  style={{
                    marginBottom: 10,
                    color: "#6e6969",
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  Start a review
                </Text>
                <GetStars />

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#D3D3D3",
                    borderRadius: 20,
                    margin: 10,
                    paddingLeft: 10,
                    width: "80%",
                  }}
                >
                  <TextInput
                    multiline
                    numberOfLines={4}
                    padding={4}
                    p
                    placeholder="    Tap to review ..."
                    placeholderTextColor="#666"
                    editable
                    maxLength={40}
                  />
                </View>

                <Text
                  style={{
                    color: "#6e6969",
                    fontWeight: "600",
                    fontFamily: "Montserrat_600SemiBold",

                    fontSize: 13,
                    marginTop: 8,
                  }}
                >
                  Your feedback can help people decide{" "}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",

    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
});

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return (
    <MaterialCommunityIcons
      name="page-next-outline"
      size={30}
      color="red"
      onPress={handlePress}
    />
  );
};
