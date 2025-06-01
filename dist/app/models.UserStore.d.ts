declare class UserStore {
    users: any[];
    totalFee: number;
    constructor();
    fetchUsers(): Promise<void>;
}
export declare const userStore: UserStore;
export {};
