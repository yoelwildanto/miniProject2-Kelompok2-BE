import  productQueries = require('../queries/productQuery');

const createProductService =async (productName: string, categoryId: number, price: number, stock: number, description: string, statusId: number, image: string) => {
    try {
        const res = await productQueries.createProductQuery(productName, categoryId, price, stock, description, statusId, image)
        return res
    } catch (err) {
        throw err
    }
}

const getProductAllService =async () => {
    try {
        const res = await productQueries.getProductAllQuery()
        return res;
    } catch (err) {
        throw err;
    }
}

const updateProductService =async (productName: string, categoryId: number, price: number, stock: number, description: string, statusId: number, image: string, productId: number)  => {
    try {
        const existingProduct  = await productQueries.findProductQuery(productId)
        if (!existingProduct) throw new Error("data doesnt exist");
        const res = await productQueries.updateProductQuery(productName, categoryId, price, stock, description, statusId, image, productId)
        return res
    } catch (err) {
        throw err
    }
}

export = {
    createProductService,
    getProductAllService,
    updateProductService
}