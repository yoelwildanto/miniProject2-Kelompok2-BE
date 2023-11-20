import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface TransactionGroupByResult {
    date: string;
    _avg_totalPrice: number; 
}

const getTransactionGraphQuery = async () : Promise<TransactionGroupByResult[]> => {
    try {
        const res = await prisma.$queryRaw<TransactionGroupByResult[]>`
            SELECT DATE_FORMAT(date, '%Y-%m-%d') AS date, AVG(totalPrice) AS _avg_totalPrice
            FROM transactions
            GROUP BY DATE_FORMAT(date, '%Y-%m-%d')
        `;
        return res;
    } catch (err) {
        throw err;
    }
}

// const getTransactionAllQuery =async (startDate?: string, endDate?: string) => {
//     try {

//         const whereClause: {
//             date?: {
//                 gte?: Date;
//                 lte?: Date;
//             };
//         } = {};
        
//         if (startDate && endDate) {
//             whereClause.date = {
//                 gte: new Date(startDate),
//                 lte: new Date(endDate),
//             };
//         }

//         const res = await prisma.transactions.findMany({
//             where: whereClause,
//             include: {
//                 user: true,
//                 transaction_details: {
//                     include: {
//                         product: true
//                     }
//                 },
//             }
//         })
//         return res
//     } catch (err) {
//         throw err
//     }
// }

const getTransactionDetailQuery =async (transactionId:number) => {
    try {
        const res = await prisma.transaction_Details.findMany({
            where: {
                transactionId: transactionId
            },
            include: {
                product: true
            }
        })
        return res
    } catch (err) {
        throw err
    }
}

const getBestSellerTransaction =async () => {
    try {
        const res = await prisma.transaction_Details.groupBy({
            by: ['productId'],
            _sum: {
                quantity: true,
            },
        });

        // Sort the result to get the best-selling product
        const sortedResult = res.sort((a, b) => (b._sum?.quantity ?? 0) - (a._sum?.quantity ?? 0));

        const bestSellerProductIds: number[] = sortedResult.map((item) => item.productId);

        // Fetch details of all best-selling products in the sorted order
        const bestSellerProducts = await prisma.products.findMany({
            where: {
                id: {
                    in: bestSellerProductIds,
                },
            },
            orderBy: {
                id: 'asc', // Order by ID in descending order
            },
            include: {
                transaction_details: {
                    include: {
                        transaction: true
                    }
                }, // Include the transaction_details relationship
            },
        });

        return bestSellerProducts;
    } catch (err) {
        throw err
    }
}

export = { 
    getTransactionGraphQuery,
    // getTransactionAllQuery,
    getTransactionDetailQuery,
    getBestSellerTransaction,
}