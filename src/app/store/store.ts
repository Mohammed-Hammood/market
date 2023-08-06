import { Product } from '@/entities/CardsGallary/model/types/types';
import { createStore, createEffect } from 'effector';

export const $products = createStore<Product[]>([]);

export const $query = createStore<string>("");

export const setQuery = createEffect((query:string) => query);


export const $totalProducts = createStore<number>(0);

export const $limit = createStore<number>(10);

export const setLimit = createEffect((limit: number) => limit);

// const setTotalProducts = createEffect((value: number) => value);

type Props = {
	url: string;
	setLoading: (value: boolean) => void
	setUrl: (value: string | null) => void;
}

export const fetchProducts = createEffect(async ({ url, setLoading, setUrl }: Props) => {
	try {

		setLoading(true);
		const req = await fetch(url);
		const res = await req.json();
		return res;
	}
	catch (err: any) {
		console.log(err)
	}
	finally {
		setUrl(null);
		setLoading(false);
	}
});


$products
	.on(fetchProducts.doneData, (_, data) => {
		// setTotalProducts(data.total);
		$totalProducts.updates(data.total);
		// on(setLimit.done, (state:number, payload:{params:number, result:number})=> payload.result)

		return data.data
	})

$limit.on(setLimit.doneData, (_, data) => data);

$query.on(setQuery.done, (_, payload)=> payload.result);
