import { FlatList, View } from "react-native";
import RideLayout from "@/components/RideLayout";
import DriverCard from "@/components/DriverCard";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useDriverStore } from "@/app/store";
import { MarkerData } from "@/types/type";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();

  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(Number(item.id)!)}
            item={item}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => {
                if (selectedDriver) {
                  const driverInfo: MarkerData | null =
                    selectedDriver !== null
                      ? drivers[selectedDriver - 1]
                      : null;
                  const driverInfoString = JSON.stringify(driverInfo);
                  router.push(
                    `/(root)/book-ride?driverInfo=${encodeURIComponent(driverInfoString)}`,
                  );
                } else {
                  console.warn("No driver selected.");
                }
              }}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
