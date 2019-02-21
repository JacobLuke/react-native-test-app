/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry, PushNotificationIOS } from "react-native";
import App from "./containers/App";
import { name as appName } from "./app.json";

import PushNotification from "react-native-push-notification";
PushNotification.configure({
  onNotification(notification) {
    console.log(notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  }
});

AppRegistry.registerComponent(appName, () => App);
