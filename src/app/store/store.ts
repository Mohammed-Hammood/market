import { Product } from '@/entities/CardsGallary/model/types/types';
import { Endpoints } from '@/shared/utils';
import { createStore, createEffect } from 'effector';

export const $filters = createStore<ProductFilters>({
	limit: 10,
	query: "",
	category: 'all' as Category,
	skip: 0,
})

export const setFilters = createEffect((filters: ProductFilters) => filters);

export const $products = createStore<Product[]>([]);


type Props = {
	setLoading: (value: boolean) => void
	filters: ProductFilters;
}

export const fetchProducts = createEffect(async ({ setLoading, filters }: Props) => {
	const url = Endpoints.getProducts({...filters, limit: 100});

	try {

		setLoading(true);
		const req = await fetch(url);
		const res = await req.json();
		return res;
	}
	catch (err) {
		console.log(err)
	}
	finally {
		setLoading(false);
	}
});


$products
	.on(fetchProducts.doneData, (_, data) => {
		return data.data
	})

$filters.on(setFilters.done, (_, payload) => payload.result);
