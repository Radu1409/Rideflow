import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RideCard from "@/components/RideCard";
import { images } from "@/constants";
import { useUser } from "@clerk/clerk-expo";
import { useFetch } from "@/lib/fetch";
import { Ride } from "@/types/type";
import { useState } from "react";
import arrowDownIcon from "@/assets/icons/arrow-down.png";

const Rides = () => {
  const { user } = useUser();
  const { data: recentRides, loading } = useFetch<Ride[]>(
    `/(api)/ride/${user?.id}`,
  );
  const [isAscending, setIsAscending] = useState(false);

  const sortedRides = recentRides
    ? [...recentRides].sort((a, b) => {
        if (isAscending) {
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        } else {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        }
      })
    : [];

  return (
    <SafeAreaView>
      <FlatList
        data={sortedRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="flex flex-row items-center justify-between">
            <Text className="text-2xl font-JakartaBold my-5">All Rides</Text>
            <TouchableOpacity
              onPress={() => setIsAscending(!isAscending)}
              style={{
                padding: 10,
                backgroundColor: "transparent",
                borderRadius: 5,
                alignItems: "center",
                marginVertical: 10,
              }}
              activeOpacity={0.4}
            >
              <View className="flex flex-row items-center justify-between">
                <Text
                  style={{
                    color: "#007BFF",
                    fontWeight: "bold",
                    marginRight: 8,
                  }}
                >
                  {isAscending ? "Ascending" : "Descending"}
                </Text>
                <Image
                  source={arrowDownIcon}
                  style={{ width: 16, height: 16, tintColor: "#007BFF" }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Rides;
