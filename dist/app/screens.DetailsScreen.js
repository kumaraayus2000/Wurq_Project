"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsScreen = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const mobx_react_lite_1 = require("mobx-react-lite");
const models_UserStore_1 = require("../app/models.UserStore");
exports.DetailsScreen = (0, mobx_react_lite_1.observer)(() => {
    const [seconds, setSeconds] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(interval);
    }, []);
    (0, react_1.useEffect)(() => {
        new Promise(resolve => {
            let count = 0;
            const i = setInterval(() => {
                count++;
                if (count === 3) {
                    clearInterval(i);
                    resolve(true);
                }
            }, 1000);
        });
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, padding: 10 } },
        react_1.default.createElement(react_native_1.Text, null,
            "Timer: ",
            seconds,
            "s"),
        react_1.default.createElement(react_native_1.Text, null, JSON.stringify(models_UserStore_1.userStore.users, null, 2))));
});
//# sourceMappingURL=screens.DetailsScreen.js.map