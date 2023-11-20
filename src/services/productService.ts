import  productQueries from'../queries/productQuery';

const createProductService =async (productName: string, categoryId: number, price: number, stock: number, description: string, statusId: number, image: string) => {
    try {
        const res = await productQueries.createProductQuery(productName, categoryId, price, stock, description, statusId, image)
        return res
    } catch (err) {
        throw err
    }
}

const getProductAllService =async (page: number, pageSize: number) => {
    try {
        const res = await productQueries.getProductAllQuery(page, pageSize)
        return res
    } catch (err) {
        throw err
    }
}

const getProductIdService =async (productId: number) => {
    try {
        const res = await productQueries.getProductIdQuery(productId)
        return res
    } catch (err) {
        throw err
    }
}

const getProductPaginationService =async (page: number, pageSize: number, productName: string, categoryId: number, alphaId: number, priceId: number) => {
    try {
        const res = await productQueries.getProductPaginationQuery(page, pageSize, productName, categoryId, alphaId, priceId)

        interface Product {
            productName: string;
            price: any;
        }
        let sortedRes: Product[] = [...res];
        if (alphaId === 0) {
            sortedRes.sort((a, b) => a.productName.localeCompare(b.productName));
        } else if ( alphaId === 1) {
            sortedRes.sort((a, b) => b.productName.localeCompare(a.productName));
        }  
        
        if (priceId === 0) {
            sortedRes.sort((a, b) => a.price.toNumber() - b.price.toNumber());
        } else if (priceId === 1) {
            sortedRes.sort((a, b) => b.price.toNumber() - a.price.toNumber());
        }
        return sortedRes;
    } catch (err) {
        throw err;
    }
}

const updateProductService =async (productId: number, productName: string  | undefined, categoryId: number | undefined, price: number | undefined, stock: number | undefined, description: string | undefined, statusId: number | undefined, image: string )  => {
    try {
        const existingProduct  = await productQueries.findProductQuery(productId)
        if (!existingProduct) throw new Error("data doesnt exist");
        const res = await productQueries.updateProductQuery(productId, productName, categoryId, price, stock, description, statusId, image)
        return res
    } catch (err) {
        throw err
    }
}

const updateProductStatusService =async (productId: number, statusId: number | undefined) => {
    try {
        const existingProduct  = await productQueries.findProductQuery(productId)
        if (!existingProduct) throw new Error("data doesnt exist");
        const res = await productQueries.updateProductStatusQuery(productId, statusId)
        return res
    } catch (err) {
        throw err
    }
}

const deleteProductService =async (productId: number) => {
    try {
        const existingProduct  = await productQueries.findProductQuery(productId)
        if (!existingProduct) throw new Error("data doesnt exist");
        const res = await productQueries.deleteProductQuery(productId)
        return res
    } catch (err) {
        throw err
    }
}

// const searchProductService = async (productName: string, categoryId: number) => {
//     try {
//         const existingProduct = await productQueries.findProductQueryNameCategory(productName, categoryId)
//         if (!existingProduct) throw new Error("data doesnt exist");
//         const res = await productQueries.searchProductQuery(productName, categoryId)
//         return res
//     } catch (err) {
//         throw err
//     }
// }

// const filterProductAlphabetService =async (parsedFilterId: number) => {
//     try {
//         const res = await productQueries.filterProductQuery()
//         interface Product {
//             productName: string;
//         }
//         let sortedRes: Product[] = [];
//         if (parsedFilterId === 0) {
//             sortedRes = [...res].sort((a, b) => a.productName.localeCompare(b.productName));
//         } else if ( parsedFilterId === 1) {
//             sortedRes = [...res].sort((a, b) => b.productName.localeCompare(a.productName));
//         }
//         return sortedRes
//     } catch (err) {
//         throw err
//     }
// }

// const filterProductPriceService =async (parsedFilterId: number) => {
//     try {
//         const res = await productQueries.filterProductQuery()
//         interface Product {
//             price: Decimal;
//         }
//         let sortedRes: Product[] = [];
        
        
//         if (parsedFilterId === 0) {
//             sortedRes = [...res].sort((a, b) => a.price.toNumber() - b.price.toNumber());
//         } else if (parsedFilterId === 1) {
//             sortedRes = [...res].sort((a, b) => b.price.toNumber() - a.price.toNumber());
//         }
//         return sortedRes
//     } catch (err) {
//         throw err
//     }
// }

export = {
    createProductService,
    getProductAllService,
    updateProductService,
    getProductIdService,
    getProductPaginationService,
    updateProductStatusService,
    deleteProductService,
    // searchProductService,
    // filterProductAlphabetService,
    // filterProductPriceService,
    
}