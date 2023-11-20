import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createProductQuery = async (productName: string, categoryId: number, price: number, stock: number, description: string, statusId: number, image: string) => {
    try {
        const res = await prisma.products.create({
            data: {
                productName: productName,
                categoryId: categoryId,
                price:  price,
                stock:  stock,
                description: description,
                statusId: statusId,
                image:  image,
            },
        });
        return res;
    } catch (err) {
        throw err;
    } 
};

const getProductAllQuery = async (page: number, pageSize: number) => {
    try {
        const res = await prisma.products.findMany({
            include: {
                category: true,
                
                
            }
        })
        return res
    } catch (err) {
        throw err
    }
}

const getProductIdQuery = async (productId: number) => {
    try {
        const res = await prisma.products.findUnique({
            where: {
                id: productId
            },
            include: {
                category: true,
                status: true
            }
        })
        return res
    } catch (err) {
        throw err
    }
}

const getProductPaginationQuery = async (page: number, pageSize: number, productName: string, categoryId: number, alphaId: number, priceId: number) => {
    try {
        const skip = (page - 1) * pageSize;
        const take = pageSize

        interface ProductFilter {
            productName?: { contains: string };
            categoryId?: number;
        }
        const filter : ProductFilter = {};
        if (productName) {
            filter.productName = {contains: productName}
        }
        if (categoryId) {
            filter.categoryId = categoryId
        }
        const res = await prisma.products.findMany({
            skip,
            take,
            where: filter
        })
        return res
    } catch (err) {
        throw err
    }
}

const findProductQuery = async (productId:number)  => {
    try {
        const res = await prisma.products.findUnique({
            where: {
                id: productId,
              },
        })
        return res
    } catch (err) {
        throw err
    }
}

const findProductCategoryQuery = async (categoryId:number)  => {
    try {
        const res = await prisma.products.findFirst({
            where: {
                categoryId: categoryId,
              },
        })
        return res
    } catch (err) {
        throw err
    }
}

const updateProductQuery =async (productId: number, productName: string | undefined,
    categoryId: number | undefined,
    price: number | undefined,
    stock: number | undefined,
    description: string | undefined,
    statusId: number | undefined,
    image: string | undefined,) => {
        
    try {
        const data: Record<string, any> = {};
            if (productName !== undefined) data.productName = productName;
            if (categoryId !== undefined && !isNaN(categoryId)) data.categoryId = categoryId;
            if (price !== undefined && !isNaN(price)) data.price = price;
            if (stock !== undefined && !isNaN(stock)) data.stock = stock;
            if (description !== undefined) data.description = description;
            if (statusId !== undefined && !isNaN(statusId)) data.statusId = statusId;
            if (image !== undefined) data.image = image;
        
        const res = await prisma.products.updateMany({
            where: {
                id: productId
            },
            data: data
        });
        return res;
    } catch (err) {
        throw err
    }
}

const updateProductStatusQuery = async (productId: number, statusId: number | undefined) => {
    try {
        const data: Record<string, any> = {};
        if (statusId !== undefined && !isNaN(statusId)) data.statusId = statusId;
        const res = await prisma.products.update({
            where: {
                id: productId
            },
            data: data
        })
        return res
    } catch (err) {
        throw err
    }
}

const deleteProductQuery = async (productId: number) => {
    try {
        const res = await prisma.products.delete({
            where: {
                id: productId
            }
        })
        return res
    } catch (err) {
        throw err
    }
}


// const findProductQueryNameCategory = async (productName: string, categoryId:number)  => {
//     try {
//         interface ProductFilter {
//             productName?: { contains: string };
//             categoryId?: number;
//         }
//         const filter : ProductFilter = {};
//         if (productName) {
//             filter.productName = {contains: productName}
//         }
//         if (categoryId) {
//             filter.categoryId = categoryId
//         }
//         const res = await prisma.products.findFirst({
//             where: filter
//         })
//         return res
//     } catch (err) {
//         throw err
//     }
// }

// const searchProductQuery = async (productName: string, categoryId: number) => {
//     try {
//         interface ProductFilter {
//             productName?: { contains: string };
//             categoryId?: number;
//         }
//         const filter : ProductFilter = {};
//         if (productName) {
//             filter.productName = {contains: productName}
//         }
//         if (categoryId) {
//             filter.categoryId = categoryId
//         }
      
//         const res = await prisma.products.findMany({
//             where: filter
//         })
//         return res
//     } catch (err) {
//         throw err
//     }
// }

// const filterProductQuery = async () => {
//     try {
//         const res = await prisma.products.findMany()
//         return res
//     } catch (err) {
//         throw err
//     }
// }

export = {
    createProductQuery,
    getProductAllQuery,
    getProductIdQuery,
    getProductPaginationQuery,
    findProductQuery,
    findProductCategoryQuery,
    updateProductQuery,
    updateProductStatusQuery,
    deleteProductQuery,
    // findProductQueryNameCategory,
    // searchProductQuery,
    // filterProductQuery,
}