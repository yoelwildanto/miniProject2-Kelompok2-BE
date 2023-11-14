import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUserQuery = async (
    username: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    avatar: string,
    roleId: number
) => {
    try {
        const res = await prisma.users.create({
            data: {
                username: username,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                address: address,
                avatar: avatar,
                roleId: roleId,
            },
        });
        return res;
    } catch(err) {
        throw err;
    }
};

const getAllUsersQuery = async () => {
    try {
    const res = await prisma.users.findMany();
    return res;
} catch (err) {
    throw err;
  }
};

const findUserQuery = async (userId: number) => {
    try {
        const res = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

const updateUserQuery = async (
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
        const res = await prisma.users.updateMany({
            where: {
                id: userId,
            },
            data: {
                username: username,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                address: address,
                avatar: avatar,
                roleId: roleId,
            },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export = {
    createUserQuery,
    getAllUsersQuery,
    findUserQuery,
    updateUserQuery
}

