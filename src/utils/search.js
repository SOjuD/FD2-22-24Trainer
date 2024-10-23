import { moviesEvent } from '../utils';
export const objToSearchParams = (params) => {
	let searchString = '';
	Object.entries(params).forEach(([key, value]) => {
		if (value) {
			const separator = searchString.length ? '&' : '?'
			searchString += `${separator}${key}=${value}`
		}
	})

	return searchString;
}

export const searchParamsToObj = (searchParams) => {
	return Object.fromEntries(new URLSearchParams(searchParams))
}
export const getCurrentSearchParamsObj = () => searchParamsToObj(window.location.search);

export const updateSearchParams = (newParams) => {


	window.history.pushState(undefined, '', window.location.origin + objToSearchParams({ ...searchParams, ...newParams }))

	moviesEvent()
}