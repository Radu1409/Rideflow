import RideLayout from "@/components/RideLayout";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { MarkerData } from "@/types/type";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { icons } from "@/constants";
import { useLocationStore } from "@/app/store";
import CustomButton from "@/components/CustomButton";
import { formatArrivalTime } from "@/lib/utils";

const ArriveRide = () => {
  const { userAddress, destinationAddress } = useLocationStore();
  const { driverDetails } = useLocalSearchParams();
  const [driverInfo, setDriverInfo] = useState<MarkerData | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDriverData = async () => {
      if (driverDetails) {
        try {
          const decodedString = decodeURIComponent(driverDetails as string);
          const parsedData: MarkerData = JSON.parse(decodedString);
          setDriverInfo(parsedData);
        } catch (error) {
          console.error("Failed to parse driver details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDriverData().then(() => {});
  }, [driverDetails]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!driverInfo) {
    return <Text>No driver data available.</Text>;
  }

  return (
    <RideLayout title="Choose a Driver" snapPoints={["15%", "65%", "85%"]}>
      <View className="border-b border-general-700 py-3">
        <Text className="text-2xl font-JakartaSemiBold mb-3">
          Arriving in
          <Text className="text-green-600">
            {" "}
            {formatArrivalTime(parseFloat(String(driverInfo.time!)))}
          </Text>
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between bg-general-600 rounded-xl mt-6 px-2">
        <View className="flex flex-col items-center justify-center m-5">
          <Image
            source={{ uri: driverInfo?.profile_image_url }}
            className="w-28 h-28 rounded-full"
          />
          <Text className="text-lg font-JakartaSemiBold mt-2">
            {driverInfo?.title}
          </Text>
        </View>
        <Image
          source={{ uri: driverInfo?.car_image_url }}
          style={{
            width: 180,
            height: 120,
          }}
        />
      </View>
      <View className="flex flex-col w-full items-start justify-center mt-5">
        <View className="flex flex-row items-center justify-start mt-3 border-t border-b border-general-700 w-full py-3">
          <Image source={icons.to} className="w-6 h-6" />
          <Text className="text-lg font-JakartaMedium ml-2">{userAddress}</Text>
        </View>

        <View className="flex flex-row items-center justify-start border-b border-general-700 w-full py-3">
          <Image source={icons.point} className="w-6 h-6" />
          <Text className="text-lg font-JakartaMedium ml-2">
            {destinationAddress}
          </Text>
        </View>
      </View>
      <CustomButton
        title="Back Home"
        onPress={() => {
          router.push("/(root)/(tabs)/home");
        }}
        className="mt-5"
      />
    </RideLayout>
  );
};

export default ArriveRide;
