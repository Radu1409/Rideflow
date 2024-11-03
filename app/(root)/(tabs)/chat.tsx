import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons, images } from "@/constants";
import { router } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Chat = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut().then(() => {});

    router.replace("/(auth)/sign-in");
  };

  return (
    <SafeAreaView className="flex-1 bg-general-500 p-5">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-row items-center justify-between my-5">
          <Text className="text-2xl font-JakartaBold">Chat List</Text>
          <TouchableOpacity
            onPress={handleSignOut}
            className="justify-center items-center w-10 h-10 rounded-full bg-white"
          >
            <Image source={icons.out} className="w-4 h-4" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 h-fit flex justify-center items-center">
          <Image
            source={images.message}
            alt="message"
            className="w-full h-40"
            resizeMode="contain"
          />
          <Text className="text-3xl font-JakartaBold mt-3">
            No Messages Yet
          </Text>
          <Text className="text-base mt-2 text-center px-7">
            Start a conversation with your friends and family
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
