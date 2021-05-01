import React from "react";
import LoginSignUpScreen from "./screens/loginSignUpScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppTabNavigator } from "./components/appTabNavigator";

export default function App() {
  return <AppContainer />;
}

const switchNaviagtor = createSwitchNavigator({
  LoginSignUpScreen: { screen: LoginSignUpScreen },
  BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNaviagtor);