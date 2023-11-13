import  productQueries = require('../queries/productQuery');

const createProductService =async (name: string, categoryId: number, price: number, quantity: number, description: string, status: string, image: string) => {
    try {
        const res = await productQueries.createProductQuery(name, categoryId, price, quantity, description, status, image)
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

const updateProductService =async (name: string, category_id: number, price: number, quantity: number, description: string, status: string, image: string, productId: number)  => {
    try {
        const existingProduct  = await productQueries.findProductQuery(productId)
        if (!existingProduct) throw new Error("data doesnt exist");
        const res = await productQueries.updateProductQuery(name, category_id, price, quantity, description, status, image, productId)
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