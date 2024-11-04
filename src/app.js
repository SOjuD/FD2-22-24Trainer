import { getMovies } from './api';
import './mainContent/filters';
import { createMovieCardList, createPagination } from './mainContent/index';
import { updateMoviesCounter } from './mainContent/moviesCounter';
import './mainContent/search';
import { endLoading, searchParamsToObj } from './utils';

export const initApp = () => {
	const params = searchParamsToObj(window.location.search);

	getMovies(params).then(data => {
		updateMoviesCounter(data.totalAmount)
		createMovieCardList(data.data)
		createPagination(data.limit, data.offset, data.totalAmount)
		endLoading()
	})
}