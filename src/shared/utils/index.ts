// const baseURL = "http://localhost:5000/api";
// const baseURL = "https://dummyjson.com";
const baseURL = "https://mohammed-api.vercel.app/api";

type Params = {
    query: string;
    limit: number;
    skip: number;
    category: string
}

export const Endpoints = {
    getProducts: ({ limit, skip, category, query }: Params): string => `${baseURL}/products/?limit=${limit}&skip=${skip}&category=${category}&query=${query}`,
    // getProducts: ({ limit, skip }: { limit: number, skip: number }): string => `${baseURL}/products?limit=${limit}&skip=${skip}`,
    // getProductsByCategory: ({ category }: { category: string }): string => `${baseURL}/products/category/${category}`,
    // getProductsByQuery: ({ query }: { query: string }): string => `${baseURL}/products/search?q=${query}`,
}