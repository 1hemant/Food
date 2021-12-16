import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ScreenSearch from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: ScreenSearch,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);
export default createAppContainer(navigator);
