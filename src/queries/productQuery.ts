import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createProductQuery = async (name: string, category_id: number, price: number, stock: number, description: string, status: string, image: string) => {
    try {
        const res = await prisma.products.create({
            data: {
                name: name,
                category_id: category_id,
                price:  price,
                stock:  stock,
                description: description,
                status: status,
                image:  image,
            },
        });
        return res;
    } catch (err) {
        throw err;
    } 
};

const getProductAllQuery = async () => {
    try {
        const res = await prisma.products.findMany()
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

const updateProductQuery =async (name: string, categoryId: number, price: number, stock: number, description: string, statusId: number, image: string, productId: number) => {
    try {
        const res = await prisma.products.updateMany({
            where: {
                id: productId
            },
            data: {
                name: name,
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
        throw err
    }
}



export = {
    createProductQuery,
    getProductAllQuery,
    findProductQuery,
    updateProductQuery
}