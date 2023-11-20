import reportQuery from "../queries/reportQuery";

const getTransactionGraphService = async () => {
    try {
        const res = await reportQuery.getTransactionGraphQuery();
        return res;
    } catch (err) {
        throw err
    }
}

const getTransactionAllService =async (page: number, pageSize: number, startDate: string, endDate: string) => {
    try {
        const res = await reportQuery.getTransactionAllQuery(page, pageSize, startDate, endDate)
        return res
    } catch (err) {
       throw err 
    }
}

const getTransactionDetailService =async (transactionId:number) => {
    try {
        const res = await reportQuery.getTransactionDetailQuery(transactionId)
        return res
    } catch (err) {
        throw err
    }
}

const getBestSellerTransactionService =async () => {
    try {
        const res = await reportQuery.getBestSellerTransaction()
        return res
    } catch (err) {
        throw err
    }
}

const getUserAllService =async (page: number, pageSize: number, username: string,) => {
    try {
        const res = await reportQuery.getUserAllQuery(page, pageSize, username)
        return res
    } catch (err) {
        throw err
    }
}

const getUserIdService =async (userId: number, page: number, pageSize: number, startDate: string, endDate: string) => {
    try {
        const res = await reportQuery.getUserIdQuery(userId, page, pageSize, startDate, endDate)
        return res
    } catch (err) {
       throw err 
    }
}


export = {
    getTransactionGraphService,
    getTransactionAllService,
    getTransactionDetailService,
    getBestSellerTransactionService,
    getUserAllService,
    getUserIdService
}