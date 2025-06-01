"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_1 = require("react");
const native_1 = require("@react-navigation/native");
const native_stack_1 = require("@react-navigation/native-stack");
const screens_HomeScreen_1 = require("../app/screens.HomeScreen");
const screens_DetailsScreen_1 = require("../app/screens.DetailsScreen");
const screens_FormScreen_1 = require("../app/screens.FormScreen");
const Stack = (0, native_stack_1.createNativeStackNavigator)();
function App() {
    return (react_1.default.createElement(native_1.NavigationContainer, null,
        react_1.default.createElement(Stack.Navigator, { initialRouteName: "Home", id: undefined },
            react_1.default.createElement(Stack.Screen, { name: "Home", component: screens_HomeScreen_1.HomeScreen }),
            react_1.default.createElement(Stack.Screen, { name: "Details", component: screens_DetailsScreen_1.DetailsScreen }),
            react_1.default.createElement(Stack.Screen, { name: "Form", component: screens_FormScreen_1.FormScreen }))));
}
//# sourceMappingURL=App.js.map