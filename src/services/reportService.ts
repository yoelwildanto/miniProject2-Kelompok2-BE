import reportQuery from "../queries/reportQuery";

const getTransactionGraphService = async () => {
    try {
        const res = await reportQuery.getTransactionGraphQuery();
        return res;
    } catch (err) {
        throw err
    }
}

export = {
    getTransactionGraphService
}