import { View } from "react-native";
import { Login } from "./src/screens/Login";
import { CreateAccount } from "./src/screens/CreateAccount";
import { RecoveryPassword } from "./src/screens/RecoveryPassword";

export function App() {
  return (
    <View>
      <RecoveryPassword />
    </View>
  )
}