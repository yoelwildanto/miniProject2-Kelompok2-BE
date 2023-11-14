import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategoryQuery = async (categoryName: string, image: string) => {
  try {
    const res = await prisma.categories.create({
      data: {
        categoryName: categoryName,
        image: image,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getCategoryAllQuery = async () => {
  try {
    const res = await prisma.categories.findMany();
    return res;
  } catch (err) {
    throw err;
  }
};

const findCategoryQuery = async (categoryId: number) => {
  try {
    const res = await prisma.categories.findUnique({
      where: {
        id: categoryId,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const updateCategoryQuery = async (
  categoryName: string,
  image: string,
  categoryId: number
) => {
  try {
    const res = await prisma.categories.updateMany({
      where: {
        id: categoryId,
      },
      data: {
        categoryName: categoryName,
        image: image,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export = {
  createCategoryQuery,
  getCategoryAllQuery,
  findCategoryQuery,
  updateCategoryQuery,
};
