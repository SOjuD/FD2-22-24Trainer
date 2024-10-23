import { objToSearchParams } from '../utils';
import { startLoading } from '../utils/loading';
import { baseApiUrl, defaultSearchParams } from "./constants";
import { handleRequestReject, handleRequestResolve } from './utils';

export const getMovies =
	(params) => {
		startLoading();
		const searchParams = objToSearchParams({ ...defaultSearchParams, ...params });

		return fetch(`${baseApiUrl}${searchParams}`)
			.then(handleRequestResolve)
			.catch(handleRequestReject)
	}