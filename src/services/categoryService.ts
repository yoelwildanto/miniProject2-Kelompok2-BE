import categoryQuery from "../queries/categoryQuery";

const createCategoryService = async (categoryName: string, image: string) => {
  try {
    const res = await categoryQuery.createCategoryQuery(categoryName, image);
    return res;
  } catch (err) {
    throw err;
  }
};

const getCategoryAllService = async () => {
  try {
    const res = await categoryQuery.getCategoryAllQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const updateCategoryService = async (
  categoryName: string,
  image: string,
  categoryId: number
) => {
  try {
    const existingCategory = await categoryQuery.findCategoryQuery(categoryId);
    if (!existingCategory) throw new Error("data doesn't exist");
    const res = await categoryQuery.updateCategoryQuery(
      categoryName,
      image,
      categoryId
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export = {
  createCategoryService,
  getCategoryAllService,
  updateCategoryService,
};
