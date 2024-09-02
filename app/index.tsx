import { View } from "react-native";
import Login from './../components/Login';
import { auth } from './../configs/FirebaseConfig';
import { Redirect, useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('C:\Users\arul8\Downloads\my-app\app\(tabs)\mytrip.jsx');
    }
  }, [user]);

  return (
    <View style={{ flex: 1 }}>
      {user ? null : <Login />}
    </View>
  );
}
