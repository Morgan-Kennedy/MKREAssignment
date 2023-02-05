import { NavigationContainer } from "@react-navigation/native";

import NavigationTheme from "./app/navigation/NavigationTheme";
import FeedNavigator from "./app/navigation/FeedNavigator";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <FeedNavigator />
    </NavigationContainer>
  );
}
