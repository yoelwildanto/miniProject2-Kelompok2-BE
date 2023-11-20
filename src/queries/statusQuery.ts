import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getStatusAllQuery = async () => {
    try {
        const res = await prisma.status.findMany()
        return res
    } catch (err) {
        throw err
    }
}

export = {
    getStatusAllQuery
}