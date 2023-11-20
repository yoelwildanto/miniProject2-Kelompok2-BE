import statusQuery from "../queries/statusQuery";

const getStatusAllService = async () => {
    try {
        const res = await statusQuery.getStatusAllQuery()
        return res
    } catch (err) {
       throw err 
    }
}

export = {
    getStatusAllService
}