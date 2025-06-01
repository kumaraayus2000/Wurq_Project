"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormScreen = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const getColor = (age) => {
    if (age < 30)
        return 'gray';
    if (age <= 50)
        return 'red';
    return 'blue';
};
const FormScreen = () => {
    const [user, setUser] = (0, react_1.useState)({ name: '', lastname: '', age: '', fee: '' });
    return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, padding: 10 } },
        react_1.default.createElement(react_native_1.TextInput, { placeholder: "First Name", onChangeText: v => setUser({ ...user, name: v }) }),
        react_1.default.createElement(react_native_1.TextInput, { placeholder: "Last Name", onChangeText: v => setUser({ ...user, lastname: v }) }),
        react_1.default.createElement(react_native_1.TextInput, { placeholder: "Age", keyboardType: "numeric", onChangeText: v => setUser({ ...user, age: v }) }),
        react_1.default.createElement(react_native_1.TextInput, { placeholder: "Fee", keyboardType: "numeric", onChangeText: v => setUser({ ...user, fee: v }) }),
        react_1.default.createElement(react_native_1.View, { style: { marginTop: 20, backgroundColor: getColor(Number(user.age)), padding: 10 } },
            react_1.default.createElement(react_native_1.Text, null,
                user.name,
                " ",
                user.lastname,
                " - Age: ",
                user.age,
                " - Fee: ",
                user.fee)),
        react_1.default.createElement(react_native_1.Text, { style: { marginTop: 20 } }, "[Chart Placeholder]")));
};
exports.FormScreen = FormScreen;
//# sourceMappingURL=screens.FormScreen.js.map