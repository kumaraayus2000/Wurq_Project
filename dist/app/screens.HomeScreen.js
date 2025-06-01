"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeScreen = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const mobx_react_lite_1 = require("mobx-react-lite");
const models_UserStore_1 = require("../app/models.UserStore");
const getColor = (age) => {
    if (age < 30)
        return 'gray';
    if (age <= 50)
        return 'red';
    return 'blue';
};
exports.HomeScreen = (0, mobx_react_lite_1.observer)(() => {
    (0, react_1.useEffect)(() => {
        models_UserStore_1.userStore.fetchUsers();
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, padding: 10 } },
        react_1.default.createElement(react_native_1.Text, null,
            "Total Fees: ",
            models_UserStore_1.userStore.totalFee),
        react_1.default.createElement(react_native_1.FlatList, { data: models_UserStore_1.userStore.users, keyExtractor: item => item.id.toString(), renderItem: ({ item }) => (react_1.default.createElement(react_native_1.View, { style: { backgroundColor: getColor(item.user.age), padding: 10, margin: 5 } },
                react_1.default.createElement(react_native_1.Text, null,
                    item.user.name,
                    " ",
                    item.user.lastname,
                    " - Age: ",
                    item.user.age,
                    " - Fee: ",
                    item.user.fee))) })));
});
//# sourceMappingURL=screens.HomeScreen.js.map