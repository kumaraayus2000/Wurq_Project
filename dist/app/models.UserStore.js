"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userStore = void 0;
const mobx_1 = require("mobx");
class UserStore {
    constructor() {
        this.users = [];
        this.totalFee = 0;
        (0, mobx_1.makeAutoObservable)(this);
    }
    async fetchUsers() {
        const res = await fetch("http://localhost:3000/");
        const data = JSON.parse(await res.text());
        this.users = data.filter(u => u.user.age >= 0);
        this.totalFee = this.users.reduce((sum, u) => sum + u.user.fee, 0);
    }
}
exports.userStore = new UserStore();
//# sourceMappingURL=models.UserStore.js.map