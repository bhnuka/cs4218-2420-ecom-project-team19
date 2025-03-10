import categoryModel from "./categoryModel";
import Category from "./categoryModel";
import mongoose from "mongoose";

jest.mock("./categoryModel");

const validMockCategory = {
    _id: "1",
    name: "category1",
    slug: "category1"
};

const validMockCategory2 = {
    _id: "2",
    name: "category2",
    slug: "category2"
}

const validMockCategory3 = {
    _id: "3",
    name: "category3",
    slug: "category3"
}

const duplicateMockCategory3 = {
    _id: "4",
    name: "category3",
    slug: "category3"
}

const allCategories = [validMockCategory, validMockCategory2, validMockCategory3];

describe("Given CategoryModel", () => {
    beforeEach(()  => {
        jest.clearAllMocks();
        categoryModel.create.mockRestore();
        categoryModel.findOne.mockRestore();
    });

    test("When creating new category with valid inputs", async () => {
        categoryModel.create.mockResolvedValueOnce(validMockCategory);

        const result = await categoryModel.create(validMockCategory);
        expect(result).toEqual(validMockCategory);
    });

    test("When fetching all categories", async () => {
        categoryModel.find.mockResolvedValue(allCategories);

        const result = await categoryModel.find();

        expect(result).toEqual(allCategories);
    });

    test("When finding a category by id", async () => {
        categoryModel.findOne.mockResolvedValue(validMockCategory);

        const result = await categoryModel.findOne({
            _id: validMockCategory._id
        });

        expect(result).toEqual(validMockCategory);
    });

    test("When finding a category by name", async () => {
        categoryModel.findOne.mockResolvedValue(validMockCategory);

        const result = await categoryModel.findOne({
            name: validMockCategory.name
        });

        expect(result).toEqual(validMockCategory);
    });

});
