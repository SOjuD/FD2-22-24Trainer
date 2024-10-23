import { getMovies } from './api';
import './mainContent/filters';
import { createMovieCardList, createPagination } from './mainContent/index';
import { updateMoviesCounter } from './mainContent/moviesCounter';
import { endLoading } from './utils';

export const initApp = (param) => {
	getMovies(param).then(data => {
		updateMoviesCounter(data.totalAmount)
		createMovieCardList(data.data)
		createPagination(data.limit, data.offset, data.totalAmount)
		endLoading()
	})
}