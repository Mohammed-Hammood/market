type ProductFilters = {
    limit: number;
    query: string;
    skip: number;
    category: Category;
}

enum Category {
    all = "all",
    automotive = "automotive",
    groceries = "groceries",
    homeDecoration = "home-decoration",
    fragrances = "fragrances",
    furniture = "furniture",
    laptops = "laptops",
    lighting = "lighting",
    mensShirts = "mens-shirts",
    mensShoes = "mens-shoes",
    mensSatches = "mens-watches",
    motorcycle = "motorcycle",
    skinCare = "skincare",
    smartPhones = "smartphones",
    sunGlasses = "sunglasses",
    tops = "tops",
    womensBags = "womens-bags",
    womensDresses = "womens-dresses",
    womensJewellery = "womens-jewellery",
    womensShoes = "womens-shoes",
    womensWatches = "womens-watches",
}