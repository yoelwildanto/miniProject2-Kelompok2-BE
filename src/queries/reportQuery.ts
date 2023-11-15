import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getTransactionGraphQuery = async () => {
    try {
        const res = await prisma.transactions.findMany({
            include: {
                transaction_details: true
            }
        });
        return res;
    } catch (err) {
        throw err;
    }
}

export = { 
    getTransactionGraphQuery
}