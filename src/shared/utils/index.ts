const baseURL = "https://mohammed-api.vercel.app/api";


export const Endpoints = {
    getProducts: ({ limit, skip, category, query }: ProductFilters ): string => `${baseURL}/products/?limit=${limit}&skip=${skip}&category=${category}&query=${query}`,
}