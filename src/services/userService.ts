import userQueries = require("../queries/userQuery");

const createUserService = async (
    username: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    avatar: string,
    roleId: number
) => {
    try {
        const res = await userQueries.createUserQuery(
            username,
            email,
            password,
            phoneNumber,
            address,
            avatar,
            roleId
        );
        return res;
    } catch (err) {
        throw err;
    }
};
const getUserAllService = async () => {
    try {
        const res = await userQueries.getAllUsersQuery();
        return res;
    } catch (err) {
        throw err;
    }
};

const updateUserService = async (
    username: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    avatar: string,
    roleId: number,
    userId: number
) => {
    try {
        const existingUser = await userQueries.findUserQuery
        (userId);
        if (!existingUser) throw new Error("data doesn't exist");
        const res = await userQueries.updateUserQuery(
            username,
            email,
            password,
            phoneNumber,
            address,
            avatar,
            roleId,
            userId
        );
        return res;
    } catch (err) {
        throw err;
    }
};

export = {
    createUserService,
    getUserAllService,
    updateUserService,
};